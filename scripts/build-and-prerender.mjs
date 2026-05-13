import { execSync } from "child_process";

try {
  console.log("\n▶ Compilando bundle SSR...");
  execSync("npx vite build --config vite.config.ssr.js", { stdio: "inherit" });

  console.log("\n▶ Ejecutando prerender...");
  execSync("node scripts/prerender.mjs", { stdio: "inherit" });

  console.log("\n✓ Prerender completado.");
} catch (err) {
  console.warn("\n⚠ Prerender omitido — el sitio se despliega como SPA.");
  console.warn("  Causa:", err.message);
  // Salida 0 para que el deploy no falle
}
