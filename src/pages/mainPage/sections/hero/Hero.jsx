import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CTAButton from "../../../../sections/common/CTAButton";

export default function Hero({ mode }) {

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <Box id="hero" sx={{ position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div {...fadeUp}>
          <Stack
            spacing={6}
            alignItems="center"
          >
            <Box
              sx={{
                maxWidth: { xs: 800, md: 1200 },
                textAlign: "center",
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 900,
                  fontSize: {
                    xs: "2.4rem",
                    sm: "3rem",
                    md: "3.4rem",
                  },
                  lineHeight: 1.2,
                }}
              >
                Convertimos ideas de{" "}
                <Box
                  component="span"
                  sx={(theme) => ({
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  })}
                >
                  impacto
                </Box>
                <Box component="span" display="block">
                  en proyectos{" "}
                  <Box
                    component="span"
                    sx={(theme) => ({
                      background: `linear-gradient(90deg, ${theme.palette.secondary.main}, ${theme.palette.tertiary.main})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      display: "inline-block",
                    })}
                  >
                    sostenibles
                  </Box>
                </Box>
              </Typography>


              <Typography
                variant="h6"
                component="p"
                color="text.secondary"
                sx={{ maxWidth: 720, mx: "auto", mt: 8 }}
              >
                Aplicamos ingeniería y optimización para que tu organización transforme la realidad.
              </Typography>


              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 4, justifyContent: "center" }}
              >
                <CTAButton />

                <Button
                  href="#como"
                  variant="outlined"
                  size="large"
                  endIcon={<KeyboardArrowRightIcon />}
                  sx={{
                    border: 0,
                    borderRadius: 999,
                    color: (theme) => theme.palette.text.primary,
                    "&:hover": {
                      color: (theme) => theme.palette.tertiary.main,
                      backgroundColor: "transparent",
                    },
                    "&:focus-visible": {
                      outline: "2px solid",
                      outlineOffset: "2px",
                    },
                  }}
                >
                  Cómo trabajamos
                </Button>
              </Stack>
            </Box>

            <Box sx={{ width: "100%", maxWidth: 900 }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{
                  justifyContent: "center",
                  alignItems: { xs: "stretch", sm: "center" },
                }}
              >
                {[
                  {
                    value: 30,
                    prefix: "+",
                    suffix: "%",
                    label: "Mejora en eficiencia operativa",
                  },
                  {
                    value: 4,
                    prefix: "",
                    suffix: "x",
                    label: "Mayor tasa de éxito en financiación",
                  },
                  {
                    value: 95,
                    prefix: ">",
                    suffix: "%",
                    label: "Procesos clave automatizados",
                  },
                ].map((item) => (
                  <Box
                    key={item.label}
                    sx={(theme) => ({
                      flex: 1,
                      px: 3,
                      py: 1.5,
                      textAlign: "left",
                    })}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        lineHeight: 1.1,
                        fontSize: "2.1rem",
                      }}
                    >
                      <AnimatedNumber
                        value={item.value}
                        prefix={item.prefix}
                        suffix={item.suffix}
                      />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 0.5 }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}

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

