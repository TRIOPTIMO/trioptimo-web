import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CTAButton from "../common/CTAButton";

export default function Process({ mode }) {
  const steps = [
    {
      num: "01",
      title: "Análisis y planificación",
      desc:
        "Entendemos tu idea, evaluamos su viabilidad y diseñamos un plan de proyecto sólido y financiable.",
    },
    {
      num: "02",
      title: "Optimización y digitalización",
      desc:
        "Aplicamos ingeniería para mejorar tus procesos, digitalizar tareas y hacer tu operación más eficiente.",
    },
    {
      num: "03",
      title: "Captación de fondos",
      desc:
        "Identificamos convocatorias, preparamos propuestas ganadoras y te conectamos con oportunidades de financiación.",
    },
    {
      num: "04",
      title: "Ejecución y evaluación",
      desc:
        "Te acompañamos en la implementación y medimos el impacto para asegurar resultados sostenibles.",
    },
  ];

  return (
    <Box
      id="como"
      sx={{
        bgcolor: mode === "light" ? "grey.50" : "grey.900",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          alignItems="flex-start"
        >
          {/* === Columna izquierda: título, texto, CTA === */}
          <Box
            sx={{
              flexBasis: { xs: "100%", md: "40%" },
              flexShrink: 0,
              maxWidth: { md: 480 },
            }}
          >
            <Typography variant="h2" fontWeight={800} sx={{ fontSize: { xs: "1.9rem", md: "3.4rem" }, textAlign: { xs: "center", md: "left" } }}>
              Cómo trabajamos
            </Typography>
            <Typography color="text.secondary" sx={{ my: 1.5, textAlign: { xs: "center", md: "left" } }}>
              Nuestra metodología integral asegura que cada paso esté alineado
              con tus objetivos y maximice las oportunidades de financiación y
              sostenibilidad.
            </Typography>

            <CTAButton />
          </Box>

          {/* === Columna derecha: acordeón de pasos === */}
          <Box
            sx={{
              flexBasis: { xs: "100%", md: "60%" },
              width: "100%",
            }}
          >
            <Stack spacing={1.5}>
              {steps.map((step, index) => (
                <StepAccordion
                  key={step.num}
                  num={step.num}
                  title={step.title}
                  desc={step.desc}
                  defaultExpanded={index === 0}
                  mode={mode}
                />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function StepAccordion({ num, title, desc, defaultExpanded = false, mode }) {
  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      disableGutters
      square={false}
      elevation={0}
      sx={(theme) => ({
        backgroundColor: mode === "light" ? "grey.50" : "grey.900",
        borderRadius: 3,
        "&::before": {
          display: "none",
        },
        "&.Mui-expanded": {
          margin: 0,
        },
      })}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          px: 2.5,
          py: 1.5,
          "& .MuiAccordionSummary-content": {
            alignItems: "center",
            gap: 2,
          },
        }}
      >
        <Typography fontWeight={700} sx={(theme) => ({
          color: "default",
          backgroundColor: "transparent",
          fontWeight: 700,
          ".Mui-expanded &": { color: "secondary.main" }
        })}>{num}
        </Typography>
        <Typography fontWeight={700} sx={{
          "&:hover": {
            color: "grey.700",
          },
        }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 9.5, pb: 2.5, pt: 0 }}>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
