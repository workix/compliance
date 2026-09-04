# Workix — Sumário Executivo do Plano de Negócio

> Documento raiz. Leia este primeiro; os demais aprofundam cada frente.

**Versão:** 2.0 · **Data:** setembro de 2026 · **Autor do projeto:** Felipe Rodrigues Michetti
**Contexto:** bootstrap solo, sem capital externo, código-fonte aberto, meta de primeira receita recorrente.
**Mudança de tese em relação à v1.0:** o plano anterior vendia apenas *ferramenta e capacidade*, e vetava explicitamente a venda de visibilidade e posição. Esta versão adota o modelo do LinkedIn — **assinaturas de acesso e visibilidade, dos dois lados do marketplace** — com salvaguardas de transparência que o LinkedIn não pratica.

---

## 1. A dor, dita sem rodeios

Você construiu uma plataforma de recrutamento sólida (backend ~75%, frontend ~70%, mobile ~20%) e a havia documentado, num rascunho interno, como um **manifesto de gratuidade radical** — nunca publicado, nunca visto por um usuário real. Esse material afirmava que a Workix "não vende posições privilegiadas", "não vende vagas patrocinadas" e "não vende assinaturas premium para candidatos". Você decidiu que quer exatamente isso: **monetizar vendendo acesso e visibilidade, como o LinkedIn faz** — Premium para quem procura emprego, Recruiter/Jobs para quem contrata.

Como o projeto ainda não saiu do papel, isso não é a reversão de uma promessa pública — é a escolha da narrativa definitiva antes do primeiro usuário. A cautela aqui não é sobre desfazer uma mentira contada a alguém; é sobre nascer com uma resposta pronta para a comparação inevitável com LinkedIn, Catho e Indeed, que vendem o mesmo tipo de visibilidade sem as mesmas garantias.

A segunda dor, estrutural: **um marketplace de dois lados sem liquidez não tem visibilidade para vender.** "Destaque na busca do recrutador" vale zero se não houver recrutador buscando; "quem viu seu perfil" vale zero se ninguém visualizar. Vender visibilidade cedo demais é vender um produto vazio — pior ainda que vender ferramenta cedo demais, porque a decepção é mais visível.

---

## 2. A tese deste plano

> **A Workix vende acesso e visibilidade — exatamente como o LinkedIn. A diferença é que aqui todo destaque pago é rotulado, ninguém desaparece do resultado orgânico, e nenhum contato é liberado sem consentimento.**

Três movimentos resolvem a dor:

**a) Nascer com regras que nem o LinkedIn nem a Catho publicam.** O princípio central é *"toda visibilidade paga é identificada, e o gratuito nunca desaparece"*. Essa promessa é verificável (está no código, aberto) e é a resposta pronta para a comparação espontânea com os concorrentes que vendem o mesmo tipo de destaque sem essas garantias. Detalhes em **[06-REPOSICIONAMENTO-NARRATIVA.md](./06-REPOSICIONAMENTO-NARRATIVA.md)**.

**b) Monetizar os dois lados, na ordem que a liquidez permite.** Empresa paga primeiro (assinatura de acesso + vagas em destaque) porque tem orçamento e dor imediata. Candidato paga depois (Workix Premium) porque "quem viu seu perfil" e "destaque na busca do recrutador" só têm valor quando já existe volume de recrutadores olhando. Detalhes em **[02-MONETIZACAO-E-PRICING.md](./02-MONETIZACAO-E-PRICING.md)**.

**c) Ganhar um nicho antes de tentar ganhar o Brasil.** Um job board generalista solo perde para Catho, InfoJobs e LinkedIn em qualquer métrica. Um job board vertical, com curadoria e sem vaga fantasma, ganha em um mercado onde os generalistas são ruins — e onde o LinkedIn é fraco em cargos operacionais e regionais. A recomendação concreta de nicho está no **[04-GO-TO-MARKET.md](./04-GO-TO-MARKET.md)**.

---

## 3. Decisões que este plano assume (confirmadas por você)

| Decisão | Escolha |
|---|---|
| Quem paga | Empresas (assinatura de acesso + vagas em destaque, núcleo de receita) **e** candidatos (Workix Premium de visibilidade, Fase 3) |
| Modelo de monetização | Acesso e visibilidade, replicando o mecanismo do LinkedIn (Premium Career + Recruiter/Jobs), com rotulagem obrigatória de conteúdo pago |
| Licença | **AGPLv3 + CLA**, com módulos comerciais proprietários (open core) — fronteira redesenhada porque o motor de visibilidade agora é o produto pago principal |
| Estágio | Bootstrap solo, meta = primeiros clientes pagantes |
| Capital | Nenhum externo por ora |

---

## 4. Resumo do modelo comercial

**Cinco fontes de receita, em ordem de ativação:**

1. **Assinatura B2B de acesso** (Starter / Pro / Business) — R$79 a R$699/mês. Busca de candidatos, créditos de contato direto, ferramentas de gestão. É o motor inicial, igual à v1.0.
2. **Vagas em Destaque** (sponsored jobs) — avulso ou por créditos do plano. Vaga aparece no topo da busca e no feed de candidatos compatíveis, **sempre rotulada como "Patrocinada"**. É a nova receita de maior potencial — o equivalente ao LinkedIn Jobs/Promoted.
3. **Selo de Empresa Verificada** — R$39/mês. Credibilidade auditada por comportamento (taxa de resposta), não visibilidade comprada. Continua existindo como diferencial, separado do destaque pago.
4. **Workix Premium (candidato)** — R$19,90/mês, ativado quando houver volume de recrutadores. Destaque na busca do recrutador, "quem viu seu perfil", insights e contato direto com recrutadores — o equivalente ao LinkedIn Premium Career.
5. **Workix White-label** (self-hosted ou gerenciado) — a partir de R$2.500/mês. Continua a receita de maior ticket; agora inclui licenciamento do motor de visibilidade/destaque, não só do núcleo.

**O que continua fora de qualquer plano, em qualquer fase:** conteúdo pago exibido sem rótulo, contato liberado sem consentimento do titular, e desaparecimento do resultado orgânico por não pagar. Essas três garantias — não a ausência de venda de visibilidade — são o novo fosso de confiança. Ver seção 6 do documento 06.

---

## 5. Números-âncora (cenário base, mês 12)

| Métrica | Valor |
|---|---|
| Empresas pagantes (assinatura) | 40 |
| MRR de assinatura | ~R$ 7.060 |
| MRR de vagas em destaque | ~R$ 1.500 – 3.000 **[ESTIMATIVA — VALIDAR, depende de volume de vagas]** |
| MRR total | ~R$ 8.500 – 10.000 |
| ARR | ~R$ 102.000 – 120.000 |
| Custo fixo mensal | R$ 800 – 1.500 |
| Break-even de caixa (sem pró-labore) | ~8 assinantes |
| Break-even com pró-labore de R$ 8.000 | ~R$ 10.250 de MRR (mês 12–16, antecipado pela receita de destaque) |

> Memória de cálculo, cenários pessimista e otimista, e premissas de churn e CAC em **[02-MONETIZACAO-E-PRICING.md](./02-MONETIZACAO-E-PRICING.md)**, seção 7.

---

## 6. Os quatro maiores riscos

| # | Risco | Mitigação |
|---|---|---|
| 1 | **Cold start**: sem vagas não há candidatos, sem candidatos não há visibilidade para vender | Nicho estreito + assinatura B2B liberada só após liquidez mínima + venda de destaque liberada só depois disso. Ver 04, seção 2 |
| 2 | **Comparação espontânea com LinkedIn/Catho/Indeed**: usuário percebe o mesmo mecanismo de venda de visibilidade e presume a mesma opacidade | Ter a resposta pronta desde o primeiro material publicado — os Pactos e o FAQ da seção 5 do doc 06, não uma reação a posteriori. Ver 06 |
| 3 | **Virar exatamente o que criticava**: destaque pago sem rótulo, ou pressão para reduzir o orgânico e forçar a venda de destaque | Regra de produto, não só de marketing: rótulo obrigatório é enforced no código aberto, auditável. Ver 03, seção 4 |
| 4 | **Fundador único**: você é o gargalo de produto, vendas, suporte e infra | Self-serve obsessivo, zero onboarding manual abaixo do plano Business, automação de cobrança e de destaque. Ver 05 |

---

## 7. Índice do pacote

| Documento | O que responde |
|---|---|
| **01-PLANO-DE-NEGOCIO.md** | Mercado, ICP, proposta de valor, concorrência (agora incluindo o LinkedIn como referência de modelo, não só de ameaça), riscos, métricas |
| **02-MONETIZACAO-E-PRICING.md** | Planos, preços, vagas em destaque, Workix Premium, regras de transparência, projeções de receita |
| **03-LICENCIAMENTO-OPEN-SOURCE.md** | AGPLv3 + CLA, nova fronteira open core (motor de visibilidade fechado, ranqueamento orgânico aberto), marca, LGPD de dados de visualização |
| **04-GO-TO-MARKET.md** | Nicho inicial, cold start, canais, posicionamento frente a LinkedIn/Catho, primeiros 10 clientes |
| **05-ROADMAP-TECNICO-BILLING.md** | Gateway, modelagem de créditos de visibilidade e contato, entitlements, rotulagem obrigatória, notas fiscais |
| **06-REPOSICIONAMENTO-NARRATIVA.md** | Novos princípios, como anunciar a mudança de promessa, FAQ, o que editar no material atual |

---

## 8. Primeiros 30 dias — o que fazer segunda-feira

1. **Escolher o nicho** (04, seção 3) e escrever numa frase quem é o cliente.
2. **Publicar os novos princípios** (06) — incluindo o reconhecimento explícito de que a promessa de "nunca vender visibilidade" mudou, e por quê.
3. **Registrar a marca Workix no INPI** — classe 42 e 35. É o freio real contra clones, não a licença.
4. **Definir a nova fronteira open core** (03, seção 4) — decidir o que do motor de ranqueamento/destaque fica documentado como fórmula aberta vs. o que fica fechado.
5. **Falar com 15 empresas do nicho.** Não para vender: para descobrir quanto pagam hoje por destaque em outras plataformas (Indeed, LinkedIn Jobs) e o que odeiam nisso. Roteiro em 04, seção 6.
6. **Não escrever uma linha de billing ainda.** O código de cobrança e de leilão de destaque é o passo 7, não o 1.

---

## Aviso sobre dados

Esta sessão não teve acesso a busca na web. Todos os valores de mercado e preços de concorrentes citados neste pacote estão marcados como **[ESTIMATIVA — VALIDAR]** e devem ser confirmados antes de qualquer uso externo (investidor, sócio, banco). O checklist de validação está em **01-PLANO-DE-NEGOCIO.md**, anexo A.

Este material é um plano de negócio, não aconselhamento jurídico, contábil ou financeiro. As questões de licenciamento, LGPD, regime tributário e emissão fiscal devem ser revisadas por advogado e contador antes da execução.
