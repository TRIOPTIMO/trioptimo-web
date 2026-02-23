import * as React from "react";
import {
  Box,
  Link as MUILink,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FooterLegalMUI({
  companyName = "Trioptimo",
  privacyHref = "/politica-de-privacidad",
  cookiesHref = "/politica-de-cookies",
  legalNoticeHref = "/aviso-legal",
}) {
  const { t } = useTranslation();

  return (
    <Box sx={{ px: 3, py: 1 }}>
      <Stack
        direction="column"
        spacing={2}
        sx={{ flexWrap: "wrap", fontSize: 13, alignItems: "left" }}
        aria-label={t("footer.legal.label")}
      >
        <Typography>{t("footer.legal.title")}</Typography>

        <MUILink
          component={RouterLink}
          to={privacyHref}
          underline="hover"
          color="text.secondary"
        >
          {t("footer.legal.privacy")}
        </MUILink>

        <MUILink
          component={RouterLink}
          to={cookiesHref}
          underline="hover"
          color="text.secondary"
        >
          {t("footer.legal.cookies")}
        </MUILink>

        <MUILink
          component={RouterLink}
          to={legalNoticeHref}
          underline="hover"
          color="text.secondary"
        >
          {t("footer.legal.notice")}
        </MUILink>
      </Stack>
    </Box>
  );
}