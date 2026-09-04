# Workix — Monetização e Pricing

**Versão:** 2.0 · setembro de 2026
**Modelo:** acesso e visibilidade, réplica do mecanismo LinkedIn Premium Career + Recruiter/Jobs

---

## 1. A regra que governa todo o pricing

A versão anterior deste plano partia de "a Workix nunca vende posição". Essa regra foi substituída — por decisão sua — pela regra que o LinkedIn não segue, mas que a Workix vai seguir:

> **A Workix vende visibilidade e acesso. Mas todo conteúdo pago é identificado, ninguém desaparece do resultado orgânico por não pagar, e nenhum contato é liberado sem consentimento de quem o recebe.**

Traduzindo em regras operacionais:

| Pode ser vendido | Nunca pode ser vendido |
|---|---|
| Destaque de vaga na busca e no feed (**rotulado como "Patrocinada"**) | Conteúdo pago exibido sem rótulo, disfarçado de resultado orgânico |
| Destaque de perfil de candidato na busca do recrutador (**rotulado como "Perfil em destaque"**) | Remoção ou rebaixamento artificial de quem não paga — o orgânico sempre existe e é ordenado por relevância |
| Créditos de contato direto / desbloqueio de perfil completo | Liberação de contato ou dado pessoal **sem consentimento explícito** do titular |
| Nº de vagas ativas, usuários, funcionalidades de gestão (kanban, relatórios, API) | Selo de verificação comprado sem critério de mérito (o Selo Verificado é auditado, não é destaque) |
| Insights e analytics agregados (não identificáveis) para quem paga | Venda de dados de candidato identificáveis para terceiros fora da relação de contratação |
| Retenção estendida de histórico, marca própria, domínio próprio, SSO | Remoção do direito do candidato de saber o status da própria candidatura |

Essa é a **fronteira que substitui a antiga fronteira ética-competitiva**. Ela não impede a Workix de ganhar dinheiro do jeito que o LinkedIn ganha — ela impede a Workix de ganhar dinheiro do jeito que o LinkedIn **não é transparente**. Ver 06 para o texto de comunicação dessa mudança.

---

## 2. Planos B2B de acesso — a receita-base

Cobrança mensal ou anual (anual = 10 meses, 2 grátis). Cartão de crédito e Pix. Sem contrato, sem fidelidade, sem taxa de setup.

| | **Free** | **Starter** | **Pro** | **Business** |
|---|---|---|---|---|
| **Preço/mês** | R$ 0 | **R$ 79** | **R$ 249** | **R$ 699** |
| **Preço/ano** | — | R$ 790 | R$ 2.490 | R$ 6.990 |
| Vagas ativas simultâneas | 1 | 3 | 10 | 30 |
| Usuários/recrutadores | 1 | 1 | 3 | 10 |
| Candidaturas recebidas | Ilimitadas | Ilimitadas | Ilimitadas | Ilimitadas |
| Página pública de empresa | ✅ | ✅ | ✅ | ✅ Personalizável |
| Funil kanban | Básico (3 etapas) | ✅ Completo | ✅ + etapas custom | ✅ + múltiplos funis |
| Busca ativa de candidatos | ❌ | ✅ Filtros básicos | ✅ Filtros avançados | ✅ + busca booleana |
| Créditos de contato direto/mês (desbloqueio de perfil completo) | 0 | 10 | 60 | 250 |
| **Créditos de Vaga em Destaque incluídos/mês** | 0 | 1 | 5 | 20 |
| Mensagens com candidatos | ✅ | ✅ | ✅ | ✅ |
| Modelos de resposta e feedback em lote | ❌ | ✅ | ✅ | ✅ |
| Testes e perguntas de triagem | ❌ | 3 perguntas | ✅ Ilimitado | ✅ + pontuação |
| Exportar dados (CSV) | ❌ | ✅ | ✅ | ✅ |
| Relatórios de funil e de desempenho de destaque | ❌ | ❌ | ✅ | ✅ + comparativos |
| Retenção de histórico | 60 dias | 12 meses | 24 meses | Ilimitada |
| API e webhooks | ❌ | ❌ | Leitura | ✅ Completa |
| Domínio próprio de carreiras | ❌ | ❌ | ❌ | ✅ (subdomínio) |
| Suporte | Comunidade | E-mail 48h | E-mail 24h | Prioritário 8h |

### 2.1 Por que esses preços e por que o destaque entra no pacote

- **R$ 79** é abaixo do limiar de aprovação — um gerente paga no próprio cartão sem pedir autorização.
- **R$ 249** é o plano-alvo. A diferença central para o Starter não é mais só "mais vagas" — são **5 créditos de destaque/mês**, que dão à empresa uma amostra real do que é vender/comprar visibilidade antes de decidir comprar mais.
- **R$ 699** é a âncora superior: 20 créditos de destaque tornam o plano competitivo com um orçamento pequeno de LinkedIn Jobs, com previsibilidade de custo que o leilão de CPC não tem.
- **Free com 1 vaga ativa** existe para liquidez, não para conversão. Zero créditos de destaque no Free — destaque exige assinatura, é o gatilho de upgrade mais forte do funil.

> **[ESTIMATIVA — VALIDAR]** Estes preços assumem que a Workix se posiciona 60–85% abaixo dos ATS de mercado, e que 1 crédito de destaque equivale a um valor de mercado de R$ 39–79 avulso (ver §3). Confirme os preços públicos dos concorrentes (anexo A do doc 01) antes de fixar.

### 2.2 Add-ons

| Add-on | Preço | Disponível em |
|---|---|---|
| Vaga avulsa (30 dias, sem destaque) | R$ 49 | Free e Starter |
| Pacote de 20 créditos de contato/desbloqueio | R$ 59 | Starter e Pro |
| Usuário adicional | R$ 39/mês | Pro e Business |
| **Selo de Empresa Verificada** | R$ 39/mês | Todos |

### 2.3 O Selo de Empresa Verificada — separado do destaque pago, de propósito

É importante manter esse produto separado da Vaga em Destaque, porque eles respondem a perguntas diferentes: o Selo diz *"esta empresa se comporta bem"* (mérito auditado); o Destaque diz *"esta empresa pagou para aparecer mais"* (mídia). Misturar os dois — deixar o Selo virar uma forma disfarçada de destaque — é exatamente o tipo de erosão de confiança que o teste de coerência do doc 06 existe para barrar.

Para ostentar o Selo, a empresa paga **e** cumpre:

1. CNPJ ativo validado na Receita Federal
2. Domínio de e-mail corporativo confirmado
3. **Taxa de resposta ≥ 80%** nos últimos 90 dias (todo candidato recebe um desfecho)
4. **Tempo mediano de resposta ≤ 14 dias**
5. Zero vagas expiradas sem desfecho registrado

A taxa de resposta fica **pública** na página da empresa, com ou sem selo, e **com ou sem compra de destaque**. Se cair abaixo do limite, o selo é suspenso automaticamente e a cobrança pausa.

### 2.4 Preço de Fundador

Toda empresa que criar conta e publicar ao menos uma vaga **antes da data de ativação do billing** recebe:

- **50% de desconto vitalício** no plano que escolher, enquanto mantiver a assinatura ativa
- **10 créditos de Vaga em Destaque de bônus**, para experimentar o novo produto sem custo adicional
- Selo "Empresa Fundadora" na página pública (gratuito, permanente)
- Acesso antecipado a novas funcionalidades

---

## 3. Vagas em Destaque — a nova receita de maior potencial

Equivalente ao LinkedIn Promoted Jobs / Indeed Sponsored, com uma diferença de desenho: **preço fixo e previsível por padrão, não leilão de CPC puro**, porque um fundador solo não tem volume para operar um leilão saudável nos primeiros 12–18 meses, e porque preço fixo é mais fácil de comunicar como "isso não te faz pagar mais por acaso".

### 3.1 Como funciona

- A vaga em destaque aparece: (a) no topo dos resultados de busca relevantes, acima do primeiro resultado orgânico, em bloco visualmente distinto; (b) no feed/e-mail de "vagas recomendadas" de candidatos com perfil compatível.
- **Rótulo obrigatório "Patrocinada"** em toda superfície onde aparecer — regra de produto enforced no backend, não removível por configuração comercial (05, §4).
- O resultado orgânico abaixo do destaque continua existindo, ordenado por relevância, sem alteração.

### 3.2 Preços

| Produto | Preço | O que entrega |
|---|---|---|
| **Destaque avulso, 7 dias** | R$ 49 | 1 vaga em destaque por 7 dias corridos |
| **Destaque avulso, 15 dias** | R$ 89 | 1 vaga em destaque por 15 dias corridos |
| **Pacote de 5 créditos** | R$ 199 (R$ 39,80/crédito) | 5 destaques de 7 dias, a usar quando quiser |
| **Créditos inclusos no plano** | Ver tabela §2 | 1 a 20 créditos/mês conforme plano |
| **Destaque de Empresa** (página da empresa aparece em destaque nas buscas por setor/região) | R$ 79/mês | Complementar ao destaque de vaga; not a substituição do Selo Verificado |

> **[ESTIMATIVA — VALIDAR]** Preço ancorado em fração do CPC médio de LinkedIn Jobs/Indeed no Brasil — validar valores reais antes de publicar. Considerar, na Fase 4, evoluir para um modelo híbrido (preço fixo + boost adicional por CPC opcional) só depois de haver volume suficiente para o leilão não ser manipulável por 1-2 compradores.

### 3.3 Por que preço fixo em vez de leilão, nesta fase

Um leilão de CPC com poucos compradores (as primeiras dezenas de empresas do nicho) não converge para um preço justo — converge para "quem tem mais orçamento sempre ganha", o que é exatamente a percepção que o doc 06 tenta evitar. Preço fixo, com quantidade limitada de posições de destaque simultâneas por categoria/região (ex.: no máximo 3 vagas destacadas por página de resultado), preserva previsibilidade e evita que destaque vire disputa de orçamento entre 2 empresas grandes excluindo as pequenas.

---

## 4. Workix Premium (candidato) — Fase 4, gatilho de volume

### 4.1 Por que a ordem de ativação importa

Diferente da Vaga em Destaque (que só depende de haver busca de candidatos acontecendo, o que já ocorre desde a Fase 2), o Workix Premium depende de haver **recrutadores olhando perfis em volume relevante** — sem isso, "quem viu seu perfil" mostra silêncio, e "destaque na busca do recrutador" destaca para ninguém.

**Gatilho para lançar:** ≥ 5.000 candidatos ativos no nicho **e** ≥ 200 vagas ativas **e** ≥ 40 empresas pagantes usando busca ativa de candidatos regularmente (não só publicando vaga passiva). Antes disso, não.

### 4.2 O plano

**Workix Premium · R$ 19,90/mês ou R$ 149/ano (38% de desconto)**

| Recurso | Free | Premium |
|---|---|---|
| Candidatar-se a vagas | ✅ Ilimitado | ✅ Ilimitado |
| Status de cada candidatura | ✅ | ✅ |
| Aparecer no resultado orgânico da busca do recrutador | ✅ | ✅ |
| **Destaque do perfil na busca do recrutador** (rotulado "Perfil em destaque" para o recrutador) | ❌ | ✅ |
| **Ver quem visualizou seu currículo** | Contagem | ✅ Empresa e cargo do recrutador (sujeito a consentimento mútuo, ver §4.3) |
| Histórico de visualizações | 7 dias | 12 meses |
| **Insights da vaga** (nº de candidatos, faixa salarial, tempo médio de resposta da empresa) | ❌ | ✅ |
| **Contato direto com recrutador** (créditos de mensagem, mesmo sem candidatura formal) | 0 | 5/mês |
| Alertas de vaga | 1/dia, por e-mail | Ilimitados, instantâneos, push |
| Currículo em PDF com temas | 1 modelo | ✅ Modelos + link público personalizado |
| Múltiplas versões de currículo por área | 1 | 5 |
| Sem anúncios | — | ✅ |

### 4.3 A regra de consentimento — o que separa o Premium da Workix do LinkedIn

O recurso "quem viu seu perfil" e "destaque na busca" não pode significar que o recrutador vê dados de contato sem o candidato permitir. Regras de produto:

- Todo candidato controla, em três chaves independentes: (1) apareço na busca de recrutadores — sim/não; (2) apareço como "aberto a oportunidades" — visível só para recrutadores, nunca para o empregador atual, se identificado; (3) quero ser listado como "visualizado" quando um recrutador abrir meu perfil — sim/não.
- Comprar Premium **nunca** libera automaticamente o contato de um candidato para um recrutador. O que o Premium libera é a **visibilidade** do próprio candidato (ele aparece mais, ele vê mais sobre quem olhou). O contato continua exigindo o consentimento explícito do candidato, ou o crédito de "contato direto" pago **pela empresa**, que gera uma notificação ao candidato — nunca uma liberação silenciosa.

### 4.4 O que o Workix Premium **jamais** incluirá

- Prioridade de leitura da candidatura por um recrutador que já a recebeu (a ordem do funil da empresa não é à venda)
- Liberação de dado de contato sem consentimento do titular
- Ocultação de candidato gratuito do resultado orgânico

> Esta lista vai **impressa na página de preços**. É a garantia que sobra depois que "não vendemos visibilidade" deixou de ser verdade — e é uma promessa que só custa dinheiro se você quebrar.

---

## 5. Regras de transparência e de paywall

| Princípio | Como implementar |
|---|---|
| **Todo conteúdo pago é rotulado, sem exceção** | Flag `is_sponsored` obrigatória, renderizada com rótulo visível no front-end — enforced no backend, não é opção de configuração comercial |
| **O orgânico nunca é removido, só complementado** | Query de busca sempre retorna o ranking orgânico completo; posições patrocinadas são inseridas em slots adicionais claramente demarcados |
| **Contato exige consentimento** | Nenhum endpoint libera e-mail/telefone/CPF de candidato sem registro de consentimento ou de crédito de contato notificado ao titular |
| **Nunca bloqueie dado que o usuário criou** | Empresa que cai para Free não perde as vagas — perde a capacidade de publicar novas e de comprar destaque |
| **Downgrade não destrói** | Ao expirar, vagas excedentes vão para "arquivadas", não são apagadas |
| **Limite avisa antes** | Notificação em 80% do limite de vagas/créditos, nunca surpresa |
| **Trial sem cartão** | 14 dias de Pro ao criar conta, sem cartão. Fricção de cartão mata self-serve SMB |
| **Cancelamento em 2 cliques** | E ofereça "pausar" antes de "cancelar" |

---

## 6. Estrutura de custos

### 6.1 Custo fixo mensal — Fase 2+ (estimativas a validar)

| Item | Faixa mensal |
|---|---|
| Infra (Firebase/Cloud Run/Postgres gerenciado/CDN) | R$ 150 – 600 |
| E-mail transacional (SendGrid/Resend/SES) | R$ 0 – 120 |
| Domínio, SSL, monitoramento, backups | R$ 30 – 100 |
| Contabilidade | R$ 200 – 350 |
| Ferramentas (analytics, suporte, design, CI) | R$ 100 – 300 |
| **Total fixo** | **R$ 500 – 1.500** |

### 6.2 Custo variável

| Item | % |
|---|---|
| Gateway — cartão | ~3,5% a 4,5% + taxa fixa **[VALIDAR]** |
| Gateway — Pix | ~0,99% a 1,99% **[VALIDAR]** |
| Impostos (Simples Nacional) | 6% a 15,5% conforme faixa e fator R **[VALIDAR com contador]** |
| Infra marginal por cliente | < R$ 3 |
| Infra marginal por destaque servido (impressões extra no feed) | < R$ 0,50 |

**Margem bruta estimada: 80% a 88%.** Incentive Pix e plano anual — sobe a margem e o caixa.

---

## 7. Projeções de receita — mês 12

Premissas: início da cobrança de assinatura no mês 6; início da venda de destaque no mês 9; mix de plano conforme observado em SaaS SMB self-serve; churn 6%/mês; sem investimento externo. Workix Premium ainda não ativo no mês 12 (gatilho de volume não atingido — ver §4.1).

### Cenário pessimista

| Linha | Clientes/unidades | MRR |
|---|---:|---:|
| Starter (R$79) | 8 | R$ 632 |
| Pro (R$249) | 3 | R$ 747 |
| Business (R$699) | 1 | R$ 699 |
| Vagas em Destaque (avulso, ~10 vendidas/mês) | 10 × R$ 69 médio | R$ 690 |
| **Total** | **12 assinantes + destaque** | **R$ 2.768** |

ARR ≈ **R$ 33.216**. Cobre a infra e a contabilidade. Não paga você.

### Cenário base ⭐

| Linha | Clientes/unidades | MRR |
|---|---:|---:|
| Starter (R$79) | 25 | R$ 1.975 |
| Pro (R$249) | 12 | R$ 2.988 |
| Business (R$699) | 3 | R$ 2.097 |
| Vagas em Destaque (avulso + pacotes, além dos créditos inclusos) | ~40 unidades/mês × R$ 55 médio | R$ 2.200 |
| **Total** | **40 assinantes + destaque** | **R$ 9.260** |

ARR ≈ **R$ 111.120**. Ticket médio de assinatura R$ 176; destaque acrescenta ~31% de receita sobre a assinatura pura. Cobre custos e gera reserva; ainda não substitui um salário integral.

### Cenário otimista

| Linha | Clientes/unidades | MRR |
|---|---:|---:|
| Starter (R$79) | 50 | R$ 3.950 |
| Pro (R$249) | 30 | R$ 7.470 |
| Business (R$699) | 8 | R$ 5.592 |
| Vagas em Destaque | ~120 unidades/mês × R$ 55 médio | R$ 6.600 |
| White-label (R$2.500) | 2 | R$ 5.000 |
| **Total** | **90 assinantes + destaque + white-label** | **R$ 28.612** |

ARR ≈ **R$ 343.344**. Note que a receita de destaque, no cenário otimista, já supera qualquer plano individual isolado de assinatura — é o motivo de priorizá-la logo após a Fase 2.

### 7.1 Pontos de equilíbrio

Premissas: custo fixo R$ 1.200/mês; impostos ~6% + gateway ~4% = 10% de dedução sobre o MRR bruto; ticket médio de assinatura R$ 176; destaque médio R$ 55/unidade.

| Objetivo | MRR necessário | Equivalente (mix médio) |
|---|---:|---:|
| Cobrir custo fixo (R$ 1.200) | ~R$ 1.350 | **9 assinantes**, ou 6 assinantes + 20 destaques |
| Cobrir custo + reserva de 30% | ~R$ 1.750 | **11 assinantes**, ou 8 assinantes + 25 destaques |
| Pró-labore de R$ 8.000 + custos | ~R$ 10.250 | **40 assinantes + ~70 destaques/mês** *ou* 30 assinantes + 1 white-label |

> **Leitura estratégica:** a receita de destaque acelera o break-even em relação à v1.0 do plano, porque não depende de convencer alguém a trocar de ferramenta — é uma compra pontual de mídia, com ciclo de decisão mais curto que uma assinatura. Mas ela também é mais sensível a sazonalidade e a volume de vagas simultâneas do que a assinatura. **O caminho mais rápido para o pró-labore combina assinatura (previsibilidade) + destaque (velocidade) + 1 contrato white-label (ticket).**

### 7.2 Unit economics (cenário base)

| Métrica | Valor |
|---|---|
| Ticket médio de assinatura | R$ 176 |
| Receita adicional de destaque por assinante ativo | ~R$ 55/mês |
| Margem bruta | 86% |
| Churn mensal de assinatura | 6% → vida média 16,7 meses |
| **LTV (assinatura + destaque)** | ~R$ 3.850 |
| CAC alvo | < R$ 300 |
| **LTV / CAC** | ~13× |
| Payback de CAC | < 2 meses |

> Estes números são saudáveis **no papel**. Trate-os como hipótese até ter 20 clientes reais e pelo menos 3 meses de venda de destaque — a conversão de assinante para comprador de destaque é o número mais incerto deste documento.

---

## 8. Sequência de ativação — o que ligar e quando

```
Mês 0-2   ▸ Nada de cobrança. Reposicionamento (anunciar a mudança de promessa) + nicho + MVP.
Mês 2-6   ▸ Tudo grátis. Contagem regressiva pública para o Preço de Fundador.
Mês 6     ▸ Liga Starter / Pro / Business.  ← só se a liquidez mínima foi atingida
Mês 7     ▸ Liga Selo de Empresa Verificada.
Mês 9     ▸ Liga Vagas em Destaque (avulso + pacotes).  ← só exige volume de vagas/buscas
Mês 10    ▸ Liga plano anual.
Mês 12    ▸ Primeiro piloto White-label (pode ser gratuito, em troca de case).
Mês 14+   ▸ Workix Premium (candidato), se e somente se os gatilhos da §4.1 forem atingidos.
```

---

**Próximo documento:** [03-LICENCIAMENTO-OPEN-SOURCE.md](./03-LICENCIAMENTO-OPEN-SOURCE.md)
