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

export function Footer() {
  const { mode } = useColorMode();

  return (
    <>
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
            py: 1,
            display: "flex",
            flexWrap: "wrap",
            alignItems: "left",
            gap: 2,
          }}
        >
          <Stack direction="row" alignItems="left" width={"100%"}>
            <FooterContact></FooterContact>
            <FooterLegalMUI />
          </Stack>
        </Container>


        <Divider sx={{ mx: 4 }}></Divider>
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{ px: 3.5, py: 2 }}>
          <Box
            component="img"
            src={mode === "light" ? "/logo-black.png" : "/logo-white.png"}
            alt="TriOptimo Logo"
            sx={{ width: 20, height: 20, objectFit: "contain", borderRadius: 1.5, opacity: 0.9, background:"transparent" }}
          />
          <Box>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Todos los derechos reservados. Trioptimo. Ingeniería con propósito
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
