import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Divider,
  Link as MUILink,
  Stack,
  Typography,
  Paper,
} from "@mui/material";
import { useTranslation, Trans } from "react-i18next";

export default function PoliticaDeCookiesPage() {
  const { t } = useTranslation();

  const lastUpdate = "13/02/2026"; // cámbialo cuando actualices la política

  // Ajusta estos datos a tu proyecto
  const site = {
    domain: "trioptimo.com",
    ownerName: "Ignacio Davanzo",
    contactEmail: "info@trioptimo.com",
    gaProvider: "Google LLC",
    gaService: "Google Analytics",
    gaCookieDuration: "entre la sesión y hasta 2 años",
  };

  const s2Bullets = t("cookiesPolicy.sections.s2Bullets", { returnObjects: true });
  const s5Bullets = t("cookiesPolicy.sections.s5Bullets", { returnObjects: true });

  return (
    <Box sx={{ py: { xs: 4, sm: 6 } }}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: 3 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
            {t("cookiesPolicy.title")}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {t("cookiesPolicy.lastUpdateLabel", { date: lastUpdate })}
          </Typography>
        </Stack>

        <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
          <Stack spacing={3}>
            <Typography variant="body1">
              <Trans i18nKey="cookiesPolicy.intro" values={{ domain: site.domain }}>
                {/* 0 */}This Cookie Policy explains...{/* 1 */}<strong />
              </Trans>
            </Typography>

            <Divider />

            <Section title={t("cookiesPolicy.sections.s1Title")}>
              <Typography variant="body1">
                {t("cookiesPolicy.sections.s1Body")}
              </Typography>
            </Section>

            <Section title={t("cookiesPolicy.sections.s2Title")}>
              <Typography variant="body1">
                {t("cookiesPolicy.sections.s2Body")}
              </Typography>
              <Bullets items={Array.isArray(s2Bullets) ? s2Bullets : []} />
            </Section>

            <Section title={t("cookiesPolicy.sections.s3Title")}>
              <Typography variant="body1">
                <strong>{t("cookiesPolicy.sections.s3BodyStrong")}</strong>{" "}
                {t("cookiesPolicy.sections.s3BodyRest")}
              </Typography>

              <Typography variant="body1" sx={{ mt: 1 }}>
                {t("cookiesPolicy.sections.s3ToolLabel")}{" "}
                <strong>{site.gaService}</strong>
                <br />
                {t("cookiesPolicy.sections.s3ProviderLabel")}{" "}
                <strong>{site.gaProvider}</strong>
                <br />
                {t("cookiesPolicy.sections.s3PurposeLabel")}{" "}
                <strong>{t("cookiesPolicy.sections.s3PurposeValue")}</strong>{" "}
                {t("cookiesPolicy.sections.s3PurposeDetails")}
                <br />
                {t("cookiesPolicy.sections.s3DurationLabel")}{" "}
                <strong>{site.gaCookieDuration}</strong>
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {t("cookiesPolicy.sections.s3Note")}
              </Typography>
            </Section>

            <Section title={t("cookiesPolicy.sections.s4Title")}>
              <Typography variant="body1">
                <Trans i18nKey="cookiesPolicy.sections.s4Body">
                  {/* 0 */}The legal basis...{/* 1 */}<strong />
                </Trans>
              </Typography>
            </Section>

            <Section title={t("cookiesPolicy.sections.s5Title")}>
              <Typography variant="body1">
                {t("cookiesPolicy.sections.s5Body1")}
              </Typography>

              <Typography variant="body1" sx={{ mt: 1 }}>
                {t("cookiesPolicy.sections.s5Body2")}
              </Typography>

              <Bullets items={Array.isArray(s5Bullets) ? s5Bullets : []} />

              <Typography variant="body2" color="text.secondary">
                {t("cookiesPolicy.sections.s5Hint")}
              </Typography>
            </Section>

            <Section title={t("cookiesPolicy.sections.s6Title")}>
              <Typography variant="body1">
                <Trans i18nKey="cookiesPolicy.sections.s6Body">
                  {/* 0 */}For more information...{/* 1 */}
                  <MUILink
                    component={RouterLink}
                    to="/politica-de-privacidad"
                    underline="hover"
                    sx={(theme) => ({
                      color: "text.primary",
                      "&:hover": { color: theme.palette.secondary.main },
                    })}
                  />
                </Trans>
              </Typography>
            </Section>

            <Section title={t("cookiesPolicy.sections.s7Title")}>
              <Typography variant="body1">
                {t("cookiesPolicy.sections.s7OwnerLabel")}{" "}
                <strong>{site.ownerName}</strong>
                <br />
                {t("cookiesPolicy.sections.s7EmailLabel")}{" "}
                <strong>{site.contactEmail}</strong>
              </Typography>
            </Section>

            <Divider />

            <Typography variant="body2" color="text.secondary">
              {t("cookiesPolicy.footerNote")}
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

function Section({ title, children }) {
  return (
    <Box>
      <Typography variant="h6" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function Bullets({ items }) {
  return (
    <Box component="ul" sx={{ m: 0, pl: 3 }}>
      {items.map((text, i) => (
        <Box component="li" key={i} sx={{ mb: 0.75 }}>
          <Typography variant="body1">{text}</Typography>
        </Box>
      ))}
    </Box>
  );
}