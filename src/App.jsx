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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Hero from "./sections/hero/Hero";
import Values from "./sections/values/Values";
import Process from "./sections/process/Process";
import Phylosophy from "./sections/phylosophy/Phylosophy";
import Team from "./sections/team/Team";
import Stories from "./sections/stories/Stories";
import Contact from "./sections/contact/Contact";

// === THEME (paleta solicitada) ===
const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#5F215E" },
    secondary: { main: "#8C2315" },
    tertiary: { main: "#F6A623" },
    background: { default: "#FFFFFF" },
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
});

export default function LandingTriOptimo() {
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
            "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,0.86))",
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
              src="/icon.png" // ajusta si tu path es distinto
              alt="TriOptimo Logo"
              sx={{
                width: 40,
                height: 40,
                objectFit: "contain",
                borderRadius: 2,
              }}
            />
            <Box>
              <Typography
                fontWeight={700}
                variant="h6"
                color="text.primary"
                sx={{ letterSpacing: 0.4, lineHeight: 1.1 }}
              >
                TRIOPTIMO
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  display: { xs: "none", sm: "block" },
                }}
              >
                Ingeniería con propósito
              </Typography>
            </Box>
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
              color="tertiary"
              disableElevation
              sx={{
                ml: 1,
                borderRadius: 999,
                px: 2.8,
                py: 0.7,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Hablemos
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* SECCIONES */}
      <Hero />
      <Values />
      <Process />
      <Phylosophy />
      <Team />
      <Stories />
      <Contact />

      {/* FOOTER */}
      <Box
        component="footer"
        sx={{
          borderTop: "1px solid",
          borderColor: "divider",
          bgcolor: "grey.50",
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
                href="https://www.linkedin.com"
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
