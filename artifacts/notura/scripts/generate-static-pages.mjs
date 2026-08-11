import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = resolve(projectRoot, "dist/public");

const homeMetadata = {
  title: "Notura — Grave, transcreva e resuma reuniões com IA",
  description:
    "Grave suas reuniões, gere transcrições e receba resumos automáticos com os principais pontos e próximos passos usando o Notura.",
  canonical: "https://notura.com.br/",
};

const pages = [
  {
    outputs: ["planos.html", "planos/index.html"],
    metadata: {
      title: "Planos e preços — Notura",
      description:
        "Compare os planos Free, Starter, Pro e Enterprise do Notura para transcrever reuniões, gerar resumos e organizar tarefas.",
      canonical: "https://notura.com.br/planos",
    },
  },
];

function replaceAllRequired(html, from, to) {
  if (!html.includes(from)) {
    throw new Error(`Expected metadata value not found in built HTML: ${from}`);
  }

  return html.replaceAll(from, to);
}

const homeHtml = await readFile(resolve(outputRoot, "index.html"), "utf8");

for (const page of pages) {
  let html = homeHtml;
  html = replaceAllRequired(html, homeMetadata.title, page.metadata.title);
  html = replaceAllRequired(
    html,
    homeMetadata.description,
    page.metadata.description,
  );
  html = replaceAllRequired(
    html,
    `<link rel="canonical" href="${homeMetadata.canonical}" />`,
    `<link rel="canonical" href="${page.metadata.canonical}" />`,
  );
  html = replaceAllRequired(
    html,
    `<meta property="og:url" content="${homeMetadata.canonical}" />`,
    `<meta property="og:url" content="${page.metadata.canonical}" />`,
  );

  for (const output of page.outputs) {
    const outputPath = resolve(outputRoot, output);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html, "utf8");
  }
}
