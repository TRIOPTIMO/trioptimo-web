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
      "Trioptimo nos acompañó con compromiso  en el proceso de reconstruir y ordenar nuestra identidad institucional, brindándonos herramientas valiosas que hoy sostienen y fortalecen nuestro modo de organizarnos y trabajar.",
    author: "— El Andar escuela de equinoterapia, Directora General",
  },
  {
    quote:
      "Gracias a Trioptimo, he aprendido a diseñar y gestionar los diferentes Proyectos de la organización, con una metodología estructurada y tomando decisiones a partir de datos precisos y objetivos estrategicos. Gracias por el acompañamiento",
    author: "— El Kiri, Directora",
  },
  {
    quote:
      "Trioptimo nos acompañó en la reconstrucción de nuestra identidad institucional, aportando herramientas clave que hoy fortalecen nuestro funcionamiento y crecimiento.",
    author: "— El Andar, Coordinadora",
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
