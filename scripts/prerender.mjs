import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distPath = resolve(__dirname, "../dist");

const routes = [
  "/",
  "/politica-de-privacidad",
  "/politica-de-cookies",
  "/aviso-legal",
];

async function main() {
  const template = readFileSync(resolve(distPath, "index.html"), "utf-8");
  const { prerender } = await import("../dist/server/prerender.js");

  for (const url of routes) {
    process.stdout.write(`  Prerenderizando ${url} ...`);
    try {
      const { html: appHtml } = await prerender({ url });
      const html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      const outPath =
        url === "/"
          ? resolve(distPath, "index.html")
          : resolve(distPath, url.slice(1), "index.html");

      if (url !== "/") {
        mkdirSync(dirname(outPath), { recursive: true });
      }

      writeFileSync(outPath, html, "utf-8");
      console.log("✓");
    } catch (err) {
      console.log(`✗  ${err.message}`);
      process.exitCode = 1;
    }
  }
  console.log("Prerender finalizado.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
