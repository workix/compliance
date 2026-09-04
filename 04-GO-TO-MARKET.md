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

**Próximo documento:** [05-ROADMAP-TECNICO-BILLING.md](./05-ROADMAP-TECNICO-BILLING.md)
