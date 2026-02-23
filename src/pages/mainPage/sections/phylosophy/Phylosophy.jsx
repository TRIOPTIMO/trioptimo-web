import React from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useTranslation, Trans } from "react-i18next";

export default function Phylosophy({ mode }) {
  const { t } = useTranslation();

  const reasons = t("philosophy.cards.reasons.items", { returnObjects: true });

  return (
    <Container
      id="filosofia"
      maxWidth="lg"
      sx={{
        py: 8,
        position: "relative",
      }}
    >
      <Box
        component="img"
        src="/logo-grey.png"
        alt={t("philosophy.watermarkAlt")}
        sx={{
          position: "absolute",
          bottom: 10,
          left: -200,
          width: 580,
          height: "auto",
          opacity: 0.06,
          zIndex: -1,
          pointerEvents: "none",
          userSelect: "none",
          display: { xs: "none", md: "block" },
        }}
      />

      <Stack
        direction="row"
        flexWrap="wrap"
        useFlexGap
        alignItems="flex-start"
        sx={(theme) => ({ gap: theme.spacing(6) })}
      >
        {/* ---- Columna izquierda ---- */}
        <Box
          sx={(theme) => ({
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: {
              xs: "100%",
              md: `calc((100% - ${theme.spacing(6)}) / 2)`,
            },
            minWidth: { xs: "100%", sm: 0 },

            position: { xs: "static", md: "sticky" },
            top: { xs: "auto", md: theme.spacing(12) },
            alignSelf: "flex-start",
            height: "fit-content",
          })}
        >
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{
              fontSize: { xs: "1.9rem", md: "3.4rem" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {t("philosophy.title")}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              mt: 2,
              textAlign: { xs: "center", md: "left" },
              fontSize: "1.2rem",
            }}
          >
            <Trans
              i18nKey="philosophy.intro"
              components={{ strong: <strong /> }}
            />
          </Typography>
        </Box>

        {/* ---- Columna derecha: cards ---- */}
        <Box
          sx={(theme) => ({
            flexGrow: 0,
            flexShrink: 0,
            flexBasis: {
              xs: "100%",
              md: `calc((100% - ${theme.spacing(6)}) / 2)`,
            },
            minWidth: { xs: "100%", sm: 0 },
          })}
        >
          <Stack spacing={3}>
            <InfoCard
              title={t("philosophy.cards.commitment.title")}
              desc={t("philosophy.cards.commitment.desc")}
            />
            <InfoCard
              title={t("philosophy.cards.dream.title")}
              desc={t("philosophy.cards.dream.desc")}
            />
            <ReasonsCard
              title={t("philosophy.cards.reasons.title")}
              reasons={Array.isArray(reasons) ? reasons : []}
            />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

function InfoCard({ title, desc }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" color="primary" fontWeight={700} sx={{ fontFamily: "Nunito" }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5 }}>
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

function ReasonsCard({ title, reasons }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" color="primary" fontWeight={700} sx={{ fontFamily: "Nunito" }}>
          {title}
        </Typography>

        <Stack spacing={1.5} sx={{ mt: 1.5 }}>
          {reasons.map((text, idx) => (
            <Bullet key={`${idx}-${text}`}>{text}</Bullet>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

function Bullet({ children }) {
  return (
    <Stack direction="row" spacing={1.5} alignItems="flex-start">
      <KeyboardArrowRightIcon color="primary" sx={{ mt: "2px" }} />
      <Typography variant="body1" color="text.secondary">
        {children}
      </Typography>
    </Stack>
  );
}