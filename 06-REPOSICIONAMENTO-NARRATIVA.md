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

O documento [`Workix.md`](./Workix.md) já foi escrito com esses princípios como base — não como uma correção de um texto anterior, mas como a descrição original do projeto. Ele deve continuar sendo a fonte da verdade para qualquer material de marketing, landing page ou apresentação: os cinco Pactos, a tabela-resumo da seção 13, e a lista do que "nunca" é feito.

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

**Fim do pacote.** Volte ao [00-SUMARIO-EXECUTIVO.md](./00-SUMARIO-EXECUTIVO.md), seção 8, para os primeiros 30 dias.
