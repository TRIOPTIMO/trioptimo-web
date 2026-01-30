import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  Stack,
  Link as MLink,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import React, { useState, useMemo } from "react";

import Hero from "./sections/hero/Hero";
import Values from "./sections/values/Values";
import Process from "./sections/process/Process";
import Phylosophy from "./sections/phylosophy/Phylosophy";
import Team from "./sections/team/Team";
import Stories from "./sections/stories/Stories";
import Contact from "./sections/contact/Contact";

export default function LandingTriOptimo() {
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
        tertiary: { main: "#0104FE" },
        ...(mode === "light"
          ? {
              background: { default: "#FFFFFF", paper: "#F9F9F9" },
            }
          : {
              background: { default: "#121212", paper: "#1E1E1E" },
            }),
      },
      shape: { borderRadius: 16 },
      typography: {
        // Base: textos normales
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

        // Títulos con Rubik
        h1: {
          fontFamily: "Rubik",
          fontWeight: 700,
        },
        h2: {
          fontFamily: "Rubik",
          fontWeight: 700,
        },
        h3: {
          fontFamily: "Rubik",
          fontWeight: 600,
        },
        h4: {
          fontFamily: "Rubik",
          fontWeight: 600,
        },
        h5: {
          fontFamily: "Rubik",
          fontWeight: 600,
        },
        h6: {
          fontFamily: "Rubik",
          fontWeight: 600,
        },

        // Texto y UI
        body1: { fontWeight: 400 },
        body2: { fontWeight: 400 },
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

      {/* NAVBAR */}
      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        sx={{
          backdropFilter: "blur(14px)",
           background:
      mode === "light"
        ? "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.86))"
        : "linear-gradient(to bottom, rgba(18,18,18,0.95), rgba(18,18,18,0.86))",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1200,
            mx: "auto",
            width: "100%",
            minHeight: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {/* Logo + tagline */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src={ mode === "light" ? "/trioptimo-black.png" : "/trioptimo-white.png"}
              alt="TriOptimo Logo"
              href="#hero"
              sx={{
                width: 180,
                height: 60,
                objectFit: "contain",
                borderRadius: 2,
              }}
            />
          </Box>

          {/* Links desktop */}
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {[
              { href: "#como", label: "Cómo trabajamos" },
              { href: "#filosofia", label: "Filosofía" },
              { href: "#equipo", label: "Equipo" },
              { href: "#historias", label: "Historias" },
            ].map((link) => (
              <MLink
                key={link.href}
                href={link.href}
                underline="none"
                sx={{
                  position: "relative",
                  color: "text.primary",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  py: 0.5,
                  transition: "color 0.2s ease",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 2,
                    borderRadius: 999,
                    bgcolor: "primary.main",
                    transition: "width 0.25s ease",
                  },
                  "&:hover": {
                    color: "primary.main",
                    "&::after": {
                      width: "60%",
                    },
                  },
                }}
              >
                {link.label}
              </MLink>
            ))}

            <Button
              href="#contacto"
              variant="contained"
              color="secondary"
              disableElevation
              sx={{
                ml: 1,
                borderRadius: 999,
                px: 2.8,
                py: 0.7,
                textTransform: "none",
                fontWeight: 600,
                color:"white",
              }}
            >
              Empieza tu proyecto
            </Button>
           

          </Stack>
           <IconButton
              onClick={toggleColorMode}
              color="inherit"
              sx={{ ml: 2 }}
            >
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
        </Toolbar>
      </AppBar>

      {/* SECCIONES */}
      <Hero mode={mode}/>
      <Values />
      <Process mode={mode}/>
      <Phylosophy />
      <Team mode={mode}/>
      <Stories mode={mode}/>
      <Contact />

      {/* FOOTER */}
      <Box
        component="footer"
        sx={{
          borderTop: "1px solid",
          borderColor: "divider",
          bgcolor: mode === "light" ? "grey.50" : "#140714",
        }}
      >
        <Container
          sx={{
            py: 3.5,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {/* izquierda */}
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              component="img"
              src="/icon.png"
              alt="TriOptimo Logo"
              sx={{
                width: 28,
                height: 28,
                objectFit: "contain",
                borderRadius: 1.5,
                opacity: 0.9,
              }}
            />
            <Box>
              <Typography variant="body2" color="text.secondary">
                © {new Date().getFullYear()} TriOptimo.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Todos los derechos reservados.
              </Typography>
            </Box>
          </Stack>

          {/* derecha */}
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{ flexWrap: "wrap", justifyContent: "flex-end" }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              Ingeniería con propósito
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center">
              {[
                { href: "#como", label: "Proceso" },
                { href: "#filosofia", label: "Filosofía" },
                { href: "#equipo", label: "Equipo" },
              ].map((link) => (
                <MLink
                  key={link.href}
                  href={link.href}
                  underline="none"
                  sx={{
                    fontSize: "0.85rem",
                    color: "text.secondary",
                    "&:hover": { color: "primary.main" },
                  }}
                >
                  {link.label}
                </MLink>
              ))}

              <IconButton
                component="a"
                href="https://www.linkedin.com/company/trioptimo/"
                target="_blank"
                rel="noreferrer noopener"
                size="small"
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: "999px",
                  boxShadow: 1,
                  "&:hover": { bgcolor: "grey.100" },
                }}
              >
                <LinkedInIcon fontSize="small" color= {mode === "light" ? "tertiary" : "secondary"} />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
