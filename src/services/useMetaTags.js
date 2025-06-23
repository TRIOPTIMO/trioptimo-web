import { useEffect } from "react";

export function useMetaTags({ title, description, keywords, lang = "es" }) {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = lang;

    const setMetaTag = (nameOrProperty, value, isProperty = false) => {
      const selector = isProperty
        ? `meta[property='${nameOrProperty}']`
        : `meta[name='${nameOrProperty}']`;

      let tag = document.head.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        if (isProperty) {
          tag.setAttribute("property", nameOrProperty);
        } else {
          tag.setAttribute("name", nameOrProperty);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", value);
    };

    setMetaTag("description", description);
    setMetaTag("keywords", keywords);
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
  }, [title, description, keywords, lang]);
}
