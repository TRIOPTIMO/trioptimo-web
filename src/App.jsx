import React, { useState, useMemo, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { ColorModeProvider } from "./theme/ColorModeContext";
import { Layout } from "./sections/layout/Layout";
import HomePage from "./pages/mainPage/Main";
import PoliticaDePrivacidadPage from "./pages/legal/PrivacyPolicy";
import AvisoLegalPage from "./pages/legal/LegalAdvise";
import PoliticaDeCookiesPage from "./pages/legal/CookiesPolicy";
import useCookieConsent from "./hooks/useCookieConsent";
import loadGA from "./utils/loadGA";
import CookieBanner from "./sections/layout/components/cookies/CookieBanner";

const GA_ID = "G-ZBWR315DJR";

export default function App() {
  const { consent } = useCookieConsent();

  useEffect(() => {
    if (consent === "accepted") {
      loadGA(GA_ID);
    }
  }, [consent]);

  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem("color-mode");
    return saved === "light" || saved === "dark" ? saved : "light";
  });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("color-mode", mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#9139D2" },
          secondary: { main: "#00dd93" },
          tertiary: { main: "#0104FE", hover: "#0408f1" },

          text: {
            primary: mode === "light"
              ? "rgba(0,0,0,0.8)"
              : "rgba(255,255,255,0.9)",
            secondary: mode === "light"
              ? "rgba(0,0,0,0.6)"
              : "rgba(255,255,255,0.7)",
          },

          ...(mode === "light"
            ? {
              background: {
                default: "#F8F8F8",
                paper: "#F9F9F9",
              },
            }
            : {
              background: {
                default: "#121212",
                paper: "#1E1E1E",
              },
            }),
        },

        shape: { borderRadius: 16 },

        typography: {
          fontFamily: [
            "Nunito",
            "Inter",
            "system-ui",
            "-apple-system",
            "Segoe UI",
            "Roboto",
            "Helvetica",
            "Arial",
            "sans-serif",
          ].join(","),

          // Títulos
          h1: { fontFamily: "Rubik", fontWeight: 700 },
          h2: { fontFamily: "Rubik", fontWeight: 700 },
          h3: { fontFamily: "Rubik", fontWeight: 600 },
          h4: { fontFamily: "Rubik", fontWeight: 600 },
          h5: { fontFamily: "Rubik", fontWeight: 600 },
          h6: { fontFamily: "Rubik", fontWeight: 600 },

          // Texto base
          body1: {
            fontWeight: 400,
            color: mode === "light"
              ? "rgba(0,0,0,0.8)"
              : "rgba(255,255,255,0.9)",
          },
          body2: {
            fontWeight: 400,
            color: mode === "light"
              ? "rgba(0,0,0,0.6)"
              : "rgba(255,255,255,0.7)",
          },

          button: {
            fontWeight: 600,
            textTransform: "none",
          },
        },
      }),
    [mode]
  );

  const colorModeValue = useMemo(
    () => ({ mode, toggleColorMode, setMode }),
    [mode]
  );

  return (
    <ColorModeProvider value={colorModeValue}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Routes>
          {/* Layout envuelve todas estas rutas */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/politica-de-privacidad" element={<PoliticaDePrivacidadPage />} />
            <Route path="/politica-de-cookies" element={<PoliticaDeCookiesPage />} />
            <Route path="/aviso-legal" element={<AvisoLegalPage />} />
          </Route>
        </Routes>
        <CookieBanner />
      </ThemeProvider>
    </ColorModeProvider>
  );
}
