import * as React from "react";
import {
  Box,
  Divider,
  Link as MUILink,
  Stack,
  Typography,
} from "@mui/material";

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
    <Box  sx={{ width: "80%", mx: "auto" }}>
      <Divider />
      <Box sx={{ px: 3, py: 1 }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1.25, sm: 2 }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            justifyContent="space-between"
          >
            <Stack
              direction="row"
              spacing={2}
              divider={<Typography color="text.disabled">•</Typography>}
              sx={{ flexWrap: "wrap", fontSize: 13, alignItems: "center" }}
              aria-label="Enlaces legales"
            >
              <MUILink href={privacyHref} underline="hover" color="text.secondary">
                Política de Privacidad
              </MUILink>
              <MUILink href={cookiesHref} underline="hover" color="text.secondary">
                Política de Cookies
              </MUILink>
              <MUILink href={legalNoticeHref} underline="hover" color="text.secondary">
                Aviso Legal
              </MUILink>
            </Stack>
          </Stack>
      </Box>
    </Box>
  );
}
