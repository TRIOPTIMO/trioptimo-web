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

export default function PoliticaDePrivacidadPage() {
  const { t } = useTranslation();

  const lastUpdate = "13/02/2026"; // cámbialo cuando actualices la política

  const company = {
    name: "Ignacio Davanzo",
    address: "Malaga, España",
    email: "info@trioptimo.com",
    phone: "+34 663 47 70 89",
    website: "https://trioptimo.com/",
  };

  const s2Bullets = t("privacyPolicy.sections.s2Bullets", { returnObjects: true });
  const s3Bullets = t("privacyPolicy.sections.s3Bullets", { returnObjects: true });
  const s4Bullets = t("privacyPolicy.sections.s4Bullets", { returnObjects: true });
  const s5Bullets = t("privacyPolicy.sections.s5Bullets", { returnObjects: true });
  const s8Bullets = t("privacyPolicy.sections.s8Bullets", { returnObjects: true });

  return (
    <Box sx={{ py: { xs: 4, sm: 6 } }}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: 3 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
            {t("privacyPolicy.title")}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {t("privacyPolicy.lastUpdateLabel", { date: lastUpdate })}
          </Typography>
        </Stack>

        <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
          <Stack spacing={3}>
             <Typography variant="body1">
              <Trans
                i18nKey="privacyPolicy.intro"
                values={{ website: company.website }}
                components={{
                  link: (
                    <MUILink
                      href={company.website}
                      target="_blank"
                      rel="noreferrer"
                      sx={(theme) => ({
                        color: "text.primary",
                        "&:hover": { color: theme.palette.secondary.main },
                      })}
                    />
                  ),
                }}
              />
            </Typography>

            <Divider />

            <Section title={t("privacyPolicy.sections.s1Title")}>
              <Typography variant="body1">
                <strong>{t("privacyPolicy.sections.s1OwnerLabel")}</strong>{" "}
                {company.name}
                <br />
                <strong>{t("privacyPolicy.sections.s1AddressLabel")}</strong>{" "}
                {company.address}
                <br />
                <strong>{t("privacyPolicy.sections.s1EmailLabel")}</strong>{" "}
                {company.email}
                <br />
                {company.phone?.startsWith("[") ? (
                  <>
                    <strong>{t("privacyPolicy.sections.s1PhoneLabel")}</strong>{" "}
                    {company.phone}
                  </>
                ) : (
                  company.phone && (
                    <>
                      <strong>{t("privacyPolicy.sections.s1PhoneLabel")}</strong>{" "}
                      {company.phone}
                    </>
                  )
                )}
              </Typography>
            </Section>

            <Section title={t("privacyPolicy.sections.s2Title")}>
              <Typography variant="body1">
                {t("privacyPolicy.sections.s2Body")}
              </Typography>
              <Bullets items={Array.isArray(s2Bullets) ? s2Bullets : []} />
            </Section>

            <Section title={t("privacyPolicy.sections.s3Title")}>
              <Typography variant="body1">
                {t("privacyPolicy.sections.s3Body")}
              </Typography>
              <Bullets items={Array.isArray(s3Bullets) ? s3Bullets : []} />
            </Section>

            <Section title={t("privacyPolicy.sections.s4Title")}>
              <Typography variant="body1">
                {t("privacyPolicy.sections.s4Body")}
              </Typography>
              <Bullets items={Array.isArray(s4Bullets) ? s4Bullets : []} />
            </Section>

            <Section title={t("privacyPolicy.sections.s5Title")}>
              <Typography variant="body1">
                {t("privacyPolicy.sections.s5Body")}
              </Typography>
              <Bullets items={Array.isArray(s5Bullets) ? s5Bullets : []} />
            </Section>

            <Section title={t("privacyPolicy.sections.s6Title")}>
              <Typography variant="body1">
                <Trans
                  i18nKey="privacyPolicy.sections.s6Body"
                  components={{ strong: <strong /> }}
                />
              </Typography>
            </Section>

            <Section title={t("privacyPolicy.sections.s7Title")}>
              <Typography variant="body1">
                {t("privacyPolicy.sections.s7Body")}
              </Typography>
            </Section>

             <Section title={t("privacyPolicy.sections.s8Title")}>
              <Typography variant="body1">
                {t("privacyPolicy.sections.s8Body")}
              </Typography>

              <Bullets items={Array.isArray(s8Bullets) ? s8Bullets : []} />

              <Typography variant="body1" sx={{ mt: 1 }}>
                <Trans
                  i18nKey="privacyPolicy.sections.s8HowTo"
                  values={{ email: company.email }}
                  components={{ strong: <strong /> }}
                />
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {t("privacyPolicy.sections.s8Note")}
              </Typography>
            </Section>

            <Section title={t("privacyPolicy.sections.s9Title")}>
              <Typography variant="body1">
                {t("privacyPolicy.sections.s9Body")}
              </Typography>
            </Section>

            <Section title={t("privacyPolicy.sections.s10Title")}>
              <Typography variant="body1">
                {t("privacyPolicy.sections.s10Body")}
              </Typography>
            </Section>

            <Section title={t("privacyPolicy.sections.s11Title")}>
              <Typography variant="body1">
                {t("privacyPolicy.sections.s11Body")}
              </Typography>
            </Section>

            <Section title={t("privacyPolicy.sections.s12Title")}>
              <Typography>{t("privacyPolicy.sections.s12Body")}</Typography>
            </Section>
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