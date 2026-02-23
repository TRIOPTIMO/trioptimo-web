import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";

const supportedLngs = ["es", "en"];

i18n
  .use(
    resourcesToBackend((language, namespace) => {
      return import(`../locales/${language}/${namespace}.json`);
    })
  )
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs,
    fallbackLng: "es",
    defaultNS: "common",
    ns: ["common"],
    interpolation: { escapeValue: false },

    // Detecta: idioma guardado -> navegador
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"]
    },

    react: { useSuspense: true }
  });

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

export default i18n;