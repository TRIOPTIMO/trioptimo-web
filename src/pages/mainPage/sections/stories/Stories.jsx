import {
  Container,
  Box,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import StoriesCarousel from "./components/StoriesCarousel";

export default function Stories({ mode }) {
  const { t } = useTranslation();
  const stories = t("stories.items", { returnObjects: true });

  return (
    <Container
      id="historias"
      maxWidth="lg"
      sx={{
        py: { xs: 8, md: 10 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
      }}
    >
      {/* Título + subtítulo */}
      <Box sx={{ textAlign: "center", maxWidth: 720 }}>
        <Typography
          variant="h4"
          fontWeight={800}
          sx={{ fontSize: { xs: "1.9rem", md: "3.4rem" } }}
        >
          {t("stories.title")}
        </Typography>

        <Typography color="text.secondary" sx={{ mt: 1.5 }}>
          {t("stories.subtitle")}
        </Typography>
      </Box>

      {/* Carrusel circular */}
      <Box sx={{ width: "100%", maxWidth: 700 }}>
        <StoriesCarousel
          items={Array.isArray(stories) ? stories : []}
          intervalMs={6000}
          mode={mode}
        />
      </Box>
    </Container>
  );
}