<div class="cover">

# Workix

<div class="subtitle">Plano de Negócio, Monetização e Reposicionamento — Pacote Completo</div>

<div class="meta">

**Autor do projeto:** Felipe Rodrigues Michetti<br/>
**Modelo de negócio:** assinaturas de acesso e visibilidade (dois lados do marketplace)<br/>
**Documento gerado em:** 3 de setembro de 2026

</div>

</div>

<div class="pagebreak"></div>

<div class="toc">

## Índice

<ul>
<li>1. Sumário Executivo <span style="float:right;color:#888;">00-SUMARIO-EXECUTIVO.md</span></li>
<li>2. Workix — Material Público do Projeto <span style="float:right;color:#888;">Workix.md</span></li>
<li>3. Plano de Negócio <span style="float:right;color:#888;">01-PLANO-DE-NEGOCIO.md</span></li>
<li>4. Monetização e Pricing <span style="float:right;color:#888;">02-MONETIZACAO-E-PRICING.md</span></li>
<li>5. Licenciamento Open Source <span style="float:right;color:#888;">03-LICENCIAMENTO-OPEN-SOURCE.md</span></li>
<li>6. Go-to-Market <span style="float:right;color:#888;">04-GO-TO-MARKET.md</span></li>
<li>7. Roadmap Técnico de Faturamento <span style="float:right;color:#888;">05-ROADMAP-TECNICO-BILLING.md</span></li>
<li>8. Narrativa e Princípios de Lançamento <span style="float:right;color:#888;">06-REPOSICIONAMENTO-NARRATIVA.md</span></li>
</ul>

</div>

<div class="pagebreak"></div>

> **Nota sobre este documento.** Este PDF unifica todos os arquivos Markdown do plano de negócio da Workix, na ordem em que devem ser lidos. Valores de mercado, preços de concorrentes e projeções financeiras marcados como **[ESTIMATIVA — VALIDAR]** não foram confirmados por pesquisa externa e devem ser validados antes de qualquer uso com investidor, sócio ou instituição financeira. Este material não constitui aconselhamento jurídico, contábil ou financeiro.

<div class="pagebreak"></div>

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

**a) Nascer com regras que nem o LinkedIn nem a Catho publicam.** O princípio central é *"toda visibilidade paga é identificada, e o gratuito nunca desaparece"*. Essa promessa é verificável (está no código, aberto) e é a resposta pronta para a comparação espontânea com os concorrentes que vendem o mesmo tipo de destaque sem essas garantias. Detalhes em **<span class="doc-ref">06-REPOSICIONAMENTO-NARRATIVA.md</span>**.

**b) Monetizar os dois lados, na ordem que a liquidez permite.** Empresa paga primeiro (assinatura de acesso + vagas em destaque) porque tem orçamento e dor imediata. Candidato paga depois (Workix Premium) porque "quem viu seu perfil" e "destaque na busca do recrutador" só têm valor quando já existe volume de recrutadores olhando. Detalhes em **<span class="doc-ref">02-MONETIZACAO-E-PRICING.md</span>**.

**c) Ganhar um nicho antes de tentar ganhar o Brasil.** Um job board generalista solo perde para Catho, InfoJobs e LinkedIn em qualquer métrica. Um job board vertical, com curadoria e sem vaga fantasma, ganha em um mercado onde os generalistas são ruins — e onde o LinkedIn é fraco em cargos operacionais e regionais. A recomendação concreta de nicho está no **<span class="doc-ref">04-GO-TO-MARKET.md</span>**.

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

> Memória de cálculo, cenários pessimista e otimista, e premissas de churn e CAC em **<span class="doc-ref">02-MONETIZACAO-E-PRICING.md</span>**, seção 7.

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

<div class="pagebreak"></div>

# Workix

> **Uma rede profissional enxuta, feita para conectar quem contrata a quem procura.**

---

## 1. Sobre a Workix

### Afinal, o que é a Workix?

A **Workix** é uma plataforma de recrutamento que combina:

- Site de vagas;
- Rede de perfis profissionais;
- Páginas de empresas;
- Ferramentas de busca;
- Comunicação entre candidatos e recrutadores;
- Backend responsável por conectar as duas pontas do processo seletivo.

O objetivo é simples: **reduzir o peso, a demora e a burocracia dos processos seletivos tradicionais**, tornando a experiência mais direta, transparente e acessível.

Participar da Workix — criar perfil, publicar vaga, candidatar-se, buscar e ser encontrado — **é e sempre será gratuito**. O projeto se sustenta com assinaturas de ferramentas de recrutamento para empresas e com visibilidade adicional opcional, dos dois lados — sempre identificada como tal.

---

## 2. Conceito

### Inspirada no LinkedIn, com regras mais claras

A Workix parte de um conceito semelhante ao de redes profissionais como o LinkedIn:

- Perfis profissionais completos;
- Páginas de empresas;
- Publicação de vagas;
- Busca por candidatos;
- Conexão direta entre empresas e profissionais;
- Um modelo de acesso e visibilidade que sustenta o projeto — assinaturas para quem contrata e destaque opcional para quem procura.

A diferença está nas regras que colocamos em torno desse modelo.

### Os Pactos da Workix

- **Participar é sempre gratuito.** Perfil, candidatura, publicação de vaga e busca no resultado orgânico não custam nada, em nenhum plano.
- **Toda visibilidade paga é identificada, sempre.** Vaga em destaque, perfil em destaque ou empresa em destaque aparecem com um rótulo visível. Conteúdo pago nunca é disfarçado de resultado orgânico — e o código que garante isso é aberto.
- **Ninguém desaparece por não pagar.** O resultado orgânico existe sempre, ordenado por relevância, e não é removido nem rebaixado para dar lugar a quem paga.
- **Seu contato só é liberado com o seu consentimento.** Uma empresa pode pagar para buscar e descobrir perfis. Ela não recebe e-mail, telefone ou currículo completo sem o seu consentimento, ou pelo menos um aviso a você de que seu perfil foi acessado.
- **Sem vaga fantasma.** Toda vaga tem prazo e precisa de um desfecho. Toda empresa tem sua taxa de resposta pública na própria página, com ou sem destaque comprado.

---

## 3. Quem está por trás da Workix?

A Workix não pertence a uma empresa de recrutamento e não cobra comissão sobre contratações.

É um **projeto independente**, criado para demonstrar que encontrar uma oportunidade profissional — ou encontrar o profissional certo — não precisa ser um processo caro, complexo ou obscuro.

A plataforma existe para conectar as duas pontas:

**Candidato ↔ Empresa**

Os próprios participantes alimentam o sistema com currículos e vagas e utilizam a plataforma para conduzir suas interações até uma possível contratação.

---

## 4. O que torna a Workix diferente?

### Você sempre sabe o que é pago

A Workix vende:

- Ferramentas de recrutamento para empresas (busca avançada, gestão de candidaturas, créditos de contato);
- **Vaga em Destaque** — uma posição adicional de visibilidade na busca e no feed, comprada pela empresa;
- **Workix Premium**, para candidatos que queiram mais visibilidade na busca do recrutador e insights sobre suas candidaturas.

O que a Workix não faz, em nenhum plano:

- Não exibe conteúdo pago sem identificá-lo como pago;
- Não remove nem rebaixa quem não paga do resultado orgânico;
- Não libera contato ou dado pessoal sem consentimento;
- Não cobra do candidato para se candidatar, ser encontrado no orgânico ou saber o resultado da própria candidatura;
- Não vende dados de candidatos a terceiros;
- Não cobra comissão sobre contratação.

A proposta é entregar **a ferramenta e, quando você quiser, alcance adicional identificado como tal** — não impor que alcance seja a única forma de aparecer.

---

## 5. Garantias

A Workix **não garante o resultado de nenhum processo seletivo**. Comprar destaque não muda isso: destaque compra alcance, nunca resultado.

A plataforma fornece:

- Ferramentas de busca;
- Cadastro de currículos;
- Cadastro e divulgação de vagas;
- Comunicação entre as partes;
- Feedback sobre interações relevantes;
- Visibilidade adicional opcional, sempre identificada como paga.

A condução do processo seletivo, assim como as decisões tomadas durante ele, é de responsabilidade das partes envolvidas.

---

# 6. O que a Workix entrega

## 6.1 Perfil Profissional Completo

Currículo estruturado contendo informações como:

- Formação acadêmica;
- Experiências profissionais;
- Habilidades;
- Informações profissionais relevantes.

O candidato controla sua própria visibilidade, em três chaves independentes:

- Se aparece na busca de recrutadores;
- Se aparece como "aberto a oportunidades" (visível só para recrutadores);
- Se aparece como "visualizado" quando um recrutador abre seu perfil.

O perfil é disponibilizado para recrutadores de acordo com essas configurações — nunca além delas, mesmo que a empresa tenha assinatura paga.

---

## 6.2 Página de Empresa

Cada empresa possui um perfil público com informações como:

- Dados da empresa;
- Vagas disponíveis;
- Localização;
- Redes sociais;
- Taxa de resposta aos candidatos, sempre pública;
- Selo de Empresa Verificada, quando aplicável — concedido por comportamento auditado (CNPJ validado, taxa de resposta e tempo de resposta dentro do critério), nunca comprado como destaque.

---

## 6.3 Busca de Vagas e Candidatos

A plataforma permite pesquisar e navegar por:

- Vagas disponíveis;
- Candidatos;
- Tipo de contrato;
- Cidade;
- Nível de experiência.

As listagens são organizadas e paginadas para facilitar a navegação. O resultado orgânico, ordenado por relevância, está sempre presente — vagas e perfis em destaque aparecem em posições adicionais, claramente identificadas como patrocinadas, e nunca substituem o orgânico.

---

## 6.4 Publicação de Vagas

Toda empresa pode publicar uma vaga ativa gratuitamente, sem taxa de publicação.

Planos pagos ampliam a capacidade de publicação (mais vagas simultâneas, mais usuários) e dão acesso a ferramentas de gestão avançadas. Isso é diferente de comprar visibilidade: uma vaga do plano gratuito aparece no mesmo resultado orgânico que uma vaga de um plano pago — o plano paga por capacidade de gestão, não por posição na busca.

---

## 6.5 Vaga em Destaque

Empresas podem comprar destaque para uma vaga específica. O destaque:

- Aparece em uma posição adicional, no topo da busca e no feed de candidatos compatíveis;
- É sempre identificado com o rótulo **"Patrocinada"**, em toda superfície onde aparecer;
- Nunca remove nem rebaixa o resultado orgânico abaixo dele;
- Tem posições limitadas por categoria e região, para que destaque não vire disputa de orçamento que exclua empresas menores.

O destaque é opcional. Uma vaga sem destaque continua visível a todo candidato que busque por ela.

---

## 6.6 Workix Premium (candidato)

Candidatos podem, opcionalmente, assinar o Workix Premium para obter:

- Destaque do próprio perfil na busca do recrutador, sempre rotulado como "Perfil em destaque";
- Visualização de quem acessou seu perfil, respeitando as configurações de visibilidade descritas em 6.1;
- Insights sobre a vaga (concorrência, tempo médio de resposta da empresa);
- Contato direto com recrutadores, dentro de um limite de créditos mensais.

O Workix Premium nunca dá prioridade sobre uma candidatura já enviada, e nunca oculta um candidato gratuito do resultado orgânico da busca do recrutador.

---

## 6.7 Notificações em Tempo Real

A plataforma permite gerar notificações sobre eventos relevantes, incluindo:

- Visualização de currículo (quando o candidato optar por ser notificado);
- Novas mensagens;
- Interações relacionadas ao processo seletivo;
- Liberação de contato por uma empresa, sempre notificada ao candidato.

As notificações podem ser disponibilizadas por:

- Push;
- E-mail.

---

## 6.8 Blog e Conteúdo

A Workix também disponibiliza conteúdo relacionado a:

- Carreira;
- Empregabilidade;
- Mercado de trabalho;
- Recrutamento;
- Desenvolvimento profissional.

Os conteúdos são organizados por categorias e períodos.

---

## 6.9 Login Seguro

A autenticação da plataforma utiliza **Firebase Authentication**.

São suportadas modalidades como:

- E-mail e senha;
- Conta Google.

As senhas não são armazenadas diretamente pela Workix.

---

## 6.10 Experiência Multiplataforma

A Workix busca oferecer a mesma experiência independentemente do dispositivo utilizado.

A plataforma contempla:

- Desktop;
- Notebook;
- Tablet;
- Smartphone;
- Aplicativo mobile.

As informações ficam disponíveis de forma integrada entre os diferentes ambientes.

---

# 7. Diferenciais

## 7.1 Feedback de verdade

Um dos problemas comuns em processos seletivos é a ausência de retorno.

O candidato participa de diversas etapas e, muitas vezes, não recebe sequer uma resposta sobre o resultado final.

A Workix busca melhorar essa relação por meio de uma experiência mais transparente, na qual **interações relevantes geram notificações e feedbacks para os envolvidos**, e na qual **a taxa de resposta de cada empresa é pública** — com ou sem destaque comprado, com ou sem selo.

---

## 7.2 Acessível em qualquer dispositivo

A plataforma foi pensada para funcionar em diferentes ambientes:

```text
Desktop
   │
Notebook
   │
Tablet
   │
Smartphone
   │
Aplicativo Mobile
```

O objetivo é manter as mesmas informações e funcionalidades essenciais independentemente do dispositivo.

---

## 7.3 Escalabilidade e crescimento orgânico

A Workix é desenvolvida de forma incremental.

Novas funcionalidades são adicionadas gradualmente com foco em:

- Melhorar a experiência do usuário;
- Automatizar etapas;
- Reduzir tarefas manuais;
- Aumentar a confiabilidade das informações;
- Facilitar a comunicação entre empresas e candidatos.

Também fazem parte da evolução do projeto mecanismos de validação destinados a aumentar a qualidade e a confiabilidade das informações trocadas entre as partes.

---

## 7.4 Sem vagas fantasmas

A Workix possui rotinas de manutenção que permitem identificar e encerrar automaticamente processos já concluídos.

As vagas possuem validade e seu status pode ser atualizado ao longo do processo.

O usuário é informado quando ocorrerem mudanças relevantes. Isso vale igualmente para vagas em destaque: destaque compra alcance, nunca isenta a vaga da validade e do desfecho obrigatório.

---

## 7.5 Transparência de visibilidade

- Todo conteúdo patrocinado é identificado no próprio resultado, nunca misturado ao orgânico sem aviso;
- A lógica que garante essa identificação está no código aberto do núcleo da Workix — não depende apenas da nossa palavra;
- O resultado orgânico nunca é removido para abrir espaço a quem paga; destaque é posição adicional, não substituição.

---

## 7.6 Privacidade dos dados

A Workix busca armazenar somente os dados necessários para viabilizar o processo de recrutamento.

### Princípios

- Senhas não são armazenadas pela plataforma;
- O usuário possui controle sobre seu currículo e sobre sua própria visibilidade (quem pode encontrá-lo, se aparece como "aberto a oportunidades", se aparece como "visualizado");
- O currículo pode ser ativado ou desativado a qualquer momento;
- O usuário pode solicitar a remoção de seus dados, incluindo o histórico de visualizações do próprio perfil;
- Contato e dados pessoais só são liberados a uma empresa com consentimento do titular, mesmo quando a empresa possui plano pago;
- E-mail verificado é o identificador de unicidade de cadastro de pessoa física. O CPF só é coletado na etapa de contratação efetiva, pela empresa contratante — não pela plataforma;
- **CNPJ** é usado para identificação e verificação de pessoas jurídicas, por ser um dado público.

---

# 8. Fluxo simplificado

A proposta da Workix pode ser representada de forma simples:

```text
┌─────────────────┐
│    CANDIDATO    │
│                 │
│ Perfil / CV     │
│ Experiências    │
│ Habilidades     │
│ Visibilidade    │
└────────┬────────┘
         │
         │
         ▼
┌─────────────────────────┐
│         WORKIX          │
│                         │
│ Busca                   │
│ Vagas                   │
│ Perfis                  │
│ Comunicação             │
│ Notificações            │
│ Feedback                │
│ Destaque (identificado) │
└────────────┬────────────┘
             │
             │
             ▼
┌─────────────────┐
│     EMPRESA     │
│                 │
│ Perfil          │
│ Vagas           │
│ Recrutamento    │
└─────────────────┘
```

---

# 9. Fase atual do projeto

A Workix é um **projeto vivo**, atualmente em desenvolvimento e passando por ciclos contínuos de implementação, testes e evolução.

| Área | Progresso |
|---|---:|
| Tradução e revisão dos textos | **90%** |
| Backend Web | **75%** |
| Frontend Web | **70%** |
| Aplicativo Mobile | **20%** |

> As mesmas vagas cadastradas na plataforma estarão disponíveis nos diferentes dispositivos.

---

# 10. Equipe

## Felipe Rodrigues Michetti

**Fundador & Desenvolvedor Full Stack**

Idealizador e desenvolvedor da Workix, atuando na construção do projeto desde o backend até o frontend e aplicativo mobile.

A iniciativa tem como objetivo tornar a busca por oportunidades profissionais **mais justa, simples e acessível no Brasil**.

**Website:** http://www.codecode.com.br/

---

# 11. Depoimentos

## Algumas palavras de candidatos satisfeitos

> *Seção reservada para depoimentos e experiências reais de usuários da Workix.*

---

# 12. Visão da Workix

A Workix busca construir uma alternativa mais simples ao modelo tradicional de recrutamento.

A ideia central é:

> **Conectar pessoas e empresas sem transformar o candidato em produto.**

Participar continua gratuito para quem procura emprego. O que sustenta a plataforma são as ferramentas de recrutamento das empresas e a visibilidade adicional que qualquer um dos dois lados pode escolher comprar — sempre identificada como tal, nunca escondida, nunca liberando dados sem consentimento.

A plataforma fornece as ferramentas e o alcance.
Empresas e candidatos conduzem o processo.
A contratação acontece entre as partes.

---

## 13. Resumo

| Característica | Workix |
|---|---|
| Plataforma de recrutamento | ✅ |
| Cadastro de candidatos | ✅ |
| Perfil profissional | ✅ |
| Cadastro de empresas | ✅ |
| Publicação de vagas | ✅ |
| Busca de candidatos | ✅ |
| Busca de vagas | ✅ |
| Notificações | ✅ |
| Blog e conteúdo | ✅ |
| Aplicativo mobile | 🚧 Em desenvolvimento |
| Candidatar-se a vagas | ✅ Gratuito, sempre |
| Aparecer no resultado orgânico de busca | ✅ Sempre, pago ou não |
| Taxa de resposta pública da empresa | ✅ |
| Código-fonte do núcleo aberto e auditável | ✅ |
| Ferramentas avançadas de recrutamento (empresa) | 💳 Planos pagos |
| Vaga em Destaque, sempre identificada | 💳 Opcional |
| Selo de Empresa Verificada (mérito auditado, não é destaque) | 💳 Opcional |
| Workix Premium (visibilidade do candidato) | 💳 Opcional |
| Conteúdo pago exibido sem identificação | ❌ Nunca |
| Remoção do orgânico para dar lugar a pago | ❌ Nunca |
| Liberação de contato sem consentimento | ❌ Nunca |
| Cobrança do candidato para se candidatar | ❌ Nunca |
| Venda de dados de candidatos a terceiros | ❌ Nunca |
| Comissão sobre contratação | ❌ Nunca |
| Armazenamento de senhas | ❌ |

---

> **Workix — conectando quem contrata a quem procura.**

<div class="pagebreak"></div>

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

Vender visibilidade não é neutro em relação às três dores acima — pode piorá-las (mais vaga fantasma patrocinada, mais invisibilidade para quem não paga) ou melhorá-las, dependendo de como é desenhado. A tese deste plano é que **dá para vender destaque sem sacrificar a promessa de que a plataforma não é manipulada**, através de três regras de produto, não de marketing: rótulo obrigatório em todo conteúdo pago, preservação do resultado orgânico para quem não paga, e consentimento para liberação de contato. Ver **<span class="doc-ref">06-REPOSICIONAMENTO-NARRATIVA.md</span>**.

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

<div class="pagebreak"></div>

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

<div class="pagebreak"></div>

# Workix — Estratégia de Licenciamento Open Source

**Versão:** 2.0 · setembro de 2026
**Decisão adotada:** AGPLv3 + CLA, com módulos comerciais proprietários (open core) — fronteira redesenhada para o modelo de visibilidade

> ⚠️ Este documento é estratégia de negócio, não parecer jurídico. Antes de publicar licenças, CLA ou contratos, revise com advogado especializado em propriedade intelectual e software.

---

## 1. A pergunta que precisa ser respondida antes da licença

**Por que a Workix é open source, agora que ela vende visibilidade como o LinkedIn?**

A resposta da v1.0 deste plano era "porque conseguimos provar que não vendemos ranking". Essa resposta não existe mais — a Workix vende ranking pago, exatamente como o LinkedIn e o Indeed. O que muda é **o que exatamente fica auditável**:

| Benefício | Por que importa, mesmo vendendo visibilidade |
|---|---|
| **Auditabilidade da camada orgânica** | Você não pode mais dizer "não vendemos posição" — mas pode dizer "a fórmula que ordena quem não pagou é pública e auditável, e o pago nunca substitui o orgânico". É uma afirmação mais fraca que a anterior, mas ainda é mais forte que qualquer concorrente oferece |
| **Rotulagem enforced, não configurável** | O código que renderiza conteúdo patrocinado com o rótulo obrigatório é aberto. Ninguém — nem você, comercialmente — pode remover o rótulo sem isso aparecer num diff público |
| **Conformidade como argumento de venda** | Federação, sindicato, universidade e órgão público preferem software auditável, inclusive para saber como o motor de patrocínio funciona antes de licenciar um white-label |
| **Produto white-label vendável** | O self-hosted enterprise inclui agora o **motor de destaque/visibilidade** como módulo comercial — é a peça mais vendável do open core, porque é a que gera receita direta para quem licencia |
| **Reputação e distribuição pessoal** | O repositório é o seu portfólio público e um canal de entrada de talento, parceiros e imprensa técnica |

**Conclusão:** o open source da Workix deixa de ser uma estratégia de "prova de pureza" e passa a ser uma **estratégia de auditabilidade parcial e declarada**: abre-se o que garante que o jogo não é viciado contra quem não paga; fecha-se o motor que decide quem paga o quê por mais alcance. Essa distinção precisa ficar clara e pública — esconder essa mudança de razão de ser é mais arriscado do que a mudança em si.

---

## 2. AGPLv3 — o que ela faz e por que continua servindo aqui

**Cláusula que importa (seção 13 da AGPLv3):** quem modifica o software e o disponibiliza a usuários **através da rede** é obrigado a oferecer o código-fonte correspondente, incluindo as modificações.

Consequências práticas, inalteradas pela mudança de modelo:

✅ Alguém que quiser rodar um clone da Workix como SaaS tem que abrir todo o código do núcleo dele — inclusive as melhorias.
✅ Uma empresa que quiser customizar internamente sem abrir nada precisa comprar **licença comercial** de você. Isso continua sendo a receita do white-label enterprise — agora com um ativo extra para vender (o motor de visibilidade).
✅ O usuário comum não é afetado em nada: usar a Workix hospedada não gera obrigação alguma.

⚠️ Custos aceitos com essa escolha, inalterados: perda de alguns leads técnicos com política anti-AGPL (irrelevante para o ICP) e baixa contribuição externa esperada nos primeiros dois anos.

**Veredito:** AGPLv3 continua a escolha certa para o núcleo. A mudança de modelo não afeta essa conclusão — afeta apenas **o que fica dentro e fora do núcleo** (seção 4).

---

## 3. O CLA — sem ele, o AGPL não vira dinheiro

Sob AGPL pura, se um terceiro contribuir com código, ele mantém o copyright da contribuição. Resultado: **você não pode mais relicenciar comercialmente aquele trecho** — e o produto white-label enterprise (agora incluindo o motor de visibilidade licenciável) morre no dia da primeira contribuição externa aceita sem CLA.

O **CLA (Contributor License Agreement)** resolve: o contribuidor concede a você licença ampla (ou cede o copyright), permitindo relicenciamento comercial.

### Recomendação de implementação

| Item | Escolha |
|---|---|
| Tipo | CLA de **licença ampla** (não cessão total de copyright) — menos hostil à comunidade, resolve o mesmo problema |
| Modelos-base | Apache ICLA/CCLA adaptados, ou o modelo do Harmony Agreements |
| Variantes | Individual (ICLA) e Corporativo (CCLA) |
| Automação | **CLA Assistant** no GitHub — bloqueia merge de PR até assinatura |
| Complemento | DCO (`Signed-off-by`) em todos os commits |
| Transparência | Arquivo `CLA.md` explicando **em português e sem juridiquês** por que ele existe: *"para que o projeto possa oferecer licença comercial a quem precisa — incluindo o motor de destaque — e isso financia o desenvolvimento do núcleo, que continua livre"* |

> Explicar o CLA honestamente evita 90% do atrito. Comunidade aceita CLA quando entende que ele sustenta o projeto; rejeita quando parece armadilha.

---

## 4. A fronteira open core — redesenhada para o modelo de visibilidade

Esta é a decisão mais importante do documento, e é a que mudou de fato com a nova tese. A regra: **abra tudo que prova que o jogo não é viciado; feche o motor que decide quem paga o quê por mais alcance.**

### 4.1 Repositório aberto — `workix/workix` (AGPLv3)

- Perfis profissionais e currículo
- Páginas de empresa
- Publicação, edição, validade e encerramento de vagas
- Busca e filtros de vagas e candidatos
- Candidatura, funil kanban, status e feedback
- Mensageria entre as partes
- Notificações (push e e-mail)
- Blog e CMS de conteúdo
- Autenticação (integração Firebase)
- App mobile
- **Fórmula de ranqueamento orgânico, documentada e auditável** (ex.: relevância = correspondência de filtros + recência + taxa de resposta da empresa) — o texto e a lógica de referência ficam abertos; a implementação de produção pode evoluir, mas a fórmula publicada precisa corresponder ao comportamento real, e qualquer divergência é reportável como bug de conformidade
- **Enforcement da rotulagem obrigatória** (`is_sponsored` e sua renderização) — código aberto de propósito: é a garantia técnica de que conteúdo pago nunca aparece disfarçado
- **Lógica de consentimento de visibilidade e de contato** (as três chaves do candidato: aparecer na busca, aparecer como aberto a oportunidades, aparecer como "visualizado") — aberto, para que o usuário possa verificar que o consentimento é respeitado no código, não só na política de privacidade
- **Lógica de entitlements e definição de planos** — aberta, como antes
- Rotinas de LGPD: exportação, anonimização, exclusão
- Documentação de self-host

### 4.2 Repositório fechado — `workix/workix-enterprise` (licença comercial)

- **Motor de destaque/visibilidade paga**: alocação de posições patrocinadas, precificação de créditos, limites por categoria/região, e qualquer lógica de leilão que venha a existir na Fase 4
- **Sistema de créditos de contato e de InMail-like**: emissão, consumo, expiração
- **Motor de insights do Workix Premium** (comparação de candidatos, tempo médio de resposta agregado, correlação de visualizações)
- Multi-tenancy e white-label (temas, domínios, isolamento por tenant)
- SSO / SAML / integração com base de associados
- Relatórios avançados e comparativos de mercado
- Conectores de ERP/ATS de terceiros
- Painel administrativo de billing e antifraude
- Ferramentas internas de moderação e antispam

### 4.3 O ponto que costuma confundir: por que abrir a fórmula orgânica, mas fechar o motor de destaque?

Porque são duas perguntas diferentes, e só uma precisa de prova pública:

1. *"O resultado que eu não paguei é manipulado contra mim?"* — Esta pergunta exige resposta auditável. Por isso a fórmula orgânica é aberta.
2. *"Como a Workix decide o preço e a alocação de quem paga por destaque?"* — Esta é infraestrutura comercial, o equivalente ao motor de leilão de anúncios de qualquer plataforma. Nenhum concorrente abre isso, e abrir não geraria confiança adicional relevante — geraria apenas engenharia reversa do sistema de precificação por concorrentes.

**Regras técnicas que decorrem disso:**

1. Toda verificação de entitlement e de rótulo é **server-side**, na API. Nunca no cliente.
2. Nenhuma chave, segredo ou credencial de gateway no repositório aberto — só variáveis de ambiente e `.env.example`.
3. O código aberto assume que o operador da instância é confiável. A segurança do SaaS Workix vem da infraestrutura hospedada, não do sigilo do código.
4. **A obrigação de rótulo (`is_sponsored`) é verificada por teste automatizado no repositório aberto** — qualquer fork ou instância que tentar remover essa verificação está fazendo isso às claras, no próprio histórico de commits.

---

## 5. O fosso real: marca e liquidez, não licença

| Ativo | Protege contra clone? | Prioridade |
|---|---|---|
| **Marca registrada no INPI** | ✅ Muito | 🔴 **Fazer agora** |
| Liquidez (candidatos + vagas ativas + recrutadores buscando) | ✅ Muito | 🔴 Contínua |
| Motor de destaque/visibilidade (fechado) | ✅ Média-alta — é receita, não é segredo de fórmula | 🟡 Fase 3 |
| Domínios (.com.br, .com) | ✅ Média | 🔴 Agora |
| Dados agregados de mercado de trabalho | ✅ Média | 🟡 Fase 4 |
| Licença AGPL do núcleo | ⚠️ Pouco | 🟡 Após a marca |
| Código-fonte do núcleo | ❌ Nenhuma | — |

A AGPL não é a licença da **marca**. Um fork legítimo pode existir sob AGPL, mas **não pode se chamar Workix, usar o logo nem sugerir associação** — e, como o motor de destaque é fechado, um fork também não herda a capacidade comercial de vender visibilidade da mesma forma, mesmo que copie o núcleo inteiro.

### Ações

- [ ] Registro INPI classes **42** (desenvolvimento de software / SaaS) e **35** (recrutamento, publicidade e serviços de emprego)
- [ ] Arquivo `TRADEMARK.md` no repositório: o núcleo é AGPL, a marca não é licenciada, o motor de visibilidade é comercial. Forks devem usar outro nome
- [ ] Registrar `workix.com.br` e variações defensivas
- [ ] Verificar disponibilidade da marca **antes** de investir mais no nome

---

## 6. Arquivos que devem existir no repositório

| Arquivo | Conteúdo |
|---|---|
| `LICENSE` | Texto integral da AGPLv3 |
| `LICENSE-COMMERCIAL.md` | Como obter licença comercial (inclui o motor de visibilidade), com contato |
| `TRADEMARK.md` | Política de marca — o que forks podem e não podem fazer |
| `CLA.md` | O CLA, com explicação em português simples |
| `RANKING.md` | **Novo.** A fórmula de ranqueamento orgânico documentada em linguagem simples, e a política de rotulagem de conteúdo patrocinado |
| `CONTRIBUTING.md` | Como contribuir, DCO, CLA, padrões de código, e o teste de coerência do doc 06 |
| `CODE_OF_CONDUCT.md` | Contributor Covenant |
| `SECURITY.md` | Canal de reporte de vulnerabilidade e prazo de resposta |
| `PRIVACY.md` | Como o projeto trata dados pessoais (referência à LGPD), incluindo dados de visualização de perfil |
| `SELF-HOSTING.md` | Guia honesto de self-host, com o que **não** vem incluso (o motor de destaque é comercial) |
| `README.md` | Com um bloco explícito sobre o modelo de negócio |

### Bloco recomendado para o README

```markdown
## Modelo de licenciamento

A Workix é software livre sob AGPLv3 no núcleo. Você pode usar,
estudar, modificar e redistribuir. Se você rodar uma versão
modificada como serviço de rede, a AGPLv3 exige que você
disponibilize o código correspondente.

A Workix se sustenta vendendo acesso e visibilidade — assinaturas
para empresas, vagas em destaque e, no futuro, destaque de perfil
para candidatos. O motor que decide preço e alocação de destaque é
comercial e fechado (ver LICENSE-COMMERCIAL.md). O que é aberto e
auditável é a fórmula que ordena quem não pagou (RANKING.md) e o
código que obriga todo conteúdo pago a ser identificado como tal.
Ninguém desaparece do resultado orgânico por não pagar, e nenhum
contato é liberado sem consentimento — você pode conferir isso
no código.

A marca "Workix" e o logotipo não são cobertos pela licença de
software. Ver TRADEMARK.md.
```

> A garantia sobre rótulo, orgânico preservado e consentimento é o motivo pelo qual esse esforço vale a pena — é o que resta de "confiança auditável" depois que "não vendemos visibilidade" deixou de ser verdade.

---

## 7. LGPD — o risco que pode encerrar o projeto

A Workix trata **currículos, CPF, histórico profissional, dados de menores potencialmente** (candidatos de 16+) **e, agora, dados de visualização de perfil** (quem viu o quê, quando). Isso não é burocracia: é o único risco do plano capaz de gerar sanção da ANPD e acabar com a operação.

### 7.1 Correção urgente já existente no desenho (herdada da v1.0)

O material atual da Workix diz que **CPF é usado para unicidade de cadastro de pessoa física**. Isso é problemático:

- Coletar CPF no momento do cadastro é provavelmente **excessivo** frente ao princípio da necessidade (art. 6º, III da LGPD)
- CPF vazado é dano concreto e imediato ao titular
- Não é necessário para o serviço funcionar

**Recomendação:**

| Em vez de | Faça |
|---|---|
| CPF obrigatório no cadastro | E-mail verificado como identificador de unicidade |
| CPF em texto claro no banco | Se realmente precisar, **hash com salt**, comparação por hash, nunca exibição |
| CPF para todo candidato | CPF só na etapa de contratação efetiva, e coletado pela empresa, não pela plataforma |

CNPJ é diferente: é dado público de pessoa jurídica, colete à vontade e valide na Receita.

### 7.2 Novo item — dado de visualização de perfil ("quem viu seu perfil")

Este recurso, central ao Workix Premium, cria um novo tipo de dado pessoal: **o registro de que a Pessoa A visualizou o perfil da Pessoa B**. Isso exige tratamento específico:

- **Base legal**: legítimo interesse do candidato/recrutador em saber sobre interações relacionadas à busca de emprego, com **Relatório de Impacto/LIA registrado** — ou consentimento explícito, dependendo de orientação jurídica
- **Controle bidirecional**: o candidato decide se quer ser listado como "visualizado" (§4.3 do doc 02); o recrutador que visualiza também deve saber, na política de privacidade, que sua visualização pode ser revelada ao titular do perfil visualizado
- **Retenção limitada**: log de visualização não deve ser retido indefinidamente — sugestão de 12 meses (Premium) e purga automática
- **Nunca vender ou expor esse dado a terceiros**, inclusive para fins de publicidade fora da plataforma

### 7.3 Checklist mínimo

- [ ] Definir e documentar a **base legal** de cada tratamento, incluindo o novo tratamento de dado de visualização
- [ ] Nomear encarregado (DPO) e publicar o contato — pode ser você
- [ ] Política de Privacidade em linguagem clara, com finalidade, prazo e compartilhamento, incluindo a seção de visibilidade/rastreamento
- [ ] **DPA / contrato de tratamento** com cada empresa contratante — ela é controladora dos dados que recebe; deixe a responsabilidade escrita
- [ ] Fluxo automatizado dos direitos do titular: acesso, correção, portabilidade, exclusão (prazo legal de resposta) — incluindo exclusão de logs de visualização
- [ ] **Política de retenção**: currículo inativo há N meses → anonimização automática; log de visualização com retenção própria e mais curta
- [ ] Registro de operações de tratamento (ROPA), atualizado com o novo tratamento de visibilidade
- [ ] Plano de resposta a incidente com comunicação à ANPD
- [ ] Criptografia em repouso e em trânsito; log de acesso a currículo e a perfil
- [ ] **Transferência internacional**: se Firebase/Cloud armazenam fora do Brasil, isso precisa estar declarado e amparado
- [ ] Idade mínima e tratamento diferenciado para adolescentes (jovem aprendiz é caso real num job board) — e desativação por padrão de recursos de visibilidade paga para perfis identificados como menores

> **Vantagem estratégica escondida aqui:** LGPD bem feita, incluindo o tratamento cuidadoso do dado de visualização, e código auditável na camada orgânica é exatamente o discurso que ganha contrato de federação, sindicato e órgão público — o ICP de maior ticket. O custo de conformidade vira argumento comercial.

---

## 8. Riscos do modelo aberto e como responder

| Risco | Avaliação | Resposta |
|---|---|---|
| Concorrente pega o código do núcleo e lança clone | **Baixo.** O código é a parte fácil; liquidez e o motor de destaque (fechado) são a difícil | AGPL + marca registrada + motor de visibilidade fechado. E siga executando |
| Alguém acha vulnerabilidade lendo o código | **Médio, e é benefício líquido** | `SECURITY.md`, disclosure responsável, correção rápida. Muitos olhos > sigilo |
| Comunidade reage mal ao CLA | Médio | Explicar honestamente em `CLA.md`; usar licença ampla, não cessão |
| **Comunidade reage mal à reversão da promessa "nunca venderemos visibilidade"** | **Alto** | Ver 06 — reconhecimento aberto da mudança, ancorado em garantias novas e verificáveis, preço de fundador |
| Alguém audita o código e encontra rótulo removível ou bypass de consentimento | **Alto, se acontecer** | Teste automatizado obrigatório no CI cobrindo essas duas garantias; tratar como bug de severidade máxima, não como bug comum |
| Contribuições geram carga de manutenção | Médio | Roadmap público; issues marcadas `help wanted`; "não" educado é resposta válida |
| Self-host mal configurado vaza dados e mancha a marca | Médio | `SELF-HOSTING.md` com avisos claros; `TRADEMARK.md` proibindo uso do nome |

---

## 9. Plano de execução

**Semana 1–2**
- [ ] Consulta de disponibilidade da marca no INPI e protocolo do pedido
- [ ] Escolher e adaptar o CLA; revisão jurídica
- [ ] Escrever `LICENSE`, `TRADEMARK.md`, `CLA.md`, `CONTRIBUTING.md`, `SECURITY.md`, `RANKING.md`

**Semana 3–4**
- [ ] Separar o repositório `workix-enterprise` com o motor de destaque isolado desde o início (mesmo que ainda simples)
- [ ] Auditar o histórico: nenhum segredo, chave ou dado real commitado (`gitleaks` / `trufflehog`)
- [ ] Ativar CLA Assistant e proteção de branch
- [ ] Implementar e testar o enforcement de rótulo (`is_sponsored`) e a lógica de consentimento de visibilidade no repositório aberto
- [ ] Publicar o repositório com o README no formato da §6

**Mês 2**
- [ ] Política de Privacidade e Termos de Uso revisados por advogado, incluindo a seção de visibilidade/rastreamento
- [ ] Implementar hash de CPF ou remover a coleta
- [ ] Publicar `SELF-HOSTING.md`

---

<div class="pagebreak"></div>

# Workix — Go-to-Market

**Versão:** 2.0 · setembro de 2026
**Restrição de projeto:** um fundador, sem capital, sem time de vendas. Todo o plano abaixo respeita isso.

---

## 1. O problema que precede todos os outros

Um marketplace de dois lados tem um paradoxo de partida:

```
        Sem vagas → candidato não volta
              ↑                    ↓
      empresa não publica ← sem candidatos
```

**Nenhuma quantidade de marketing resolve isso — e vender visibilidade resolve ainda menos.** Destaque pago só tem valor quando há volume de olhos para ver o destaque. Anúncio pago, ou venda de "Vaga em Destaque", para um job board vazio é dinheiro queimado com precisão, dos dois lados. O cold start só se resolve de três maneiras, e você vai usar as três antes de vender qualquer forma de visibilidade.

---

## 2. As três alavancas contra o cold start

### 2.1 Estreitar até a liquidez ficar barata

Liquidez em "todas as vagas do Brasil" exige milhões de reais. Liquidez em **"vagas de comércio exterior em Santos e São Paulo"** exige 40 vagas ativas e 800 candidatos. É a mesma sensação de plataforma cheia, por 0,01% do custo — e é o pré-requisito para que "Vaga em Destaque" signifique alguma coisa.

> **Regra:** estreite até que você consiga, sozinho, criar a sensação de abundância. Depois expanda por adjacência.

### 2.2 Subsidiar o lado difícil

No recrutamento, o lado difícil é **a vaga**, não o candidato. Candidato aparece se houver vaga; vaga não aparece por si.

Consequências:
- Empresa é gratuita até a liquidez mínima ser atingida (Fase 1 completa) — **e nenhum destaque é vendido antes disso, mesmo que uma empresa peça**
- Você **traz vagas manualmente**: liga, cadastra pela empresa, dá o acesso pronto. Isso não escala e não precisa escalar — precisa das primeiras 40
- Nunca fabrique vagas falsas nem replique anúncio de terceiro sem autorização. Isso destrói o único diferencial que você tem e cria exposição jurídica

### 2.3 Entregar valor de lado único

A plataforma precisa ser útil **antes** de haver os dois lados, e antes de vender qualquer visibilidade. Duas funcionalidades fazem isso:

- **Página de carreiras pública e indexável no Google.** A empresa ganha algo mesmo sem candidato na base: um lugar decente para mandar quem vê o anúncio no Instagram. Isso a faz publicar hoje.
- **Funil de candidaturas organizado.** Se a empresa levar candidatos do próprio Instagram para o link da Workix, ela já resolve a bagunça da planilha. Você virou útil sem ter base — e sem precisar vender destaque para provar valor.

> Essa é a chave: **posicione a Workix, no dia 1, como "o lugar organizado para receber suas candidaturas"**, não como "o lugar onde comprar visibilidade". A segunda promessa você ainda não pode cumprir com credibilidade; a primeira, sim.

---

## 3. A escolha do nicho

### 3.1 Critérios

Um bom nicho de partida tem: (a) volume constante de contratações, (b) desatendido por LinkedIn, (c) empresas concentradas geográfica ou setorialmente, (d) canal de comunidade já existente, (e) **acesso que você já tem**.

### 3.2 Recomendação: comércio exterior e logística internacional

Você trabalha com tecnologia para comércio exterior. Isso significa que você já tem, sem pagar por nada:

| Ativo que você já possui | Como vira go-to-market |
|---|---|
| Rede de contato em empresas de comex | As primeiras 20 empresas com vaga, por telefone |
| Entendimento dos cargos do setor | Filtros e taxonomia que nenhum job board generalista tem |
| Credibilidade setorial | Você não é "mais um site de vagas" — é alguém de dentro |
| Um produto adjacente com audiência de empresas de comex | Canal de distribuição cruzada, custo zero |
| Concentração geográfica (Santos, SP, Itajaí, Paranaguá, Manaus, Vitória) | Liquidez local atingível |

Cargos do setor: analista de importação/exportação, despachante aduaneiro, assistente de comex, analista de logística internacional, conferente, operador portuário, analista fiscal de comex, pricing internacional.

São cargos **mal servidos pelo LinkedIn** (que é forte em tecnologia, marketing e corporativo, e caro para vagas operacionais) e mal servidos pelos generalistas (que não têm nem taxonomia para "classificação fiscal NCM" ou "regimes aduaneiros especiais"). É também um nicho onde o custo de destaque no LinkedIn Jobs tende a ser desproporcional ao valor do cargo — abrindo espaço de preço para a Workix.

**Nome da cunha:** *"Workix — vagas de comércio exterior e logística internacional."* Estreito o suficiente para ser crível, grande o suficiente para pagar as contas.

### 3.3 Alternativas, se você preferir separar a Workix do seu trabalho atual

| Nicho | Prós | Contras |
|---|---|---|
| **Uma cidade média inteira** (ex.: uma capital do interior) | Liquidez local rápida; imprensa local acessível; empresas atendem o telefone | Teto de crescimento; exige presença física |
| **Saúde** (técnicos de enfermagem, recepção de clínica) | Volume alto, rotatividade alta, LinkedIn irrelevante | Muito concorrido por agências |
| **Indústria e manutenção** | Cargos técnicos, LinkedIn fraco, associações setoriais fortes | Ciclo de venda mais lento |
| **Primeiro emprego e jovem aprendiz** | Volume enorme, forte apelo de narrativa | Empresa paga pouco; cuidado extra com LGPD de menores e com venda de destaque para esse público (03, §7.3) |

> ⚠️ **Atenção ao conflito de interesses.** Se o nicho escolhido tocar o mercado do seu empregador, verifique seu contrato de trabalho (cláusula de exclusividade, não concorrência, propriedade intelectual de código escrito no período) antes de lançar. Isso é assunto para o seu advogado, e é melhor resolver agora do que no dia do primeiro cliente.

---

## 4. Canais de aquisição, em ordem de retorno

### 4.1 Empresas (quem paga assinatura e destaque)

| # | Canal | Custo | Prazo | Como fazer |
|---|---|---|---|---|
| 1 | **Rede pessoal e outbound direto** | R$ 0 | Imediato | Lista de 100 empresas do nicho. Ligar, não e-mailar. Cadastrar a vaga por elas |
| 2 | **Associações e sindicatos setoriais** | R$ 0 | 1–3 meses | Oferecer o job board como benefício aos associados. Vira também lead de white-label |
| 3 | **SEO — página de empresa indexável** | Tempo | 3–9 meses | Cada empresa cadastrada é uma landing page que ranqueia em "vagas em [empresa]" |
| 4 | **SEO programático de vagas** | Tempo | 3–9 meses | `/vagas/[cargo]/[cidade]` gerando milhares de páginas. É o motor de tráfego de todo job board — e o que dá volume suficiente para o destaque pago fazer sentido |
| 5 | **Grupos de WhatsApp e Telegram do setor** | R$ 0 | Imediato | Onde as vagas do nicho já circulam hoje. Entre para ajudar, não para divulgar |
| 6 | **Conteúdo técnico do setor** | Tempo | 3–6 meses | "Quanto ganha um analista de importação em 2026" — pauta que atrai os dois lados |
| 7 | **Google Ads em cauda longa** | R$ 300–800/mês | Imediato | Só depois de haver liquidez. Antes disso é desperdício |

### 4.2 Candidatos (quem dá liquidez e, na Fase 4, compra Premium)

| # | Canal | Como fazer |
|---|---|---|
| 1 | **SEO de vaga** | Cada vaga é uma página indexada. É de longe a maior fonte de candidato em qualquer job board |
| 2 | **A própria empresa divulga** | Ela leva a audiência dela para o seu link — canal gratuito e recorrente |
| 3 | **Grupos e comunidades do setor** | Postar as vagas onde os profissionais já estão |
| 4 | **Instagram e TikTok de bastidor de contratação** | Formato "o que o recrutador realmente olha no seu currículo". Barato e converte no público operacional |
| 5 | **Cursos técnicos e escolas do setor** | Parceria com quem forma o profissional — turma inteira vira base |

### 4.3 O canal que multiplica: a taxa de resposta pública

Publique, no site, um número atualizado:

> **"Nesta semana, 87% dos candidatos da Workix receberam um desfecho da empresa."**

Nenhum concorrente — nem o LinkedIn — publica isso. É pauta de imprensa, é conteúdo de rede social, é argumento de venda e é o resumo do produto num número só. **É também o diferencial que sobrevive à venda de visibilidade**, porque não é sobre quem paga mais — é sobre quem responde. Instrumente isso desde a Fase 0.

---

## 5. Os primeiros 10 clientes pagantes — passo a passo

**Fase 0 · Semanas 1–4**
1. Escolher o nicho e escrever a frase do ICP
2. Montar planilha de 100 empresas do nicho (site, LinkedIn, associação, telefone, quem contrata)
3. Publicar os novos princípios da Workix (doc 06), incluindo o reconhecimento da mudança de promessa

**Fase 1 · Meses 2–6 — grátis, sem cobrar nada, sem vender destaque**

4. **Ligar para 100 empresas.** Roteiro: *"Estou lançando um site de vagas especializado em [nicho]. É gratuito. Posso cadastrar sua vaga aberta agora, por telefone, e te mandar o link em 5 minutos?"*
5. **Cadastre você mesmo a vaga.** Não peça para a empresa fazer nada. A fricção zero é a oferta
6. Meta: **20 empresas com vaga ativa até o mês 3; 40 até o mês 5**
7. Levar as vagas para os grupos do setor. Meta: **800 candidatos cadastrados**
8. Toda semana, ligar para as empresas ativas: *"como está o funil? o que falta?"* — isso é pesquisa de produto e retenção ao mesmo tempo
9. Anunciar publicamente: *"a partir de [data], planos e destaque pago para empresas. Quem já está aqui fica com 50% vitalício e créditos de destaque de bônus."*

**Fase 2 · Mês 6 — cobrar assinatura**

10. Ligar de novo, uma a uma, para as empresas ativas. Converter na conversa, não por e-mail. **Meta: 25% das ativas → 10 pagantes.**

> Se 25% da base ativa não converte, o problema não é preço — é que o produto ainda não resolveu nada. Volte para a Fase 1 e não empurre o billing.

**Fase 3 · Mês 9 — vender destaque**

11. Para as empresas já pagantes, oferecer o primeiro crédito de Vaga em Destaque como cortesia, com relatório de alcance depois. **Prova antes de cobrar de novo.**
12. Meta: **20% da base pagante comprando ao menos 1 destaque/mês até o mês 11.**

---

## 6. Roteiro de descoberta (use antes de escrever mais código)

Ligue para 15 empresas do nicho. Não venda. Pergunte:

1. Quantas pessoas vocês contrataram nos últimos 12 meses?
2. Onde vocês anunciam a vaga hoje? *(anote todos os lugares, incluindo LinkedIn Jobs e Indeed pagos)*
3. Quanto vocês gastam com isso por mês? *(número, não faixa — separe assinatura de mídia/destaque paga)*
4. Quem faz a triagem, e quanto tempo isso toma por semana?
5. Onde ficam os currículos que chegam? *(a resposta quase sempre é "no e-mail" ou "no WhatsApp")*
6. Já pagaram para destacar uma vaga em algum lugar? Sentiram que valeu o preço? Por quê?
7. Qual foi a última vaga que deu errado, e por quê?
8. O que te faria trocar o que você usa hoje?
9. Se existisse a ferramenta ideal, quanto ela valeria por mês, e quanto valeria destacar uma vaga por 1 semana? *(pergunte antes de dizer o seu preço)*

**Sinais de que você achou o nicho certo:** a pergunta 3 tem um número acima de R$ 200, a pergunta 4 tem uma resposta acima de 3 horas por semana, a pergunta 5 revela desorganização real, e a pergunta 6 revela insatisfação com o preço ou a opacidade do destaque atual.

---

## 7. Posicionamento contra cada concorrente

| Se a empresa disser | Você responde |
|---|---|
| "Já uso o LinkedIn" | "Ótimo para cargos corporativos. Para [cargo do nicho], quantos candidatos qualificados você recebeu, e quanto custou o CPC? Aqui o destaque tem preço fixo, você sabe exatamente o que vai pagar antes de comprar" |
| "Já pago para destacar vaga no LinkedIn/Indeed" | "Nosso destaque custa R$49–89 por vaga, preço fixo, sem leilão. E ele nunca esconde os candidatos que não pagaram — eles continuam aparecendo, só que abaixo do destaque, claramente identificado" |
| "Já uso a Catho / InfoJobs" | "Quantos daqueles currículos eram do perfil? Aqui você não paga pelo banco separado, e todo destaque pago é rotulado — você sabe o que é orgânico e o que é pago" |
| "Vou esperar vocês crescerem" | "Justo. Enquanto isso, é gratuito e você fica com preço de fundador vitalício e créditos de destaque de bônus quando começarmos a cobrar" |
| "É muito barato, deve ser ruim" | "É barato porque sou eu sozinho e não tenho time de vendas, não porque falta produto. Testa por 14 dias sem cartão" |
| "Não conheço vocês" | "O núcleo é código aberto — você pode auditar a fórmula que decide quem aparece primeiro quando ninguém paga, e o código que garante que conteúdo pago é sempre identificado. Nenhum concorrente te oferece isso" |
| "Isso não é o que o LinkedIn já faz, cobrando por destaque?" | "É o mesmo mecanismo. A diferença é que aqui todo destaque é rotulado, o orgânico nunca desaparece, e o preço é fixo — não leilão. Você pode conferir as regras no código, não só confiar na nossa palavra" |
| "E se vocês fecharem?" | "Exporta tudo em CSV a qualquer momento, e o núcleo do software é AGPL — se eu sumir, ele continua existindo" |

---

## 8. O que **não** fazer

- ❌ Rodar Google Ads antes de ter liquidez
- ❌ Vender qualquer Vaga em Destaque antes da liquidez mínima da Fase 1 — destaque sem audiência é dinheiro perdido do cliente e reputação perdida sua
- ❌ Lançar nacional e generalista
- ❌ Cobrar do candidato (Workix Premium) antes dos gatilhos do doc 02, §4.1
- ❌ Fazer onboarding manual em cliente de R$ 79 — não fecha a conta do seu tempo
- ❌ Construir funcionalidade pedida por uma empresa só
- ❌ Terminar o app mobile antes da liquidez web. **App não resolve cold start**; ele é retenção, e retenção sem aquisição não serve para nada
- ❌ Copiar vagas de outros sites sem autorização
- ❌ Prometer resultado de contratação ou prometer alcance específico de um destaque pago sem dado real por trás
- ❌ Remover ou enfraquecer o rótulo de "Patrocinada" sob pressão comercial de um cliente que quer parecer orgânico

---

## 9. Calendário de 14 meses

| Mês | Foco | Meta |
|---|---|---|
| 1 | Nicho + reposicionamento (com reconhecimento da mudança de promessa) + lista de 100 empresas | Princípios publicados |
| 2 | Descoberta (15 ligações) + ajuste do MVP | ICP validado |
| 3 | Outbound telefônico | 20 empresas com vaga ativa |
| 4 | Aquisição de candidato via grupos + SEO no ar | 400 candidatos |
| 5 | Outbound + conteúdo | 40 vagas ativas · 800 candidatos |
| 6 | **Ligar o billing de assinatura** + campanha de fundador | **10 pagantes** |
| 7 | Selo de Empresa Verificada + retenção | 15 pagantes · churn < 8% |
| 8 | SEO programático + plano anual | 25 pagantes |
| 9 | **Ligar Vaga em Destaque** com cortesia para base ativa | 1º ciclo de destaque testado |
| 10 | Primeira conversa de white-label com associação | 1 piloto assinado |
| 11 | Expansão por adjacência (nicho vizinho) | 32 pagantes · 20% comprando destaque |
| 12 | Consolidação + medição do gatilho de volume para Premium | 40 pagantes · R$ 9.000+ MRR |
| 13–14 | Se gatilhos atingidos, lançar Workix Premium (candidato) | Primeiros assinantes Premium |

---

<div class="pagebreak"></div>

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

<div class="pagebreak"></div>

# Workix — Narrativa e Princípios de Lançamento

**Versão:** 3.0 · setembro de 2026
**Contexto:** o projeto ainda não foi lançado publicamente. Não existe uma promessa pública em produção para reverter — o material anterior ("nunca venderemos visibilidade") era um rascunho interno de manifesto, nunca exposto a usuários reais. Isso muda o problema: não se trata de administrar uma quebra de confiança, e sim de **escolher, antes do primeiro usuário, a narrativa definitiva com a qual o projeto vai nascer**.

---

## 1. Por que isso ainda merece um documento

Mesmo sem audiência para decepcionar, a escolha de narrativa não é trivial: o modelo de negócio da Workix (assinaturas de acesso e visibilidade, dos dois lados, como o LinkedIn) é o mesmo mecanismo que gera a queixa mais comum contra o LinkedIn, a Catho e o Indeed — a sensação de que quem paga mais aparece mais, sem regra clara. Nascer já sendo comparado a esses concorrentes exige que a Workix tenha, desde o dia 1, uma resposta pronta para "isso não é só mais uma plataforma que vende posição?".

A resposta não pode ser "nós não vendemos posição" — porque vende. A resposta é um conjunto de regras de produto, verificáveis, que nenhum desses concorrentes publica.

---

## 2. Os princípios da Workix

Cinco garantias, desenhadas para sustentar um modelo de visibilidade paga sem repetir os problemas que os usuários já associam a esse modelo.

### Os Pactos da Workix

**1. Participar é sempre gratuito.**
Criar perfil, candidatar-se, publicar uma vaga, buscar e ser encontrado no resultado orgânico não custam nada, para ninguém, em nenhum plano.

**2. Toda visibilidade paga é identificada, sempre.**
Vaga em Destaque, Perfil em Destaque, Empresa em Destaque — qualquer posição comprada aparece com um rótulo visível. **O código que garante isso é aberto — dá para conferir.**

**3. Ninguém desaparece por não pagar.**
O resultado orgânico existe sempre, ordenado por relevância, e não é removido nem rebaixado para dar lugar a quem paga. Pagar compra um destaque adicional, não um lugar que era de outra pessoa.

**4. Seu contato só é liberado com o seu consentimento.**
Uma empresa pode pagar para buscar e descobrir perfis. Ela não recebe e-mail, telefone ou CV completo sem consentimento do titular, ou pelo menos um aviso a ele de que foi acessado.

**5. Sem vaga fantasma.**
Toda vaga tem prazo. Toda vaga precisa de um desfecho. Toda empresa tem sua taxa de resposta pública na própria página.

### A frase sobre dinheiro, dita sem rodeios

> **"A Workix vende visibilidade e ferramentas de recrutamento para empresas, e no futuro destaque de perfil para quem procura emprego — o mesmo modelo do LinkedIn. A diferença é que aqui todo destaque pago é identificado, o resultado gratuito nunca some, e seu contato exige seu consentimento. Isso está no código, não só na nossa palavra."**

---

## 3. Texto de referência para o material público (`Workix.md`)

O documento <span class="doc-ref">Workix.md</span> já foi escrito com esses princípios como base — não como uma correção de um texto anterior, mas como a descrição original do projeto. Ele deve continuar sendo a fonte da verdade para qualquer material de marketing, landing page ou apresentação: os cinco Pactos, a tabela-resumo da seção 13, e a lista do que "nunca" é feito.

Ao criar novos materiais (pitch, redes sociais, apresentação a investidor), reutilize esses termos literalmente — evita inconsistência entre documentos e evita ter que explicar, mais tarde, por que um texto de 2026 dizia uma coisa diferente do produto lançado em 2027.

---

## 4. Onde a real cautela ainda se aplica

Não haver promessa pública quebrada não elimina todo risco de percepção. Dois pontos continuam exigindo cuidado:

| Ponto de atenção | Por quê | Mitigação |
|---|---|---|
| **Comparação espontânea com LinkedIn/Catho/Indeed** | Usuário vai perceber o paralelo sozinho, mesmo sem ter visto uma versão anterior do projeto | Ter a resposta pronta na própria página de preços e no FAQ (seção 5) — não esperar a pergunta |
| **Pressão comercial futura para afrouxar as garantias** (esconder rótulo, priorizar destaque sobre orgânico) | É a forma mais comum de um produto de visibilidade degradar com o tempo, mesmo sem má-fé inicial | Regras 2 e 3 dos Pactos são enforced no código aberto do núcleo, não são configuráveis por decisão comercial (03, §4) — usar o teste de coerência da seção 6 antes de qualquer nova funcionalidade paga |

---

## 5. FAQ — perguntas que a página de preços deve responder antes de serem feitas

**"Isso não é o que o LinkedIn e a Catho já fazem?"**
> É o mesmo mecanismo de negócio. A diferença está nas garantias em volta dele: aqui todo destaque é rotulado, o orgânico nunca é removido, e nenhum contato é liberado sem consentimento — regras que estão no código aberto, não só no discurso.

**"Quem não paga fica em desvantagem?"**
> Aparece no mesmo resultado orgânico, ordenado por relevância, que qualquer outro perfil ou vaga sem destaque. Quem paga ganha uma posição adicional, identificada como paga — não tira o lugar de quem não pagou.

**"E o Workix Premium — ele dá alguma vantagem indevida ao candidato que paga?"**
> Dá mais visibilidade (destaque na busca, ver quem viu o perfil, insights). Nunca dá prioridade sobre uma candidatura já enviada, nem esconde quem não paga do resultado orgânico da busca do recrutador. Está descrito assim na página de preços, com a lista do que o Premium nunca vai incluir.

**"Por que o código é aberto se vocês vendem visibilidade como todo mundo?"**
> Porque a fórmula que decide quem aparece primeiro *quando ninguém pagou* é pública e auditável — isso não depende da nossa palavra. O motor que aloca e precifica o destaque pago é comercial e fechado, como em qualquer plataforma, mas as garantias sobre rótulo, orgânico e consentimento estão no núcleo aberto.

**"Sou uma empresa pequena e não posso pagar destaque."**
> O plano gratuito publica vaga e aparece no resultado orgânico normalmente. Destaque é opcional, para quem quer alcance adicional — não é pré-requisito para ser visto.

**"E se a Workix fechar as portas?"**
> Os dados são exportáveis a qualquer momento, e o núcleo do software é livre (AGPLv3) — o código continua disponível para quem quiser rodar, mesmo que a empresa por trás dele deixe de operar.

---

## 6. O teste de coerência

Antes de aprovar qualquer nova funcionalidade paga, passe por estas cinco perguntas:

1. **Isso remove ou rebaixa alguém do resultado orgânico?** → Se sim, não faça.
2. **Isso esconde que algo é pago?** → Se sim, não faça.
3. **Isso libera dado de contato sem consentimento do titular?** → Se sim, não faça.
4. **Eu explicaria isso, sem constrangimento, num pitch para um candidato desempregado?** → Se não, não faça.
5. **Isso está coerente com os 5 Pactos, lidos ao pé da letra?** → Se não, não faça — ou mude o Pacto publicamente, antes de lançar a funcionalidade, e explique por quê.

> Coloque essas cinco perguntas no `CONTRIBUTING.md`. Elas são a constituição do produto desde o primeiro commit público — muito mais barato manter a coerência desde o início do que corrigi-la depois que a base de usuários já existe.

---

## 7. Cronograma de comunicação (pré-lançamento)

Sem uma promessa antiga para desfazer, o cronograma é sobre construir a narrativa certa desde o primeiro material publicado, não sobre gerenciar uma mudança.

| Quando | O quê | Onde |
|---|---|---|
| **Antes do primeiro cadastro externo** | Publicar `Workix.md` com os 5 Pactos e a tabela-resumo | Site, README |
| **Mês 3 (Fase 1, doc 04)** | Post "como a Workix se sustenta" — explicar o modelo de visibilidade e as garantias, com custos reais | Blog + LinkedIn |
| **Mês 4** | Anúncio do Preço de Fundador, com data e contagem regressiva, incluindo créditos de destaque de bônus | E-mail para a base + site |
| **Mês 6** | Ativação dos planos de assinatura | Site + telefone |
| **Mês 9** | Ativação de Vaga em Destaque, com FAQ da seção 5 publicado na página de preços | Site + painel do produto |

---
