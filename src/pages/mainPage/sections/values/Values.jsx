import React from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import { useTranslation, Trans } from "react-i18next";

import LightbulbIcon from "@mui/icons-material/Lightbulb";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

export default function Values({ mode }) {
  const { t } = useTranslation();

  const items = [
    {
      key: "funding",
      icon: <LightbulbIcon sx={{ fontSize: 34, color: "text.primary" }} />,
    },
    {
      key: "resources",
      icon: <AutoFixHighIcon sx={{ fontSize: 34, color: "text.primary" }} />,
    },
    {
      key: "endToEnd",
      icon: <RocketLaunchIcon sx={{ fontSize: 34, color: "text.primary" }} />,
    },
  ].map((item) => ({
    ...item,
    title: t(`values.items.${item.key}.title`),
    desc: t(`values.items.${item.key}.desc`),
  }));

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      {/* === TITULO Y SUBTITULO === */}
      <Box sx={{ textAlign: "center", mb: 6, maxWidth: 800, mx: "auto" }}>
        <Typography
          variant="h4"
          fontWeight={800}
          sx={{ fontSize: { xs: "1.9rem", md: "3.4rem" } }}
        >
          {t("values.title")}
        </Typography>

        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          sx={{ mt: 2, lineHeight: 1.6, fontWeight: 400 }}
        >
          <Trans
            i18nKey="values.subtitle"
            components={{ bold: <b /> }}
          />
        </Typography>
      </Box>

      {/* === GRID DE VALORES === */}
      <Stack
        direction="row"
        flexWrap="wrap"
        useFlexGap
        sx={(theme) => ({
          gap: theme.spacing(3),
          justifyContent: "space-between",
        })}
      >
        {items.map((v) => (
          <Box
            key={v.key}
            sx={(theme) => ({
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: {
                xs: "100%",
                sm: `calc((100% - ${theme.spacing(3)}) / 2)`,
                md: `calc((100% - ${theme.spacing(3)} * 2) / 3)`,
              },
              minWidth: { xs: "100%", sm: 0 },
            })}
          >
            <ValueCard title={v.title} desc={v.desc} icon={v.icon} />
          </Box>
        ))}
      </Stack>
    </Container>
  );
}

function ValueCard({ title, desc, icon }) {
  return (
    <Card
      variant="outlined"
      sx={(theme) => {
        const bw = 2;
        const br = theme.shape.borderRadius;
        return {
          position: "relative",
          height: "100%",
          borderRadius: 1,
          overflow: "hidden",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          borderColor: "divider",
          backgroundColor: "transparent",

          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            background: "linear-gradient(90deg, #9139D2, #0104FE, #00dd93)",
            opacity: 0,
            transition: "opacity 0.25s ease",
            pointerEvents: "none",
            zIndex: 0,
          },

          "&::after": {
            content: '""',
            position: "absolute",
            inset: `${bw}px`,
            borderRadius: `calc(${br}px - ${bw}px)`,
            backgroundColor: theme.palette.background.paper,
            pointerEvents: "none",
            zIndex: 1,
          },
          "& > *": {
            position: "relative",
            zIndex: 2,
          },

          "&:hover": {
            boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
            transform: "translateY(-4px)",
            borderColor: "transparent",
            "&::before": { opacity: 1 },
          },
        };
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ mb: 2 }}>{icon}</Box>

        <Typography fontWeight={700} sx={{ fontSize: "1.05rem" }}>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}