import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie_consent";

export default function useCookieConsent() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setConsent(saved);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setConsent("accepted");
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setConsent("rejected");
  };

  return { consent, accept, reject };
}
