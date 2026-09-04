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

**Próximo documento:** [04-GO-TO-MARKET.md](./04-GO-TO-MARKET.md)
