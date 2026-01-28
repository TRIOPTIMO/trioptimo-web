import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StoriesCarousel from "./components/StoriesCarousel";

const stories = [
  {
    quote:
      "Trabajar con TriOptimo marcó un antes y un después. No solo conseguimos la financiación que necesitábamos, sino que optimizamos procesos como nunca creímos posible.",
    author: "— El Andar escuela de equinoterapia, Directora General",
  },
  {
    quote:
      "Pasamos de procesos manuales a flujos automatizados. Ganamos velocidad y trazabilidad, y pudimos medir mejor nuestro impacto.",
    author: "— Frontera Cero, Directora",
  },
  {
    quote:
      "Nos ayudaron a convertir una buena idea en un proyecto financiable y sostenible. La diferencia fue clarísima.",
    author: "— Red Joven, Coordinadora",
  },
];

export default function Stories({mode}) {
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
          sx={{
            fontSize: { xs: "1.9rem", md: "3.4rem" },
          }}
        >
          Historias de impacto
        </Typography>

        <Typography color="text.secondary" sx={{ mt: 1.5 }}>
          El éxito de nuestros clientes es nuestra mejor carta de presentación.
        </Typography>
      </Box>

      {/* Carrusel circular */}
      <Box sx={{ width: "100%", maxWidth: 700 }}>
        <StoriesCarousel items={stories} intervalMs={6000} mode={mode}/>
      </Box>

      {/* Card + CTA */}
      {/* <Box sx={{ width: "100%", maxWidth: 520 }}>
        <InfoCard
          title="¿Listo para multiplicar tu impacto?"
          desc="Da el primer paso hacia un proyecto financiable, sostenible y con resultados medibles. Estamos aquí para ayudarte a hacerlo realidad."
        />

        <Button
          href="#contacto"
          variant="contained"
          sx={{ mt: 2, width: "100%" }}
          endIcon={<ArrowForwardIcon />}
        >
          Hablemos
        </Button>
      </Box> */}
    </Container>
  );
}

function InfoCard({ title, desc }) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 3,
        boxShadow: "0 10px 28px rgba(15,23,42,0.06)",
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography fontWeight={700}>{title}</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 1.5 }}
        >
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}
