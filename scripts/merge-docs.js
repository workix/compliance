// Unifica os arquivos .md do plano de negócio da Workix em um único
// markdown pronto para conversão em PDF (via md-to-pdf).
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

const DOCS = [
  { file: "00-SUMARIO-EXECUTIVO.md", title: "Sumário Executivo" },
  { file: "Workix.md", title: "Workix — Material Público do Projeto" },
  { file: "01-PLANO-DE-NEGOCIO.md", title: "Plano de Negócio" },
  { file: "02-MONETIZACAO-E-PRICING.md", title: "Monetização e Pricing" },
  { file: "03-LICENCIAMENTO-OPEN-SOURCE.md", title: "Licenciamento Open Source" },
  { file: "04-GO-TO-MARKET.md", title: "Go-to-Market" },
  { file: "05-ROADMAP-TECNICO-BILLING.md", title: "Roadmap Técnico de Faturamento" },
  { file: "06-REPOSICIONAMENTO-NARRATIVA.md", title: "Narrativa e Princípios de Lançamento" },
];

function cleanCrossReferences(text) {
  return text
    // [`Workix.md`](./Workix.md) -> **Workix.md**
    .replace(/\[`([^`]+)`\]\(\.\/[^)]+\)/g, '<span class="doc-ref">$1</span>')
    // [00-SUMARIO-EXECUTIVO.md](./00-SUMARIO-EXECUTIVO.md) -> **00-SUMARIO-EXECUTIVO.md**
    .replace(/\[([\w.\-]+\.md)\]\(\.\/[\w.\-]+\.md\)/g, '<span class="doc-ref">$1</span>')
    // remove trailing "Próximo documento" navigation lines
    .replace(/\*\*Próximo documento:\*\*.*$/m, "")
    // "Fim do pacote." navigation line in doc 06
    .replace(/^>?\s*\*\*Fim do pacote\.\*\*.*$/m, "");
}

function readDoc(file) {
  const full = path.join(ROOT, file);
  let content = fs.readFileSync(full, "utf8");
  content = cleanCrossReferences(content);
  return content.trim();
}

const today = new Date().toLocaleDateString("pt-BR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

let out = "";

// Capa
out += `<div class="cover">\n\n# Workix\n\n<div class="subtitle">Plano de Negócio, Monetização e Reposicionamento — Pacote Completo</div>\n\n<div class="meta">\n\n**Autor do projeto:** Felipe Rodrigues Michetti<br/>\n**Modelo de negócio:** assinaturas de acesso e visibilidade (dois lados do marketplace)<br/>\n**Documento gerado em:** ${today}\n\n</div>\n\n</div>\n\n`;

// Sumário (índice manual)
out += `<div class="pagebreak"></div>\n\n<div class="toc">\n\n## Índice\n\n<ul>\n`;
DOCS.forEach((d, i) => {
  out += `<li>${i + 1}. ${d.title} <span style="float:right;color:#888;">${d.file}</span></li>\n`;
});
out += `</ul>\n\n</div>\n\n`;

// Aviso geral
out += `<div class="pagebreak"></div>\n\n> **Nota sobre este documento.** Este PDF unifica todos os arquivos Markdown do plano de negócio da Workix, na ordem em que devem ser lidos. Valores de mercado, preços de concorrentes e projeções financeiras marcados como **[ESTIMATIVA — VALIDAR]** não foram confirmados por pesquisa externa e devem ser validados antes de qualquer uso com investidor, sócio ou instituição financeira. Este material não constitui aconselhamento jurídico, contábil ou financeiro.\n\n`;

// Documentos
DOCS.forEach((d) => {
  out += `<div class="pagebreak"></div>\n\n`;
  out += readDoc(d.file);
  out += "\n\n";
});

const outPath = path.join(ROOT, "Workix-Plano-de-Negocio-Completo.md");
fs.writeFileSync(outPath, out.trim() + "\n", "utf8");
console.log("Merged markdown written to:", outPath);
