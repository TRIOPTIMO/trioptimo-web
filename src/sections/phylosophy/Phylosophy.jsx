import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Phylosophy({mode}) {
  return (
    <Box
      id="filosofia"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 8 },
        minHeight: { xs: 420, md: 520 },
        backgroundImage: 'url("/values-3.jpg")', // cambia por tu ruta
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Degradado por encima de la foto */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: mode === "light" ?
            "linear-gradient(90deg, rgba(65, 7, 73, 0.55) 0%, rgba(104, 10, 112, 0.15) 45%, rgba(255,255,255,0.9) 100%)" :
            "linear-gradient(90deg, rgba(65, 7, 73, 0.55) 0%, rgba(104, 10, 112, 0.15) 45%, rgba(255,255,255, 0) 100%)",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5, md: 6 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* COLUMNA IZQUIERDA: título + botón */}
          <Box
            sx={{
              color: "#fff",
              maxWidth: { xs: "100%", md: 420 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
            variant="h2"
              sx={{
                fontSize: { xs: "1.8rem", md: "3.1rem" },
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              NUESTRA
            </Typography>
            <Typography
            variant="h2"
              sx={{
                fontSize: { xs: "2.3rem", md: "3.8rem" },
                fontWeight: 800,
                letterSpacing: 3,
                textTransform: "uppercase",
                mt: { xs: 0.5, md: 1 },
              }}
            >
              FILOSOFÍA
            </Typography>

            <Button
              href="#por-que-elegirnos"
              variant="contained"
              disableElevation
              sx={{
                mt: { xs: 3, md: 4 },
                borderRadius: 999,
                px: 4,
                py: 1.2,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
                bgcolor: "secondary.main",
                color: "#fff",
                border: "3px solid secondary.main",
                boxShadow: "0 14px 30px rgba(0,0,0,0.35)",
                "&:hover": {
                  bgcolor: "secondary.secondary",
                },
              }}
            >
              POR QUÉ ELEGIRNOS
            </Button>
          </Box>

          {/* COLUMNA DERECHA: burbuja blanca */}
          <Box
            sx={{
              maxWidth: { xs: "100%", md: 540 },
              width: "100%",
            }}
          >
            <Card
              sx={{
                borderRadius: "80px 80px 80px 0",
                boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
                position: "relative",
                overflow: "visible",
              }}
            >
              {/* círculo naranja con check a la derecha */}
              <Box
                sx={{
                  position: "absolute",
                  right: { xs: 16, md: -48 },
                  top: { xs: "auto", md: "50%" },
                  bottom: { xs: -28, md: "auto" },
                  transform: { md: "translateY(-50%)" },
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  bgcolor: "secondary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 12px 26px rgba(0,0,0,0.3)",
                }}
              >
                <CheckCircleIcon sx={{ color: "#fff", fontSize: 40 }} />
              </Box>

              <CardContent sx={{ px: { xs: 3, md: 4 }, py: { xs: 3, md: 3.5 } }}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    textTransform: "uppercase",
                    mb: 1.5,
                  }}
                >
                  Sabemos lo que implica sostener un proyecto social:
                </Typography>

                <Typography
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.6,
                    fontSize: { xs: 14.5, md: 15.5 },
                  }}
                >
                  La pasión, la entrega, las horas sin fin, y también la
                  sensación de que a veces faltan recursos o apoyo. Queremos
                  acompañarte, liberar tu carga técnica y ayudarte a enfocarte
                  en lo esencial:{" "}
                  <Box component="span" sx={{ fontWeight: 700 }}>
                    seguir generando impacto real.
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
