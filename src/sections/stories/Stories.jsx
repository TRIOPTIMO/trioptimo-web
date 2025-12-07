import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import StoriesCarousel from "./components/StoriesCarousel";
import FinalStatement from "./components/FinalStatement";

const stories = [
  {
    quote:
      "Trabajar con TriOptimo marcó un antes y un después. No solo conseguimos la financiación que necesitábamos, sino que optimizamos procesos como nunca creímos posible.",
    author: "— Fundación Crece, Directora General",
  },
  {
    quote:
      "Pasamos de procesos manuales a flujos automatizados. Ganamos velocidad y trazabilidad, y pudimos medir mejor nuestro impacto.",
    author: "— Asociación Horizonte, Director de Operaciones",
  },
  {
    quote:
      "Nos ayudaron a convertir una buena idea en un proyecto financiable y sostenible. La diferencia fue clarísima.",
    author: "— Red Joven, Coordinadora",
  },
];

export default function Stories() {
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
      <Box sx={{ textAlign: "center" }}>
        <Stack sx={{ direction: { xs: "column", md: "row" } }}>
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{
              fontSize: { xs: "1.9rem", md: "3.4rem" },
            }}
          >
            Nuestro trabajo {" "}
          </Typography>
          <Typography
            variant="h4"
            fontWeight={800}
            sx={{
              fontSize: { xs: "1.9rem", md: "3.4rem" },
              color: "primary.main"
            }}
          >
            habla por nosotros
          </Typography>
        </Stack>
      </Box>

      {/* Carrusel circular */}
      <Box sx={{ width: "100%", maxWidth: 700 }}>
        <StoriesCarousel items={stories} intervalMs={6000} />
      </Box>

      <FinalStatement/>

    </Container>
  );
}