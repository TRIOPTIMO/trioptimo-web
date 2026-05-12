import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";

const isSSR = typeof window === "undefined";
const supportedLngs = ["es", "en"];

const chain = i18n.use(
  resourcesToBackend((language, namespace) =>
    import(`../locales/${language}/${namespace}.json`)
  )
);

if (!isSSR) {
  chain.use(LanguageDetector);
}

export const i18nReady = chain.use(initReactI18next).init({
  supportedLngs,
  fallbackLng: "es",
  defaultNS: "common",
  ns: ["common"],
  interpolation: { escapeValue: false },
  ...(!isSSR && {
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  }),
  react: { useSuspense: !isSSR },
});

i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
});

export default i18n;