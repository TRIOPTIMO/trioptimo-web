import * as React from "react";
import {
  Box,
  Divider,
  Link as MUILink,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

/**
 * FooterLegalMUI
 * - Footer con enlaces legales para GDPR (ES)
 * - Ajusta las rutas y el nombre de la empresa según tu proyecto
 */
export default function FooterLegalMUI({
  companyName = "Trioptimo",
  privacyHref = "/politica-de-privacidad",
  cookiesHref = "/politica-de-cookies",
  legalNoticeHref = "/aviso-legal",
}) {
  return (
    <Box sx={{ px: 3, py: 1 }}>
      <Stack
        direction="column"
        spacing={2}
        sx={{ flexWrap: "wrap", fontSize: 13, alignItems: "left" }}
        aria-label="Enlaces legales"
      >
        <Typography>Información Legal</Typography>
        <MUILink component={RouterLink} to={privacyHref} underline="hover" color="text.secondary">
          Política de Privacidad
        </MUILink>
        <MUILink component={RouterLink} to={cookiesHref} underline="hover" color="text.secondary">
          Política de Cookies
        </MUILink>
        <MUILink component={RouterLink} to={legalNoticeHref} underline="hover" color="text.secondary">
          Aviso Legal
        </MUILink>
      </Stack>
    </Box>
  );
}
