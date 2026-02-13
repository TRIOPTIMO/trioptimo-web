export default function loadGA(measurementId) {
  // ✅ En prerender/Node no existe window/document
  if (typeof window === "undefined" || typeof document === "undefined") return;

  if (!measurementId) return;
  if (window.gtag) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", measurementId);
}
