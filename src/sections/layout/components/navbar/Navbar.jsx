import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  Link as MLink,
  IconButton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTranslation } from "react-i18next";

import { useColorMode } from "../../../../theme/ColorModeContext";
import CTAButton from "../../../common/CTAButton";
import LanguageSwitcher from "./LanguageSwitcher";

export function NavBar() {
  const { mode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        sx={{
          top: 0,
          zIndex: 100,
          backdropFilter: "blur(14px)",
          bgcolor: "background.default",
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
          <Box
            component={RouterLink}
            to="/"
            sx={{ display: "flex", alignItems: "center", gap: 1.5, flexGrow: 1 }}
          >
            <Box
              component="img"
              src={mode === "light" ? "/trioptimo-black.png" : "/trioptimo-white.png"}
              alt="TriOptimo Logo"
              sx={{ width: 180, height: 60, objectFit: "contain", borderRadius: 2 }}
            />
          </Box>

          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {[
              { href: "/#como", label: t("navbar.how") },
              { href: "/#filosofia", label: t("navbar.philosophy") },
              { href: "/#equipo", label: t("navbar.team") },
              { href: "/#historias", label: t("navbar.stories") },
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
                    "&::after": { width: "60%" },
                  },
                }}
              >
                {link.label}
              </MLink>
            ))}

            <CTAButton label={t("navbar.cta")} />
          </Stack>

          <IconButton
            label={t("navbar.labels.darkMode")}
            onClick={toggleColorMode}
            color="inherit"
            sx={{ ml: 2 }}
          >
            {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          <LanguageSwitcher />
        </Toolbar>
      </AppBar>
    </>
  );
}