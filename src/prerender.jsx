import * as React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import App from "./App.jsx";

export async function prerender(data) {
  const url = data?.url || "/";

  // ✅ Cache de Emotion para entorno Node/prerender
  const cache = createCache({ key: "css" });

  const html = renderToString(
    <CacheProvider value={cache}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </CacheProvider>
  );

  return { html };
}
