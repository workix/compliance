# Workix — Roadmap Técnico de Faturamento e Visibilidade

**Versão:** 2.0 · setembro de 2026

> Este documento só deve ser executado **depois** que a liquidez mínima da Fase 1 for atingida (doc 01, §6). Escrever billing e motor de destaque antes de ter para quem cobrar é a forma mais comum de um projeto solo desperdiçar dois meses.

---

## 1. Princípios de arquitetura

1. **Entitlement é decisão de servidor.** O cliente pode pedir; quem autoriza é a API. Isso vale sempre, e vale em dobro num projeto de código aberto.
2. **O gateway é a fonte da verdade do pagamento; seu banco é a fonte da verdade do acesso.** Nunca dependa de uma chamada síncrona ao gateway para responder se um usuário pode publicar uma vaga ou comprar destaque.
3. **Todo webhook é idempotente e persistido antes de processado.** Gateways reenviam. Sempre.
4. **Degradação suave.** Assinatura vencida não apaga dado, não bloqueia login e não esconde histórico — reduz capacidade.
5. **Zero segredo no repositório aberto.**
6. **Cobrança é auditável.** Toda mudança de plano, crédito e limite tem registro imutável.
7. **Rótulo de conteúdo patrocinado é invariante de sistema, não regra de negócio configurável.** Nenhuma flag de cliente, plano ou operação comercial pode suprimir a exibição do rótulo `is_sponsored`. Isso é imposto por teste automatizado no repositório aberto (03, §4.3).
8. **Consentimento de visibilidade é verificado antes de qualquer exposição de dado pessoal**, nunca depois. Ver §4.2.

---

## 2. Escolha do gateway

| Gateway | Assinaturas | Pix | Boleto | Cartão | NFS-e automática | Observação |
|---|---|---|---|---|---|---|
| **Asaas** | ✅ Nativas | ✅ | ✅ | ✅ | ✅ **Sim** | Feito para SaaS brasileiro pequeno; emite nota; suporta cobrança avulsa (útil para destaque avulso) |
| **Iugu** | ✅ Nativas | ✅ | ✅ | ✅ | ✅ Sim | Similar, foco em recorrência |
| **Stripe** | ✅ Excelentes | ✅ | ✅ | ✅ | ❌ Não | Melhor DX e melhor billing; nota fiscal por fora |
| **Pagar.me** | ✅ | ✅ | ✅ | ✅ | ❌ Não | Boa infra, recorrência menos madura |
| **Mercado Pago** | ⚠️ Limitadas | ✅ | ✅ | ✅ | ❌ Não | Alcance de consumidor; ruim para B2B recorrente |

### Recomendação

**Asaas (ou Iugu) para o B2B brasileiro**, tanto para assinatura quanto para cobrança avulsa de Vaga em Destaque — a emissão automática de NFS-e economiza uma tarefa manual mensal que cresce com a base, e a cobrança avulsa madura é o que sustenta o modelo de crédito de destaque.

**Stripe entra depois**, se e quando houver cliente internacional ou se o volume justificar a diferença de DX.

> **[VALIDAR]** Todas as taxas mudam. Confirme cartão, Pix, boleto, antecipação e taxa de saque antes de decidir. Confirme também se o gateway escolhido lida bem com cobrança avulsa de valor variável (necessário para pacotes de créditos de destaque).

### Regras de cobrança

- **Pix como padrão sugerido** para compra avulsa de destaque — liquidação imediata, sem espera de aprovação de cartão que atrase a ativação do boost
- **Cartão como padrão de recorrência** de assinatura
- **Boleto só no plano anual e no white-label** — inadimplência e conciliação não compensam no mensal nem no avulso
- **Sem trial com cartão.** Trial de 14 dias sem cartão; pede cartão só no fim

---

## 3. Modelagem de dados

```sql
-- Organizações (empresas contratantes)
organizations (
  id, name, cnpj, slug, verified_at, response_rate_90d,
  created_at
)

-- Catálogo de planos (versionado: nunca edite um plano em uso)
plans (
  id, code,               -- 'starter_v1', 'pro_v1', 'business_v1'
  name, price_cents, currency, interval,  -- 'month' | 'year'
  active, created_at
)

-- Limites e recursos por plano (dados, não if/else no código)
plan_features (
  plan_id, feature_key,   -- 'max_active_jobs', 'contact_credits',
                          -- 'boost_credits_monthly', 'has_api',
                          -- 'max_users', 'retention_days'
  limit_value,            -- NULL = ilimitado
  enabled
)

-- Assinaturas
subscriptions (
  id, organization_id, plan_id,
  status,                 -- trialing|active|past_due|paused|canceled
  gateway_customer_id, gateway_subscription_id,
  current_period_start, current_period_end,
  trial_ends_at, cancel_at_period_end,
  founder_discount_pct,   -- desconto vitalício de fundador
  created_at, updated_at
)

-- Overrides pontuais (add-ons, cortesia, negociação)
subscription_overrides (
  subscription_id, feature_key, limit_value, expires_at, reason
)

-- Contadores de uso com janela (créditos de contato, créditos de destaque)
usage_counters (
  organization_id, feature_key, period_start, period_end,
  used, UNIQUE(organization_id, feature_key, period_start)
)

-- Compras avulsas (destaque avulso, pacotes de créditos)
purchases (
  id, organization_id, sku,      -- 'boost_7d', 'boost_15d', 'boost_pack_5'
  amount_cents, gateway_charge_id, status,
  credits_granted, credits_remaining,
  purchased_at
)

-- Vagas em destaque (o coração do motor de visibilidade)
job_boosts (
  id, job_id, organization_id,
  source,                 -- 'plan_credit' | 'purchase' | 'founder_bonus'
  purchase_id NULL,
  starts_at, ends_at,
  label TEXT DEFAULT 'Patrocinada',  -- imutável, nunca configurável para vazio
  max_concurrent_slot INT,           -- posição máxima simultânea por categoria/região
  status,                 -- scheduled|active|expired|revoked
  created_at
)

-- Perfil de candidato em destaque (Fase 4, Workix Premium)
profile_boosts (
  id, candidate_id, subscription_id,
  starts_at, ends_at, label TEXT DEFAULT 'Perfil em destaque',
  status
)

-- Visibilidade e consentimento do candidato (as três chaves do doc 02, §4.3)
visibility_settings (
  candidate_id PRIMARY KEY,
  searchable_by_recruiters BOOLEAN DEFAULT true,
  open_to_work_visible BOOLEAN DEFAULT false,
  show_as_viewed BOOLEAN DEFAULT true,
  updated_at
)

-- Registro de visualização de perfil (dado pessoal — ver LGPD, doc 03 §7.2)
profile_views (
  id, viewer_organization_id, viewer_user_id, candidate_id,
  viewed_at, source,      -- 'search' | 'boost_recommendation'
  UNIQUE(viewer_organization_id, candidate_id, viewed_at)
  -- retenção: purga automática após 12 meses (Premium) / 7 dias (Free), ver job de retenção
)

-- Créditos de contato e de mensagem direta (InMail-like)
contact_unlocks (
  id, organization_id, candidate_id, user_id,
  unlocked_at, credit_source, notified_candidate_at
  -- notified_candidate_at é obrigatório: candidato é sempre avisado do desbloqueio
)

-- Faturas
invoices (
  id, organization_id, subscription_id,
  amount_cents, status,   -- open|paid|failed|refunded|canceled
  gateway_invoice_id, nfse_number, nfse_url,
  due_date, paid_at
)

-- Webhooks: grave antes de processar
webhook_events (
  id, gateway, gateway_event_id UNIQUE,
  type, payload_json,
  received_at, processed_at, error
)

-- Trilha de auditoria
billing_audit_log (
  id, organization_id, actor, action, before_json, after_json, at
)
```

### Por que `plan_features` e `job_boosts` são tabelas, não constantes

Porque limite em constante no código significa deploy para cada ajuste comercial. Com tabela, você muda preço, cria plano promocional, concede cortesia de destaque e limita posições simultâneas por categoria — sem tocar no código, e com histórico. `job_boosts.max_concurrent_slot` é o campo que impede que duas empresas grandes comprem todas as posições de destaque de uma categoria e excluam as pequenas (01, §3.3 do doc 02).

---

## 4. Camada de entitlements e de visibilidade

Duas funções. Dois pontos de decisão. Todo o resto chama elas.

```
can(organization, feature_key, quantity = 1) → Allow | Deny(reason, upgrade_to)

reveal(candidate, viewer_organization, data_scope) → Allow | Deny(reason)
```

### 4.1 `can()` — entitlement de capacidade (igual à v1.0)

```
1. Override ativo para a organização?          → usa o override
2. Assinatura em status que concede acesso?
     active | trialing            → usa o plano da assinatura
     past_due (dentro da carência) → usa o plano da assinatura
     paused | canceled | past_due (fora)  → cai para o plano FREE
3. Lê plan_features[feature_key]
4. Se for feature com contador (contact_credits, boost_credits) →
   compara com usage_counters do período, ou com purchases.credits_remaining
5. Retorna Allow ou Deny com o motivo e o plano/produto sugerido
```

### 4.2 `reveal()` — a função nova, que protege o consentimento

Toda tentativa de expor dado pessoal de um candidato a uma organização (contato, CV completo, identidade em "quem viu meu perfil") passa por aqui, **antes** de `can()` decidir se a organização tem crédito para a ação:

```
1. visibility_settings[candidate].searchable_by_recruiters == false?
      → Deny imediato, independente de plano ou crédito
2. A ação é "revelar contato"?
      → Exige contact_unlocks registrado NESTA chamada, com
        notified_candidate_at preenchido antes do dado ser retornado
3. A ação é "revelar identidade do visualizador ao candidato"?
      → Sempre permitido; é o candidato revelando para si mesmo
4. A ação é "listar candidato como destacado"?
      → Exige profile_boosts ativo E visibility_settings.open_to_work_visible
        compatível com o contexto (nunca revela para o empregador atual,
        se identificado)
5. Retorna Allow ou Deny — nunca "Allow silencioso"
```

Regras de implementação:

- **Um único middleware** na API aplica `can()` e `reveal()`. Nenhuma rota decide sozinha.
- **Deny sempre carrega motivo e caminho de upgrade** — a resposta da API alimenta a UI do paywall.
- Cache curto (30–60s) por organização para `can()`; **`reveal()` nunca é cacheado** — é verificado a cada chamada, porque o consentimento pode mudar a qualquer momento.
- Contador é incrementado **em transação com a ação**, nunca antes nem depois.
- **Teste automatizado por combinação plano × feature, e por combinação de `visibility_settings` × tipo de revelação.** É a parte do sistema em que um bug custa dinheiro real, queima um cliente, ou vira incidente de LGPD.

### 4.3 Rotulagem — regra de renderização, não só de dado

Todo objeto retornado pela API que tenha `is_sponsored = true` (vaga ou perfil) carrega também `sponsor_label` fixo ("Patrocinada" / "Perfil em destaque"). O contrato de API não permite omitir esse campo quando `is_sponsored = true`, e o front-end tem teste de snapshot garantindo que o rótulo é renderizado sempre que o campo existir.

---

## 5. Ciclo de vida da assinatura

```
     [ signup ]
         │
         ▼
    trialing ──── 14 dias ────► pede cartão
         │                          │
         │ converte                 │ não converte
         ▼                          ▼
      active ◄──── pagamento ──── free
       │  ▲            ok
 falha │  │ recuperado
       ▼  │
    past_due ──── 7 dias de carência ────► free (dados preservados)
       │
       │ cliente pausa
       ▼
     paused ──── retoma em 1 clique ────► active
```

### Dunning (recuperação de pagamento)

| Dia | Ação |
|---|---|
| 0 | Falha. E-mail: "não conseguimos processar, atualize o cartão" + link |
| 1 | Retentativa automática |
| 3 | Retentativa + e-mail com opção de pagar por Pix |
| 5 | Aviso no topo da aplicação, ainda com acesso completo |
| 7 | Rebaixa para Free. **Dados preservados. Destaques ativos comprados avulso continuam até o fim do período pago.** E-mail explicando |
| 14 | E-mail de reativação com link direto |

> Dunning bem feito recupera tipicamente boa parte do churn involuntário de cartão. É o trabalho de billing com melhor retorno por hora investida.

### Comportamento no downgrade — o que **não** fazer

| ❌ Nunca | ✅ Sempre |
|---|---|
| Apagar vagas excedentes | Arquivar, com aviso e opção de escolher qual manter ativa |
| Cancelar um destaque avulso já pago antes do fim do período contratado | Deixar rodar até `job_boosts.ends_at`, mesmo que a assinatura caia para Free |
| Bloquear acesso ao histórico existente | Manter leitura; bloquear criação de novo |
| Cancelar candidaturas em andamento | Deixar concluir o processo já iniciado |
| Sumir com o dado do candidato | Nada muda para o candidato — ele não é parte da relação comercial |

---

## 6. Nota fiscal e obrigações *(validar com contador)*

- Cada fatura paga (assinatura) e cada compra avulsa (destaque) → **NFS-e emitida automaticamente** pelo gateway
- `nfse_number` e `nfse_url` gravados em `invoices`/`purchases` e visíveis ao cliente na tela de faturas
- Falha de emissão gera alerta para você, não erro para o cliente
- Definir o **código de serviço municipal** correto — a receita de destaque pode ter enquadramento distinto (mídia/publicidade) da assinatura de software; **confirme com o contador e com o município**
- Retenções na fonte podem se aplicar a clientes pessoa jurídica de certos portes — **assunto de contador, não de código**

---

## 7. Antifraude e integridade

| Vetor | Controle |
|---|---|
| Empresa falsa publicando vaga-golpe | Validação de CNPJ na Receita + e-mail corporativo antes da 1ª publicação |
| Vaga que pede pagamento do candidato | Detecção de padrão no texto e no chat + bloqueio + denúncia em 1 clique |
| Scraping da base de currículos | Rate limit por conta e por IP, paginação limitada, desbloqueio contado, alerta de anomalia |
| Múltiplas contas para burlar o Free | Unicidade por CNPJ + domínio de e-mail |
| **Manipulação de slots de destaque** (uma empresa comprando todas as posições simultâneas de uma categoria) | `job_boosts.max_concurrent_slot` limitado por categoria/região; fila de espera se todos os slots estiverem ocupados |
| **Remoção ou ocultação do rótulo `is_sponsored` via bug ou customização de fork** | Teste de contrato de API + teste de snapshot de front-end, ambos no CI do repositório aberto |
| **Consentimento revogado após visualização já registrada** | `reveal()` sempre lê o estado atual de `visibility_settings`, nunca um valor em cache |
| Chargeback | Preferir Pix e anual/avulso; guardar log de aceite dos termos com IP e timestamp |
| Recrutador que nunca responde | Taxa de resposta pública; suspensão automática do selo; limite de vagas se cair abaixo do piso |

---

## 8. Roadmap de implementação

### Sprint 1 — Fundação (1 semana)
- [ ] Tabelas `plans`, `plan_features`, `subscriptions`, `usage_counters`
- [ ] Seed dos planos Free / Starter / Pro / Business
- [ ] Função `can()` + middleware da API
- [ ] Testes de todas as combinações plano × feature

### Sprint 2 — Integração com o gateway (1–2 semanas)
- [ ] Conta no gateway, ambiente sandbox
- [ ] Criação de cliente e assinatura
- [ ] Checkout (cartão + Pix), incluindo cobrança avulsa
- [ ] Receptor de webhook com `webhook_events` e idempotência
- [ ] Sincronização de status → `subscriptions`

### Sprint 3 — Experiência do cliente (1 semana)
- [ ] Página pública de preços, com a lista do que **nunca** é feito sem rótulo/consentimento
- [ ] Tela "Meu plano": uso atual, limites, faturas, NFS-e
- [ ] Upgrade e downgrade self-serve com proporcional
- [ ] Botões **Pausar** e Cancelar (pausar em primeiro lugar)
- [ ] Componentes de paywall alimentados pelo motivo do `Deny`

### Sprint 4 — Cobrança e recuperação (1 semana)
- [ ] Máquina de estados de dunning + e-mails
- [ ] Emissão automática de NFS-e
- [ ] Trial de 14 dias sem cartão
- [ ] Alertas em 80% do limite de vagas e de créditos

### Sprint 5 — Operação (1 semana)
- [ ] Painel interno: MRR, churn, novos, cancelados, falhas de pagamento
- [ ] Concessão de cortesia e desconto de fundador via `subscription_overrides`
- [ ] `billing_audit_log` completo
- [ ] Runbook: o que fazer quando o webhook falha

### Sprint 6 — Selo de Empresa Verificada (1 semana)
- [ ] Job diário de cálculo da taxa de resposta em 90 dias
- [ ] Validação de CNPJ e de domínio de e-mail
- [ ] Concessão, suspensão automática e pausa de cobrança do selo
- [ ] Exibição pública da taxa de resposta na página da empresa

### Sprint 7 — Motor de Vaga em Destaque (2 semanas) — **novo**
- [ ] Tabelas `purchases`, `job_boosts`
- [ ] Checkout de destaque avulso e de pacotes de créditos
- [ ] Lógica de slot máximo por categoria/região + fila de espera
- [ ] Enforcement de rótulo `is_sponsored` no backend + testes de contrato
- [ ] Renderização do rótulo no front-end + teste de snapshot
- [ ] Painel de desempenho de destaque para a empresa (impressões, cliques)

### Sprint 8 — Visibilidade e consentimento do candidato (2 semanas) — **novo, pré-requisito do Premium**
- [ ] Tabela `visibility_settings` + tela de controle para o candidato (as três chaves)
- [ ] Tabela `profile_views` com job de retenção/purga automática
- [ ] Função `reveal()` + middleware, com testes de todas as combinações de consentimento
- [ ] Tabela `contact_unlocks` com notificação obrigatória ao candidato

### Sprint 9 — Workix Premium (candidato) (1–2 semanas) — **só após os gatilhos de volume do doc 02, §4.1**
- [ ] `profile_boosts` + checkout de assinatura Premium
- [ ] Tela "quem viu seu perfil" consumindo `profile_views` com respeito a `visibility_settings`
- [ ] Insights agregados (motor fechado, workix-enterprise)

**Total estimado: 10 a 13 semanas de trabalho solo em tempo parcial, distribuídas entre a Fase 2 e a Fase 4 — não é um bloco único de trabalho antes do lançamento.**

---

## 9. Checklist de lançamento do billing e do motor de destaque

- [ ] Testado com cartão real de valor baixo, ponta a ponta (assinatura e compra avulsa)
- [ ] Webhook testado com reenvio duplicado (idempotência comprovada)
- [ ] Downgrade testado: nenhum dado perdido, destaque avulso ativo respeitado até o fim
- [ ] Cancelamento testado: acesso mantido até o fim do período pago
- [ ] Rótulo `is_sponsored` testado: impossível renderizar conteúdo patrocinado sem rótulo em nenhuma tela
- [ ] `reveal()` testado: nenhuma combinação de plano/crédito libera dado com `visibility_settings` negando
- [ ] NFS-e emitida corretamente em ambiente real, para assinatura e para destaque avulso
- [ ] Termos de Uso, Política de Reembolso e Termos de Publicidade (destaque) publicados
- [ ] Direito de arrependimento de 7 dias previsto (CDC, art. 49 — contratação a distância) **[validar aplicabilidade B2B com advogado]**
- [ ] Nenhum segredo no repositório (`gitleaks` na história completa)
- [ ] Monitoramento e alerta de falha de pagamento chegando até você
- [ ] Plano de rollback caso o gateway falhe no lançamento

---

**Próximo documento:** [06-REPOSICIONAMENTO-NARRATIVA.md](./06-REPOSICIONAMENTO-NARRATIVA.md)
