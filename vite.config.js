import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

export default defineConfig({
  plugins: [
    react(),
    legacy({
      // Target conservador para evitar errores en el chromium de snapshot
      targets: ["defaults", "not IE 11"],
    }),
  ],
});
