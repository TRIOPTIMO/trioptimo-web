import {
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";

import React, { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./sections/layout/Layout";
import PoliticaDePrivacidadPage from "./sections/legal/PrivacyPolicy";

export default function App() {
const [mode, setMode] = useState("light");

const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };
  
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


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
      <Route path="/" element={<Layout mode={mode} toggleColorMode={toggleColorMode}/>} />
      <Route path="/politica-de-privacidad" element={<PoliticaDePrivacidadPage />} />
      {/* <Route path="/politica-de-cookies" element={<PoliticaDeCookiesPage />} />
      <Route path="/aviso-legal" element={<AvisoLegalPage />} /> */}
    </Routes>
    </ThemeProvider>
  );
}
