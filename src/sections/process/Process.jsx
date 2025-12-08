import {
  Container,
  Box,
  Typography,
  Button,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Process({ mode }) {
  const steps = [
    {
      num: "1",
      title: "Análisis y Planificación",
      desc:
        "Entendemos tu idea, evaluamos su viabilidad y diseñamos un plan de proyecto sólido y financiable.",
    },
    {
      num: "2",
      title: "Optimización y Digitalización",
      desc:
        "Aplicamos ingeniería para mejorar tus procesos, digitalizar tareas y hacer tu operación más eficiente.",
    },
    {
      num: "3",
      title: "Captación de Fondos",
      desc:
        "Identificamos convocatorias, preparamos propuestas ganadoras y te conectamos con oportunidades de financiación.",
    },
    {
      num: "4",
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
      {/* === TÍTULO CENTRADO + PASTILLA DE INFO === */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          fontWeight={900}
          sx={(theme) => ({
            fontSize: { xs: "2.4rem", md: "4.8rem" },
            textTransform: "uppercase",
            letterSpacing: 2,
            color: theme.palette.primary.main,
          })}
        >
          Cómo trabajamos
        </Typography>

        {/* Pastilla violeta con texto + botón naranja */}
        <Box
          sx={(theme) => ({
            mt: 4,
            mx: "auto",
            maxWidth: 960,
            borderRadius: 999,
            background: theme.palette.primary.main,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            overflow: "hidden",
          })}
        >
          {/* Texto */}
          <Box
            sx={{
              flex: 1,
              px: { xs: 3, md: 5 },
              py: { xs: 3, md: 3 },
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontStyle: "italic",
                fontSize: { xs: 14, md: 16 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Te liberamos de la carga técnica y administrativa
              para que toda tu energía se centre en lo que
              de verdad importa:{" "}
              <Box component="span" sx={{ fontWeight: 800 }}>
                TU CAUSA.
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
{/* === SECCIÓN DE PASOS + TEXTO AL COSTADO (RESPONSIVE) === */}
<Stack
  direction={{ xs: "column", lg: "row" }}
  spacing={{ xs: 4, lg: 8 }}
  alignItems="flex-start"
  sx={{ mt: 6 }}
>

  {/* COLUMNA IZQUIERDA - PASOS (60% en desktop) */}
  <Box
    sx={{
      width: { xs: "100%", lg: "60%" },
    }}
  >
    <Stack spacing={2}>
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

  {/* COLUMNA DERECHA - TEXTO EXPLICATIVO (40% en desktop) */}
  <Box
    sx={{
      width: { xs: "100%", lg: "40%" },
      pt: { xs: 1, lg: 3 },
    }}
  >
    <Stack spacing={2} direction={"row"}>
       {/* Línea vertical como en el diseño */}
    <Box
      sx={(theme) => ({
        width: 10,
        height: {xs: "100px", md: "200px"},
        bgcolor: theme.palette.secondary.main,
        borderRadius: 2,
      })}
    />
    <Typography
      sx={{
        fontSize: {xs: 16, md: 24},
        lineHeight: 1.6,
        fontStyle: "italic",
      }}
    >
      Nuestra <Box component="span" sx={{ fontWeight: 800 }}>metodología integral </Box> 
      asegura que cada paso esté alineado con tus objetivos y maximice las oportunidades 
      de financiación y sostenibilidad.
    </Typography>
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
      elevation={0}
      sx={{
        backgroundColor: mode === "light" ? "grey.50" : "grey.900",
        boxShadow: "none",
        "&::before": { display: "none" },
        "&.Mui-expanded": { margin: 0 },
      }}
    >
      <AccordionSummary
        expandIcon={null}
        sx={{
          px: 0,
          py: 0.5,
          "& .MuiAccordionSummary-content": {
            m: 0,
          },
          "&.Mui-expanded": {
            minHeight: "unset",
          },
          "&.Mui-expanded .step-arrow": {
            transform: "rotate(180deg)",
          },
        }}
      >
        {/* HEADER - SOLO BORDE VIOLETA */}
        <Box
          sx={(theme) => ({
            width: "100%",
            display: "flex",
            alignItems: "center",
            borderRadius: "999px",
            height: "60px",
            border: `2px solid ${theme.palette.primary.main}`, // ← solo borde violeta
            bgcolor: mode === "light" ? "grey.50" : "grey.900",
            position: "relative",
          })}
        >
          {/* CÍRCULO NÚMERO POR FUERA DEL CONTENEDOR */}
          <Box
            sx={(theme) => ({
              position: "absolute",
              left: {xs: -14, md:  -25},               // → sobresale hacia afuera
              top: "50%",
              transform: "translateY(-50%)",
              width: {xs: 55, md:  65},
              height: {xs: 55, md:  65},
              borderRadius: "50%",
              bgcolor: theme.palette.primary.main,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FFFFFF",
              fontWeight: 800,
              fontSize: 36,
            })}
          >
            {num}
          </Box>


          {/* TÍTULO */}
          <Box sx={{ flex: 1, px: 2 }}>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: 14,
                letterSpacing: 0.5,
                ml: 4,
                textTransform: "uppercase",
              }}
            >
              {title}
            </Typography>
          </Box>

          {/* CÍRCULO FLECHA */}
          <Box
            className="step-arrow"
            sx={{
              position: "absolute",
              right:  {xs: -14, md:  -25},  
              width: {xs: 55, md:  65},
              height: {xs: 55, md:  65},
              borderRadius: "50%",
              color: "#FFFFFF",
              bgcolor: (theme) => theme.palette.primary.main,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              mr: 1,
              transition: "transform 200ms ease",
            }}
          >
            <Typography
              sx={{
                fontSize: 36,
                fontWeight: 800,
              }}
            >
              ↓
            </Typography>
          </Box>
        </Box>
      </AccordionSummary>

      {/* BODY NARANJA ALINEADO Y MISMO ANCHO */}
      <AccordionDetails sx={{ px: 0, pb: 0 }}>
        <Box
          sx={{
            width:  {xs:  "95%", md:   "100%"},                // mismo ancho que el header
            px: 3,
            py: 2,
            mt: -2,
            bgcolor: (theme) => theme.palette.secondary.main,           // naranja
            borderRadius: "0 0 24px 0",
            color: "#FFFFFF",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: 13.5,
              lineHeight: 1.6,
            }}
          >
            {desc}
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
