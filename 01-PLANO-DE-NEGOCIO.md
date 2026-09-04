# Workix — Plano de Negócio

**Versão:** 2.0 · setembro de 2026
**Modelo:** acesso e visibilidade, dos dois lados do marketplace (referência: LinkedIn Premium Career + Recruiter/Jobs)

---

## 1. O problema que a Workix resolve

### 1.1 Do lado do candidato

O processo seletivo brasileiro tem três falhas crônicas, e nenhuma delas é técnica:

- **Silêncio.** O candidato passa por quatro etapas e não recebe resposta. Não é falta de ferramenta — é falta de custo para a empresa não responder.
- **Vaga fantasma.** Anúncios que ficam no ar meses depois da contratação, vagas de banco de talentos disfarçadas de vaga real, vagas publicadas por agências que nem têm o cliente fechado.
- **Invisibilidade.** Currículo bom, mas nunca visto — porque o recrutador filtra por poucos critérios e não chega até ele, ou porque outro perfil pagou para aparecer primeiro sem que isso fique claro.

### 1.2 Do lado da empresa (a que paga a assinatura)

A empresa pequena e média brasileira está espremida entre dois extremos ruins:

- **ATS corporativo** (Gupy, Solides, Kenoby/Gupy) — potente, mas contrato anual, implantação, preço de empresa grande. *[ESTIMATIVA — VALIDAR: faixa de R$1.500 a R$15.000+/mês conforme porte]*
- **Job board tradicional ou LinkedIn** — publicar é barato, mas achar o candidato certo exige pagar por destaque (LinkedIn Jobs, Indeed Sponsored) com preço de leilão pouco previsível, ou depender de um banco de currículos separado (Catho, InfoJobs). *[ESTIMATIVA — VALIDAR]*

Entre os dois há um vazio: **a empresa de 10 a 200 funcionários que contrata 2 a 15 pessoas por ano, não tem RH estruturado, e hoje resolve isso com um grupo de WhatsApp, uma planilha e um anúncio no Instagram — ou paga um leilão de CPC no LinkedIn sem saber se valeu a pena.** É o ICP da Workix.

### 1.3 Por que "vender visibilidade" resolve, em vez de piorar, esses três problemas

Vender visibilidade não é neutro em relação às três dores acima — pode piorá-las (mais vaga fantasma patrocinada, mais invisibilidade para quem não paga) ou melhorá-las, dependendo de como é desenhado. A tese deste plano é que **dá para vender destaque sem sacrificar a promessa de que a plataforma não é manipulada**, através de três regras de produto, não de marketing: rótulo obrigatório em todo conteúdo pago, preservação do resultado orgânico para quem não paga, e consentimento para liberação de contato. Ver **[06-REPOSICIONAMENTO-NARRATIVA.md](./06-REPOSICIONAMENTO-NARRATIVA.md)**.

---

## 2. Mercado

### 2.1 Dimensionamento (metodologia, não números decorados)

Como não foi possível confirmar dados nesta sessão, o que segue é **um método para você calcular**, com placeholders marcados. Preencha com dados do IBGE/CAGED/RAIS e do Mapa de Empresas (gov.br), que são gratuitos.

```
TAM  = nº de empresas ativas no Brasil com 10+ funcionários
       × ticket médio anual plausível de software de recrutamento + mídia de vaga
       [VALIDAR: base CNPJ ativa, Mapa de Empresas / RAIS]

SAM  = empresas do porte-alvo (10–200 func.) nos setores e regiões
       que a Workix consegue servir em português, no Brasil
       [VALIDAR]

SOM  = SAM × penetração realista de um fundador solo em 24 meses
       Regra prática: 0,05% a 0,3% do SAM no nicho escolhido
```

**Ordem de grandeza para calibrar expectativa:** um fundador solo, sem capital, num nicho vertical bem escolhido, consegue tipicamente entre 50 e 300 clientes pagantes de SMB em 24 meses. Planeje para 40–90 em 12 meses. A receita de vagas em destaque tende a crescer mais rápido que a de assinatura, porque não exige troca de ferramenta — é uma compra pontual de mídia, com fricção menor. Qualquer projeção acima disso num plano bootstrap é ficção.

### 2.2 Concorrência — mapa honesto

| Player | Modelo | Força | Brecha que deixa aberta |
|---|---|---|---|
| **LinkedIn** | Freemium + Premium Career + Recruiter + Jobs (CPC/CPA) | Rede global, dado de carreira, é a referência de modelo deste plano | Caro; leilão de CPC imprevisível; ruim para vagas operacionais e regionais; feed ruidoso; conteúdo pago nem sempre rotulado com clareza para o candidato |
| **Gupy** | SaaS enterprise, contrato anual | Marca forte em RH, IA de triagem | Fora do alcance de PME; implantação pesada |
| **Catho** | Assinatura de candidato + banco de currículos + destaque de vaga | Volume de base | Cobra do candidato para banco de currículos há anos; percepção de vaga fantasma alta |
| **InfoJobs** | Pacote de vagas + destaque avulso | Preço de entrada baixo | Experiência datada; sem ATS real |
| **Indeed** | Agregador + pay-per-click | Alcance de tráfego | Vaga fantasma em escala; suporte inexistente; clique pago sem controle de qualidade |
| **Grupos de WhatsApp / Instagram** | Grátis | É onde a PME está hoje | Zero organização, zero histórico, zero triagem |

**O concorrente real da Workix no dia 1 continua sendo o grupo de WhatsApp — não o LinkedIn.** Mas a partir do dia em que a Workix vende destaque, o LinkedIn Jobs e o Indeed Sponsored passam a ser o comparativo direto de preço e de transparência. Isso deve orientar o pricing (02) e o discurso de venda (04, seção 7).

### 2.3 O ativo mais raro no mercado: visibilidade com regras

Todo concorrente listado acima vende destaque. Nenhum publica, de forma auditável, as regras que o impedem de manipular o resultado a favor de quem paga mais. **A Workix pode publicar essas regras — e o código aberto torna a afirmação verificável.** Isso substitui, como diferencial competitivo, a antiga promessa de "não vender visibilidade": a nova promessa é "vender visibilidade com regras que você pode auditar". Ver 03 e 06.

---

## 3. Cliente ideal (ICP)

### 3.1 ICP primário — quem paga a assinatura de acesso

> **Empresa brasileira de 10 a 200 funcionários, com 2 a 15 contratações por ano, sem sistema de recrutamento, onde a triagem é feita por um dono, um gerente ou um RH de uma pessoa só.**

Sinais de qualificação:

- Já publica vaga em algum lugar (Instagram, WhatsApp, InfoJobs, LinkedIn) → tem a dor e já gasta tempo ou dinheiro com destaque
- Reclama de "chove currículo e não presta" ou "pago destaque no LinkedIn e não sei se funciona" → dor de triagem e de previsibilidade de mídia
- Contrata para funções presenciais ou regionais → onde LinkedIn é fraco e caro
- Não tem contrato com ATS → sem custo de troca

Anti-ICP (não persiga agora): startups de tecnologia remotas (já usam ATS e LinkedIn Recruiter), grandes empresas (ciclo de venda longo demais para solo), agências de RH (querem revender e vão brigar por preço).

### 3.2 ICP secundário — quem compra visibilidade (Fase 3)

> **Candidato de nível operacional, técnico e administrativo, 18–45 anos, que se candidata pelo celular, e que quer saber se foi visto e aparecer mais para quem está contratando.**

Ele é gratuito e pleno participante no núcleo desde o dia 1 (perfil, candidatura, status). Ele se torna cliente pagante apenas quando houver volume suficiente de recrutadores buscando para que "destaque" e "quem viu seu perfil" tenham significado real — ver gatilhos em 02, seção 4.1.

### 3.3 ICP terciário — o de maior ticket

> **Entidade que quer o próprio job board com a própria marca**: associação setorial, sindicato patronal, federação da indústria, universidade/centro universitário, prefeitura, aceleradora, condomínio industrial, câmara de comércio.

Ticket alto, ciclo mais longo, e agora com um ativo a mais para vender: o motor de destaque/visibilidade licenciado junto com o núcleo, para que a entidade também possa monetizar (ou simplesmente oferecer) posições de patrocínio dentro do próprio job board. Ver 03, seção 4.

---

## 4. Proposta de valor

### 4.1 Para a empresa

> "Publique, receba e organize candidaturas em um só lugar. Quando precisar de mais alcance, pague por destaque — e você vai ver exatamente o que está comprando, sem leilão escondido."

Entregas concretas:
- Vaga no ar em menos de 3 minutos, sem implantação
- Funil kanban simples (Novo → Triagem → Entrevista → Oferta → Encerrado)
- Busca de candidatos com filtros de verdade (cidade, contrato, senioridade)
- **Vaga em Destaque**: preço fixo ou por pacote de créditos, sempre com previsão de alcance estimado antes da compra — nada de leilão opaco
- Página de empresa pública, indexável no Google
- Encerramento automático de vaga com validade — sem esqueleto no ar
- Preço self-serve, cartão ou Pix, cancela quando quiser

### 4.2 Para o candidato

> "Você fica sabendo o que aconteceu com a sua candidatura, sempre, de graça. Se quiser aparecer mais para quem está contratando, também pode — e vai saber exatamente o que isso muda."

- Status real e visível de cada candidatura
- Candidatar-se, criar perfil e receber resposta são gratuitos, sempre
- Controle total sobre o próprio currículo (ativar, desativar, excluir)
- Controle sobre a própria visibilidade: decidir se aparece como "aberto a oportunidades" para recrutadores, e se aparece como "visualizado" para quem vê seu perfil
- **Workix Premium (opcional, Fase 3)**: destaque na busca do recrutador, ver quem visitou seu perfil, insights de concorrência da vaga — nunca a única forma de ser visto, só uma forma de ser visto mais

### 4.3 Para a entidade white-label

> "O portal de vagas do seu setor, com a sua marca, no seu domínio, sem desenvolver nada — incluindo o motor de destaque, se você quiser monetizar do seu próprio jeito — e com o código do núcleo aberto para você auditar."

---

## 5. Modelo de negócio (resumo; detalhe em 02)

```
                    ┌─────────────────────────────────┐
                    │      NÚCLEO OPEN SOURCE         │
                    │          (AGPLv3)               │
                    │  perfis · vagas · busca ·       │
                    │  candidaturas · mensagens ·     │
                    │  ranqueamento orgânico (fórmula │
                    │  documentada e auditável)       │
                    └─────────────┬───────────────────┘
                                  │
     ┌──────────────┬────────────┼────────────┬──────────────────┐
     ▼              ▼            ▼            ▼                  ▼
┌──────────┐ ┌──────────────┐ ┌─────────┐ ┌───────────┐ ┌────────────────┐
│ Assinatura│ │ Vagas em     │ │ Selo    │ │ Workix    │ │ Workix         │
│ B2B acesso│ │ Destaque     │ │Verificado│ │ Premium   │ │ White-label    │
│ (empresas)│ │ (empresas)   │ │(empresas)│ │(candidato,│ │ (entidades)    │
│           │ │              │ │         │ │ Fase 3)   │ │                │
│R$79-699/mês│ │avulso/crédito│ │R$39/mês │ │R$19,90/mês│ │a partir R$2.500│
│ ~45% receita│ │ ~25% receita │ │~5% receita│ │~10% receita│ │ ~15% receita  │
└──────────┘ └──────────────┘ └─────────┘ └───────────┘ └────────────────┘
       ▲              ▲
       └────── motor de visibilidade/destaque: proprietário, fechado ──────┘
                        (ver 03, seção 4 — a fronteira open core mudou)
```

---

## 6. Fases de execução

### Fase 0 — Fundação (mês 0–2) · *sem cobrar nada*
Reposicionar a narrativa (anunciar a mudança de promessa), escolher o nicho, registrar marca, redesenhar a fronteira open core, fechar o MVP de empresa (kanban + busca + encerramento automático). Meta: **20 empresas ativas e 300 candidatos no nicho.**

### Fase 1 — Liquidez (mês 2–6) · *ainda grátis*
Tudo liberado, sem paywall, com aviso claro: *"gratuito durante o período de fundação; assinaturas e destaques pagos a partir de [data], e quem entrar agora tem preço de fundador vitalício."* Meta: **liquidez mínima — 60% das vagas com ao menos 5 candidaturas em 7 dias.**

> Este é o número que autoriza a cobrança de assinatura. Sem ele, não ligue o billing.

### Fase 2 — Primeira receita B2B (mês 6–10)
Ligar planos B2B de acesso. Preço de fundador para a base inicial. Selo de Empresa Verificada. Meta: **40 pagantes, R$7.000 de MRR de assinatura.**

### Fase 3 — Monetização de visibilidade (mês 9–14)
Ligar Vagas em Destaque para empresas (exige apenas volume de vagas/buscas, não exige volume de candidatos ativos como o Premium do candidato exige). Meta inicial: **20% das empresas pagantes comprando ao menos 1 destaque/mês.**

### Fase 4 — Visibilidade do candidato e escala (mês 14–24)
Workix Premium para candidato, liberado só quando os gatilhos de volume forem atingidos (02, §4.1). White-label, API, primeiro contrato de entidade. Meta: **R$25.000–40.000 de MRR e a decisão de sair do emprego ou não.**

---

## 7. Métricas

### 7.1 Métricas de liquidez (as que importam antes da receita)

| Métrica | Meta Fase 1 |
|---|---|
| % de vagas com ≥5 candidaturas em 7 dias | ≥ 60% |
| Tempo mediano até a 1ª candidatura | < 24 h |
| % de candidatos com ≥1 resposta (qualquer status) | ≥ 80% |
| % de vagas encerradas com desfecho registrado | ≥ 70% |
| Vagas ativas por semana no nicho | ≥ 40 |

> **A métrica que ainda define a Workix não é a de visibilidade — é a taxa de resposta.** É o único número que nenhum concorrente (nem o LinkedIn) publica, e continua sendo a prova viva de um diferencial que a venda de destaque não anula. Publique-a no site, atualizada.

### 7.2 Métricas de negócio (Fase 2+)

| Métrica | Alvo |
|---|---|
| MRR / ARR (assinatura + destaque + premium) | Ver projeções em 02 |
| Churn mensal de empresa (SMB self-serve) | < 6% |
| Conversão free → pago (assinatura) | 4% a 8% |
| % de empresas pagantes que compram destaque no mês | 15% a 30% **[ESTIMATIVA — VALIDAR]** |
| Conversão candidato free → Premium (pós-Fase 4) | 1% a 3% **[ESTIMATIVA — VALIDAR, benchmark LinkedIn Premium é baixo]** |
| CAC (B2B, canais orgânicos + ads) | < R$ 300 |
| LTV / CAC | > 3× |
| Ativação (empresa que publica 1ª vaga em 48h) | > 50% |
| NPS de candidato | > 50 |

### 7.3 Alerta específico de job board

Empresa cancela quando **termina de contratar**, não quando fica insatisfeita. Isso infla o churn artificialmente. Duas defesas:

1. **Plano anual com desconto forte** (2 meses grátis) — converte churn sazonal em receita previsível.
2. **Botão "pausar assinatura"** em vez de cancelar — mantém dados, retoma em 1 clique. A compra de Vaga em Destaque, por ser avulsa, não sofre desse problema — e é uma das razões para priorizá-la como receita complementar estável.

---

## 8. Riscos e mitigações

| Risco | Prob. | Impacto | Mitigação |
|---|---|---|---|
| Cold start — marketplace vazio | **Alta** | Fatal | Nicho estreito; seed manual de vagas; grátis até liquidez (04, §2) |
| Backlash pela reversão da promessa "nunca venderemos visibilidade" | **Alta** | Alto | Anunciar a mudança abertamente, antes de vender; ancorar em garantias novas e verificáveis (rótulo, orgânico preservado, consentimento); preço de fundador (06) |
| Pressão comercial para reduzir a qualidade do orgânico e empurrar venda de destaque | Média | **Alto (destrói o diferencial)** | Regra de produto enforced no código aberto: rótulo obrigatório e preservação do orgânico não são configuráveis por decisão comercial (03, §4) |
| Fundador único vira gargalo | Alta | Alto | Self-serve total; suporte assíncrono; nada de onboarding manual abaixo de Business |
| LGPD — currículo, CPF, dado sensível, dado de visualização de perfil | Média | **Fatal** | Minimizar coleta; base legal definida; DPO nomeado; retenção e exclusão automáticas; consentimento de visibilidade (03, §7) |
| Concorrente copia o código | Baixa | Baixo | O código do núcleo não é o fosso: liquidez, marca e o motor de destaque fechado são. Marca registrada + AGPL (03, §5) |
| Vaga fantasma / spam de recrutador | Média | Alto | Validação de CNPJ; validade obrigatória; taxa de resposta pública; suspensão automática |
| Fraude e golpe de emprego na plataforma | Média | **Alto** | Verificação de CNPJ antes de publicar; bloqueio de pedido de pagamento no chat; canal de denúncia |
| Clique fraudulento em Vaga em Destaque (se for modelo CPC) | Média | Médio | Preferir preço fixo por período a CPC puro; se usar CPC, rate limit e detecção de anomalia por IP/conta (05, §7) |
| Sazonalidade de contratação | Alta | Médio | Plano anual; pausa; receita de destaque avulso e white-label como base mais estável |
| Dependência de Firebase / vendor lock-in | Média | Médio | Camada de abstração de auth; plano de saída documentado (relevante para o self-hosted) |

---

## 9. Estrutura legal e tributária *(validar com contador)*

| Tema | Recomendação inicial |
|---|---|
| Pessoa jurídica | Abrir PJ antes da primeira cobrança. MEI provavelmente **não** serve: o limite de faturamento e a lista de atividades permitidas costumam não acomodar desenvolvimento/licenciamento de software nem venda de mídia/publicidade. **[VALIDAR — limites e regras do MEI e do Simples mudam]** |
| Regime | Simples Nacional, anexo aplicável a software e a serviços de publicidade/veiculação (a receita de Vaga em Destaque pode ter enquadramento tributário distinto da assinatura de software) **[VALIDAR com contador]** |
| Emissão fiscal | NFS-e municipal obrigatória por assinatura e por compra de destaque → escolher gateway com emissão automática (ver 05, §2) |
| Contratos | Termos de Uso, Política de Privacidade, DPA (contrato de tratamento de dados) com empresas contratantes, CLA para contribuidores, Termos de Publicidade para Vaga em Destaque |
| Marca | Registro INPI, classes 42 (software) e 35 (recrutamento e publicidade). **Faça isso já** — é mais urgente que a licença |

---

## Anexo A — Checklist de validação de dados

Nada abaixo foi confirmado nesta sessão. Confirme antes de mostrar a terceiros.

- [ ] Preços públicos atuais: Gupy, Catho (empresas), InfoJobs, Vagas.com, Solides, LinkedIn Recruiter Lite BR, LinkedIn Jobs (CPC médio), Indeed Sponsored (CPC médio)
- [ ] Nº de empresas ativas por faixa de porte — Mapa de Empresas (gov.br) e RAIS
- [ ] Volume de admissões no nicho escolhido — CAGED, série mensal
- [ ] Taxas atuais dos gateways: Stripe BR, Asaas, Pagar.me, Iugu (cartão, Pix, boleto, antecipação)
- [ ] Limite de faturamento do MEI e enquadramento do Simples para CNAE de software e de publicidade/mídia
- [ ] Alíquota de ISS do seu município para 1.05/1.07 (licenciamento e suporte de software) e para veiculação de publicidade
- [ ] Custo real de infra na escala prevista (Firebase/Cloud Run/Postgres gerenciado)
- [ ] Benchmarks de conversão de destaque pago (% de vagas que compram boost) em job boards SMB
- [ ] Benchmark de conversão free→Premium em produtos de carreira estilo LinkedIn Premium
- [ ] Exigências da ANPD aplicáveis a plataformas de recrutamento e a rastreamento de visualização de perfil
- [ ] Disponibilidade da marca "Workix" no INPI e do domínio .com.br

---

**Próximo documento:** [02-MONETIZACAO-E-PRICING.md](./02-MONETIZACAO-E-PRICING.md)
