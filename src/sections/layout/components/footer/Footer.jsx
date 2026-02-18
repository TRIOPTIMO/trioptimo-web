import React from "react";
import {
  Container,
  Box,
  Typography,
  Stack,
  Link as MLink,
  Divider
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { useColorMode } from "../../../../theme/ColorModeContext";
import FooterLegalMUI from "./components/FooterLegal";
import { FooterContact } from "./components/Contact";
import { FooterLocations } from "./components/Locations";

export function Footer() {
  const { mode } = useColorMode();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        bgcolor: mode === "light" ? "grey.50" : "grey.900",
      }}
    >
      <Container sx={{ py: { xs: 2, md: 2 } }}>
        {/* Bloques superiores */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, md: 4 }}
          alignItems={{ xs: "stretch", md: "flex-start" }}
          sx={{ width: "100%" }}
        >
          <FooterContact />
          <FooterLegalMUI />
          <FooterLocations />
        </Stack>
      </Container>

      <Divider sx={{ mx: { xs: 2, md: 4 } }} />

      {/* Barra inferior */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        alignItems="center"
        justifyContent="center"
        sx={{ px: 2, py: 2, textAlign: { xs: "center", sm: "left" } }}
      >
        <Box
          component="img"
          src={mode === "light" ? "/logo-black.png" : "/logo-white.png"}
          alt="TriOptimo Logo"
          sx={{
            width: 20,
            height: 20,
            objectFit: "contain",
            borderRadius: 1.5,
            opacity: 0.9,
          }}
        />

        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Todos los derechos reservados. Trioptimo. Ingeniería con propósito
        </Typography>
      </Stack>
    </Box>
  );
}

