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
   Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
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
import Stats from "./sections/stats/Stats";

export default function LandingTriOptimo() {
  const [mode, setMode] = useState("light");
  const [mobileOpen, setMobileOpen] = useState(false);
const navItems = [
  { href: "#hero", label: "Inicio" },
  { href: "#como", label: "Cómo trabajamos" },
  { href: "#filosofia", label: "Filosofía" },
  { href: "#equipo", label: "Equipo" },
  { href: "#historias", label: "Historias" },
];

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };


  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#5F215E", secondary: "#8b2c8aff" },
          secondary: { main: "#C7431D", secondary: "#8C2315" },
          tertiary: { main: "#F6A623" },
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
          fontFamily: [
            "Inter",
            "system-ui",
            "-apple-system",
            "Segoe UI",
            "Roboto",
            "Helvetica",
            "Arial",
            "sans-serif",
          ].join(","),
          h1: { fontWeight: 800 },
          h2: { fontWeight: 800 },
          h3: { fontWeight: 700 },
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
        sx={{
          bgcolor: mode === "light" ? "primary.main" : "primary.secondary",
          color: "common.white",
          backdropFilter: "blur(16px)",
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
          {/* HAMBURGER (solo mobile) */}
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: "common.white",
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* LINKS IZQUIERDA (solo desktop) */}
          <Stack
            direction="row"
            spacing={{ xs: 2, md: 3 }}
            alignItems="center"
            sx={{
              flexGrow: 1,
              fontSize: { xs: "0.85rem", md: "0.95rem" },
              textTransform: "uppercase",
              fontWeight: 600,
              display: { xs: "none", md: "flex" },
            }}
          >
            {navItems.map((link) => (
              <MLink
                key={link.href}
                href={link.href}
                underline="none"
                sx={{
                  position: "relative",
                  color: "common.white",
                  letterSpacing: 0.6,
                  py: 0.5,
                  transition: "color 0.2s ease",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: 2,
                    borderRadius: 999,
                    bgcolor: "secondary.main",
                    transition: "width 0.25s ease",
                  },
                  "&:hover": {
                    color: "tertiary.main",
                    "&::after": {
                      width: "100%",
                    },
                  },
                }}
              >
                {link.label}
              </MLink>
            ))}
          </Stack>

          {/* RELLENO PARA CENTRAR EN DESKTOP CUANDO NO HAY LOGO */}
          <Box sx={{ flexGrow: { xs: 1, md: 0 } }} />

          {/* DERECHA: Hablemos + modo claro/oscuro */}
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Button
              href="#contacto"
              variant="contained"
              disableElevation
              sx={{
                borderRadius: 999,
                px: { xs: 2.2, md: 3 },
                py: 0.8,
                textTransform: "uppercase",
                fontWeight: 800,
                fontSize: { xs: "0.8rem", md: "0.85rem" },
                letterSpacing: 1,
                bgcolor: "secondary.main",
                color: "common.white",
                border: "2px solid #fff",
                "&:hover": {
                  bgcolor: "secondary.main",
                  filter: "brightness(1.05)",
                },
              }}
            >
              Hablemos
            </Button>

            <IconButton
              onClick={toggleColorMode}
              sx={{
                ml: 0.5,
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.6)",
                color: "common.white",
                width: 38,
                height: 38,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              {mode === "dark" ? (
                <LightModeIcon fontSize="small" />
              ) : (
                <DarkModeIcon fontSize="small" />
              )}
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* DRAWER MOBILE */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box
          sx={{ width: 260, pt: 2 }}
          role="presentation"
          onClick={handleDrawerToggle}
        >
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.href}
                component="a"
                href={item.href}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: 0.8,
                    },
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>


      {/* SECCIONES */}
      <Hero mode={mode}/>
      <Stats/>
      <Values />
      <Process mode={mode}/>
      <Phylosophy />
      <Team mode={mode}/>
      <Stories />
      <Contact mode={mode}/>

      {/* FOOTER */}
      <Box
        component="footer"
        sx={{
          borderTop: "1px solid",
          borderColor: "divider",
          bgcolor: mode === "light" ? "primary.main" : "primary.secondary",
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
              src="/iconWhite.png"
              alt="TriOptimo Logo"
              sx={{
                width: 40,
                height: 40,
                objectFit: "contain",
                borderRadius: 1.5,
                opacity: 0.9,
              }}
            />
            <Box>
              <Typography variant="body2" color="white">
                © {new Date().getFullYear()} TriOptimo.
              </Typography>
              <Typography variant="body2" color="white">
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
              sx={{ fontWeight: 600, color: "white" }}
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
                    color: "white",
                    "&:hover": { color: "secondary.main" },
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
                <LinkedInIcon fontSize="small" color="primary" />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
