import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "cookie_consent";

export default function useCookieConsent() {
  // En prerender/SSR no existe window/localStorage
  const isBrowser = typeof window !== "undefined";

  const [consent, setConsent] = useState(null);

  // Lee storage SOLO en el cliente
  useEffect(() => {
    if (!isBrowser) return;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "accepted" || saved === "rejected") setConsent(saved);
      else setConsent(null);
    } catch {
      setConsent(null);
    }
  }, [isBrowser]);

  const accept = useCallback(() => {
    if (!isBrowser) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}
    setConsent("accepted");
  }, [isBrowser]);

  const reject = useCallback(() => {
    if (!isBrowser) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, "rejected");
    } catch {}
    setConsent("rejected");
  }, [isBrowser]);

  const reset = useCallback(() => {
    if (!isBrowser) return;
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {}
    setConsent(null);
  }, [isBrowser]);

  return { consent, accept, reject, reset };
}
