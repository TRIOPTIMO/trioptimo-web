import * as React from "react";
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

export default function AvisoLegalPage() {
  const { t } = useTranslation();

  const lastUpdate = "13/02/2026";

  const owner = {
    name: "Ignacio Davanzo",
    address: "Malaga, España",
    email: "info@trioptimo.com",
    website: "https://trioptimo.com/",
  };

  return (
    <Box sx={{ py: { xs: 4, sm: 6 } }}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: 3 }}>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            {t("legalNotice.title")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t("legalNotice.lastUpdateLabel", { date: lastUpdate })}
          </Typography>
        </Stack>

        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
          <Stack spacing={3}>
            <Section title={t("legalNotice.sections.s1Title")}>
              <Typography>
                {t("legalNotice.sections.s1Intro")}{" "}
                <MUILink
                  href={owner.website}
                  target="_blank"
                  sx={(theme) => ({
                    color: "text.primary",
                    "&:hover": { color: theme.palette.secondary.main },
                  })}
                >
                  {owner.website}
                </MUILink>{" "}
                {t("legalNotice.sections.s1AfterLink")}
                <br />
                <br />
                <strong>{t("legalNotice.sections.nameLabel")}</strong>{" "}
                {owner.name} <br />
                <strong>{t("legalNotice.sections.locationLabel")}</strong>{" "}
                {owner.address} <br />
                <strong>{t("legalNotice.sections.emailLabel")}</strong>{" "}
                {owner.email}
              </Typography>
            </Section>

            <Divider />

            <Section title={t("legalNotice.sections.s2Title")}>
              <Typography>{t("legalNotice.sections.s2Body")}</Typography>
            </Section>

            <Section title={t("legalNotice.sections.s3Title")}>
              <Typography>{t("legalNotice.sections.s3Body")}</Typography>
            </Section>

            <Section title={t("legalNotice.sections.s4Title")}>
              <Typography>{t("legalNotice.sections.s4Body")}</Typography>
            </Section>

            <Section title={t("legalNotice.sections.s5Title")}>
              <Typography>{t("legalNotice.sections.s5Body")}</Typography>
            </Section>

            <Section title={t("legalNotice.sections.s6Title")}>
              <Typography>{t("legalNotice.sections.s6Body")}</Typography>
            </Section>

            <Section title={t("legalNotice.sections.s7Title")}>
              <Typography>{t("legalNotice.sections.s7Body")}</Typography>
            </Section>

            <Divider />

            <Typography variant="body2" color="text.secondary">
              <Trans
                i18nKey="legalNotice.footerNote"
                values={{ email: owner.email }}
                components={{ strong: <strong /> }}
              />
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
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}