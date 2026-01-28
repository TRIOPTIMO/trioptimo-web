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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Process({mode}) {
  const steps = [
    {
      num: "01",
      title: "Análisis y Planificación",
      desc:
        "Entendemos tu idea, evaluamos su viabilidad y diseñamos un plan de proyecto sólido y financiable.",
    },
    {
      num: "02",
      title: "Optimización y Digitalización",
      desc:
        "Aplicamos ingeniería para mejorar tus procesos, digitalizar tareas y hacer tu operación más eficiente.",
    },
    {
      num: "03",
      title: "Captación de Fondos",
      desc:
        "Identificamos convocatorias, preparamos propuestas ganadoras y te conectamos con oportunidades de financiación.",
    },
    {
      num: "04",
      title: "Ejecución y Evaluación",
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
            <Typography variant="h2" fontWeight={800} sx={{ fontSize: { xs: "1.9rem", md: "3.4rem" }, }}>
              Cómo trabajamos
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1.5 }}>
              Nuestra metodología integral asegura que cada paso esté alineado
              con tus objetivos y maximice las oportunidades de financiación y
              sostenibilidad.
            </Typography>

            <Button
              href="#contacto"
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{ mt: 3 }}
            >
              Quiero optimizar mi gestión
            </Button>
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
        <Chip
          label={num}
          sx={(theme) => ({
            backgroundColor: `${theme.palette.secondary.main}`,
            borderRadius: 2,
            color:"white",
            fontWeight: 700,
          })}
          size="medium"
        />
        <Typography fontWeight={700}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
