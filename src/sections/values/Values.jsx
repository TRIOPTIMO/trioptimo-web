import { useState, useEffect } from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  IconButton,
} from "@mui/material";

import LightbulbIcon from "@mui/icons-material/Lightbulb";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";

export default function Values({mode}) {
  const items = [
    {
      title: "FINANCIACIÓN E INNOVACIÓN",
      desc: "Te ayudamos a conseguir fondos y los transformamos en mejoras operativas concretas mediante ingeniería y digitalización.",
      icon: <LightbulbIcon sx={{ fontSize: 28, color: "primary.main" }} />,
      bg: 'url("/values-1.jpg")',
    },
    {
      title: "MAXIMIZACIÓN DE TUS RECURSOS",
      desc: "Implementamos soluciones técnicas claras y a medida para profesionalizar tu gestión, optimizando cada recurso disponible.",
      icon: <AutoFixHighIcon sx={{ fontSize: 28, color: "primary.main" }} />,
      bg: 'url("/values-2.jpg")',
    },
    {
      title: "ACOMPAÑAMIENTO DE PUNTA A PUNTA",
      desc: "Desde la idea a la ejecución, captación de fondos y medición de resultados.",
      icon: <RocketLaunchIcon sx={{ fontSize: 28, color: "primary.main" }} />,
      bg: 'url("/values-3.jpg")',
    },
  ];

  const [active, setActive] = useState(0);
  const current = items[active];

  // Avance automático cada 5 segundos (puedes cambiar el tiempo)
useEffect(() => {
  const interval = setInterval(() => {
    setActive((prev) => (prev + 1) % items.length);
  }, 5000);

  return () => clearInterval(interval); // cleanup cuando desmonta
}, [items.length]);


  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        minHeight: "600px",
        backgroundImage: current.bg, // cambia fondo por slide
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
        transition: "background-image 0.5s ease",
      }}
    >
      {/* Degradado sobre la foto */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
          mode === "light" ?
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
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="space-between"
          spacing={{ xs: 5, md: 4 }}
        >
          {/* === ZONA SLIDE === */}
          <Box
            sx={{
              position: "relative",
              maxWidth: { xs: "100%", md: 540 },
              mt: { xs: 2, md: 0 },
            }}
          >
            {/* Tarjeta del slide */}
            <Card
              sx={{
                position: "relative",
                overflow: "visible",
                borderRadius: "120px 120px 120px 0",
                boxShadow: "0 18px 40px rgba(0,0,0,0.25)",
                bgcolor:  mode === "light" ? "rgba(255,255,255,0.98)" : "#121212",
                px: { xs: 3, md: 4 },
                py: { xs: 3, md: 3.5 },
                mt: 6
              }}
            >
              {/* Círculo naranja saliendo por la izquierda del card */}
              <Box
                sx={{
                  position: "absolute",
                  left: { xs: -10, md: -20 },
                  top: 0,
                  width: { xs: 56, md: 64 },
                  height: { xs: 56, md: 64 },
                  borderRadius: "50%",
                  bgcolor: "secondary.main",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 18px rgba(0,0,0,0.3)",
                }}
              >
                <KeyboardArrowRightRounded sx={{ color: "#fff", fontSize: 40 }} />
              </Box>

              <CardContent sx={{ p: 0 }}>
                <Stack direction="row" spacing={2.5} alignItems="flex-start">
                  <Box sx={{ ml: { xs: 4, md: 5 }, pl: { xs: 4, md: 5 }  }}>

                    <Typography
                      sx={{
                        fontWeight: 800,
                        letterSpacing: 0.5,
                        mb: 1,
                        color: mode === "light" ? "primary.main" : "primary.secondary"
                      }}
                    >
                      {current.title}
                    </Typography>

                    <Typography
                      sx={{
                        lineHeight: 1.5,
                        fontSize: { xs: 14.5, md: 15.5 },
                        color: mode === "light" ? "#000" : "#FFF"
                      }}
                    >
                      {current.desc}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>

            {/* Dots de estado debajo del card */}
            <Stack
              direction="row"
              spacing={0.8}
              sx={{ mt: 2.5, ml: { xs: 0.5, md: 2 } }}
            >
              {items.map((_, i) => (
                <Box
                  key={i}
                  sx={{
                    width: i === active ? 18 : 8,
                    height: 8,
                    borderRadius: 999,
                    bgcolor:
                      i === active
                        ? "rgba(255,255,255,0.95)"
                        : "rgba(255,255,255,0.6)",
                    transition: "all 0.25s ease",
                  }}
                />
              ))}
            </Stack>

            {/* === CONTROLES A LA DERECHA CON BURBUJA === */}
            <Box
              sx={{
                position: "absolute",
                right: { xs: -4, md: -900 },
                top: { xs: "-5%", md: "50%" },
                transform: "translateY(-50%)",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  bgcolor: "transparent",
                  borderRadius: 999,
                  px: 1,
                  py: 0.75,
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {/* Burbuja que se mueve detrás de las flechas */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    left: { xs: active * 78, md: active * 118 }, // se desplaza por flecha
                    width: { xs: 40, md: 64 },
                    height: { xs: 40, md: 64 },
                    borderRadius: 999,
                    bgcolor: "#c9421f",
                    transition: "left 0.35s ease",
                    zIndex: 0,
                  }}
                />

                <Stack direction="row" spacing={4} sx={{ zIndex: 1 }}>
                  {items.map((_, index) => (
                    <IconButton
                      key={index}
                      onClick={() => setActive(index)}
                      sx={{
                        width: { xs: 40, md: 80 },
                        height: { xs: 40, md: 80 },
                        borderRadius: 999,
                        color: index === active ? "#fff" : "#c9421f",
                        "&:hover": {
                          bgcolor: "transparent",
                        },
                      }}
                    >
                      <KeyboardArrowRightRounded sx={{ fontSize: 40 }} />
                    </IconButton>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>

          {/* === TEXTO "TU MISIÓN ES NUESTRO MOTOR" === */}
          <Box
            sx={{
              textAlign: { xs: "left", md: "right" },
              mt: { xs: 2, md: 0 },
              position: "absolute",
              bottom: "-80%",
              right: "5%"
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2.8rem", md: "5.1rem" },
                fontWeight: 900,
                textTransform: "uppercase",
                color: "#5b1e76",
              }}
            >
              TU MISIÓN
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "2.6rem", md: "4.4rem" },
                fontWeight: 400,
                fontStyle: "italic",
                color: "#222",
              }}
            >
              es nuestro motor
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
