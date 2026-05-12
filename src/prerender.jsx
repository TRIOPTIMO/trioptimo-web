import * as React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { i18nReady } from "./i18n/index.js";
import App from "./App.jsx";

export async function prerender(data) {
  const url = data?.url || "/";

  await i18nReady;

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
