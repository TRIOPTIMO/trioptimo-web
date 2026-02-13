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

import Hero from "../hero/Hero";
import Values from "../values/Values";
import Process from "../process/Process";
import Phylosophy from "../phylosophy/Phylosophy";
import Team from "../team/Team";
import Stories from "../stories/Stories";
import Contact from "../contact/Contact";
import CTAButton from "../common/CTAButton";
import FooterLegalMUI from "../legal/FooterLegal";

export function Layout({ mode, toggleColorMode }) {
  return (
    <>
      {/* NAVBAR */}
      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        sx={{
          backdropFilter: "blur(14px)",
          background: "background.default"
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1200,
            mx: "auto",
            width: "100%",
            minHeight: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {/* Logo + tagline */}
          <Box
            component="a"
            href="#hero"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src={mode === "light" ? "/trioptimo-black.png" : "/trioptimo-white.png"}
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

            <CTAButton />

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
      <Hero mode={mode} />
      <Values />
      <Process mode={mode} />
      <Phylosophy />
      <Team mode={mode} />
      <Stories mode={mode} />
      <Contact />

      {/* FOOTER */}
      <Box
        component="footer"
        sx={{
          borderTop: "1px solid",
          borderColor: "divider",
          bgcolor: mode === "light" ? "grey.50" : "grey.900",
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
              src={mode === "light" ? "/logo-black.png" : "/logo-white.png"}
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
                © {new Date().getFullYear()} Trioptimo.
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
                <LinkedInIcon fontSize="small" color={mode === "light" ? "tertiary" : "secondary"} />
              </IconButton>
            </Stack>
          </Stack>
        </Container>

        <Stack direction="row" alignItems="center">
          <FooterLegalMUI />
        </Stack>
      </Box>
    </>
  );
}
