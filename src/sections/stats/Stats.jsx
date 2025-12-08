import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HERO_STATS = [
  {
    value: 30,
    suffix: "%",
    label: "Más eficiencia operativa",
  },
  {
    value: 4,
    suffix: "x",
    label: "Mayor tasa de éxito en financiación",
  },
  {
    value: 95,
    suffix: "%",
    label: "Procesos clave automatizados",
  },
];

export default function Stats({ mode }) {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const [statIndex, setStatIndex] = useState(0);
  const currentStat = HERO_STATS[statIndex];

  // va ciclando entre 30%, 4x, 95%...
  useEffect(() => {
    const id = window.setInterval(() => {
      setStatIndex((prev) => (prev + 1) % HERO_STATS.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div {...fadeUp}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 6, md: 8 }}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* === COLUMNA IZQUIERDA: TEXTO === */}
            <Box
              sx={{
                maxWidth: { xs: 520, md: 540 },
                textAlign: { xs: "left", md: "left" },
              }}
            >
              <Typography
                component="h1"
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    xs: "2.3rem",
                    sm: "2.7rem",
                    md: "3.1rem",
                  },
                  lineHeight: 1.1,
                }}
              >
                Convertimos{" "}
                <Box component="span" sx={{ fontStyle: "italic", fontWeight: 700 }}>
                  ideas
                </Box>{" "}
                en proyectos
                <Box component="span" sx={{ display: "block", fontStyle: "italic" }}>
                  sostenibles
                </Box>
              </Typography>

              <Typography
                sx={{
                  mt: 2.5,
                  fontSize: { xs: 14, md: 24 },
                  lineHeight: 1.6,
                }}
              >
                Somos un{" "}
                <Box
                  component="span"
                  sx={{ fontWeight: 700, color: mode === "light" ? "primary.main" : "primary.secondary" }}
                >
                  aliado estratégico
                </Box>{" "}
                que cree en el poder de la colaboración para construir un
                futuro donde tu organización tenga éxito.
              </Typography>

              <Button
                href="#contacto"
                variant="contained"
                sx={{
                  mt: 4,
                  px: 4,
                  py: 1.4,
                  borderRadius: 999,
                  backgroundColor: "secondary.main",
                  fontWeight: 800,
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                  "&:hover": {
                    backgroundColor: "#8C2A15",
                  },
                }}
                endIcon={<ArrowForwardIcon sx={{ fontSize: 20 }} />}
              >
                Cuéntanos tu idea
              </Button>
            </Box>

            {/* === COLUMNA DERECHA: BURBUJA NARANJA CON NÚMERO === */}
<Box
  sx={{
    position: "relative",
    width: { xs: 260, sm: 300, md: 340 },
    height: { xs: 260, sm: 300, md: 340 },
  }}
>
  <AnimatePresence mode="wait">
    <Box
      key={currentStat.label}
      component={motion.div}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      sx={{ position: "absolute", inset: 0 }}
    >
      {/* sombra del domo */}
      {/* <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: -40,
          width: "78%",
          height: "90%",
          bgcolor: "secondary.secondary",
          borderRadius: "70% 0 70% 70%",
        }}
      /> */}

      {/* domo principal */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "#C7431D",
          boxShadow: "10px 10px 0 rgba(0,0,0,0.18)",
          borderRadius: "70% 0 70% 70%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          pl: { xs: 6, md: 7 },
          pr: { xs: 4, md: 5 },
          color: "#FFFFFF",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "4rem", md: "5.6rem" },
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          <AnimatedNumber
            value={currentStat.value}
            suffix={currentStat.suffix}
          />
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            fontSize: 13,
            fontWeight: 800,
            textTransform: "uppercase",
            maxWidth: 260,
          }}
        >
          {currentStat.label}
        </Typography>
      </Box>

      {/* círculo blanco con flecha */}
      <Box
        sx={{
          position: "absolute",
          left: -16,
          top: "50%",
          transform: "translateY(-50%)",
          width: 36,
          height: 36,
          borderRadius: "50%",
          bgcolor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 0 4px #FFFFFF",
        }}
      >
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 800,
            color: "#A4341B",
          }}
        >
          →
        </Typography>
      </Box>
    </Box>
  </AnimatePresence>
</Box>

          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}

/* === Número animado que se actualiza cuando cambia value === */
function AnimatedNumber({ value, prefix = "", suffix = "", duration = 1.4 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [value, duration, count]);

  return (
    <span>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
