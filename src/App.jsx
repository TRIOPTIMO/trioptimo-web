import { useState } from "react";
import { motion } from "framer-motion";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Link as MLink,
  Alert,
  Divider,
  Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SendIcon from "@mui/icons-material/Send";
import StoriesCarousel from "./components/stories/StoriesCarousel";

// === THEME (paleta solicitada) ===
const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#5F215E" },
    secondary: { main: "#8C2315" },
    background: { default: "#FFFFFF" },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: [
      "Inter",
      "system-ui",
      "-apple-system",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
  },
});

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

export default function LandingTriOptimo() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("No se pudo enviar el formulario");
      setSent(true);
      form.reset();
    } catch (err) {
      setError(err.message || "Error desconocido");
    } finally {
      setSending(false);
    }
  }

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* NAVBAR */}
      <AppBar
        position="sticky"
        color="inherit"
        elevation={0}
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backdropFilter: "blur(8px)",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1200,
            mx: "auto",
            width: "100%",
            display: "flex",
            alignItems: "center", // 👈 asegura alineación vertical
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src="./public/icon.png" // 👉 tu ruta real del logo
              alt="TriOptimo Logo"
              sx={{
                width: 40,
                height: 40,
                objectFit: "contain",
                borderRadius: 2, // opcional, para mantener la estética redondeada
              }}
            />
            <Typography
              fontWeight={600}
              variant="h6"
              color="text.primary"
              sx={{ letterSpacing: 0.2 }}
            >
              TriOptimo
            </Typography>
          </Box>


          {/* Links */}
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {[
              { href: "#como", label: "Cómo trabajamos" },
              { href: "#filosofia", label: "Filosofía" },
              { href: "#equipo", label: "Equipo" },
              { href: "#historias", label: "Historias" },
            ].map((link) => (
              <Box
                key={link.href}
                component="a"
                href={link.href}
                sx={{
                  position: "relative",
                  color: "text.primary",
                  textDecoration: "none",
                  fontWeight: 500,
                  py: 0.5,
                  transition: "color 0.2s ease",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: 2,
                    bgcolor: "primary.main",
                    transition: "width 0.3s ease",
                  },
                  "&:hover": {
                    color: "primary.main",
                    "&::after": {
                      width: "100%",
                    },
                  },
                }}
              >
                {link.label}
              </Box>
            ))}

            <Button
              href="#contacto"
              variant="contained"
              color="primary"
              disableElevation
              sx={{ ml: 1 }}
            >
              Hablemos
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>


      {/* HERO */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        {/* ---- Fondos difuminados ---- */}
        {/* <Box sx={{ position: "absolute", inset: 0, zIndex: -1 }}>
      <Box
        sx={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 320,
          height: 320,
          filter: "blur(60px)",
          opacity: 0.2,
          bgcolor: "primary.main",
          borderRadius: "50%",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -120,
          left: -120,
          width: 320,
          height: 320,
          filter: "blur(60px)",
          opacity: 0.2,
          bgcolor: "secondary.main",
          borderRadius: "50%",
        }}
      />
    </Box> */}

        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
          {/* ---- Stack principal (antes era Grid container) ---- */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            alignItems="center"
          >
            {/* ---- Columna izquierda ---- */}
            <Box sx={{ flex: { md: "0 0 60%" } }}>
              <motion.div {...fadeUp}>
                <Typography variant="h2" component="h1" gutterBottom>
                  Convertimos ideas de impacto en{" "}
                  <Box component="span" color="primary.main">
                    proyectos sostenibles
                  </Box>
                  .
                </Typography>

                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ maxWidth: 720 }}
                >
                  Aplicamos ingeniería y optimización para que tu organización
                  transforme la realidad.
                </Typography>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mt: 4 }}
                >
                  <Button
                    href="#contacto"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Empieza tu proyecto
                  </Button>
                  <Button href="#como" variant="outlined" size="large">
                    Cómo trabajamos
                  </Button>
                </Stack>

                {/* ---- Frases con íconos ---- */}
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  useFlexGap
                  sx={(theme) => ({
                    mt: 4,
                    // gap real (no margins) para que el wrap sea limpio
                    gap: theme.spacing(2),
                  })}
                >
                  {[
                    "Tu misión es nuestro motor.",
                    "Tu impacto, nuestro objetivo.",
                    "Menos burocracia, más impacto.",
                  ].map((t) => (
                    <Stack
                      key={t}
                      direction="row"
                      spacing={1}
                      alignItems="flex-start"
                      sx={(theme) => ({
                        // 1 por fila en xs, 3 por fila >= sm (restando 2 gaps de la fila)
                        flexGrow: 0,
                        flexShrink: 0,
                        flexBasis: {
                          xs: "100%",
                          sm: `calc((100% - ${theme.spacing(2)} * 2) / 3)`,
                        },
                        minWidth: { xs: "100%", sm: 0 }, // evita desbordes raros
                      })}
                    >
                      <CheckCircleOutlineIcon
                        color="secondary"
                        sx={{ mt: "2px", flexShrink: 0 }}
                      />
                      <Typography variant="body2" sx={{ flex: 1, minWidth: 0 }}>
                        {t}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>


              </motion.div>
            </Box>

           {/* ---- Columna derecha (igual en desktop, mejor en mobile) ---- */}
<Box
  sx={{
    flex: { xs: "1 1 100%", md: "0 0 40%" }, // xs full width, md+ como estaba
    width: "100%",
    mt: { xs: 4, md: 0 },                    // solo mobile
  }}
>
  <motion.div {...fadeUp}>
    <Box sx={{ position: "relative" }}>
      <Box
        sx={(t) => ({
          position: "absolute",
          inset: 0,
          zIndex: -1,
          borderRadius: 3,
          background: `linear-gradient(45deg, ${t.palette.primary.main}22, ${t.palette.secondary.main}22)`,
          filter: { xs: "blur(10px)", md: "blur(16px)" }, // xs más suave, md+ como estaba
          pointerEvents: "none",
        })}
      />
      <Card variant="outlined" sx={{ borderRadius: 3 }}>
        <CardContent
          sx={{
            px: { xs: 2.5, md: 3 }, // xs un pelín más compacto; md+ como estaba (efecto mínimo)
            py: { xs: 3, md: 3 },   // mantiene desktop como antes
          }}
        >
          <Stack
            direction="row"
            flexWrap="wrap"
            spacing={2}
            useFlexGap
            justifyContent={{ xs: "center", md: "space-between" }} // md+ igual que antes
          >
            {[
              { kpi: "+30%", label: "Eficiencia operativa" },
              { kpi: "4x", label: "Tasa de financiación" },
              { kpi: ">95%", label: "Automatización de tareas" },
              { kpi: "0→1", label: "De idea a ejecución" },
            ].map((s) => (
              <Box
                key={s.label}
                sx={(theme) => ({
                  // SOLO en mobile forzamos 2 columnas; en md+ dejamos que fluya como antes
                  flexBasis: { xs: `calc((100% - ${theme.spacing(2)}) / 2)`, md: "auto" },
                  flexGrow: 0,
                  flexShrink: 0,
                  textAlign: { xs: "center", md: "inherit" },
                })}
              >
                <Stat kpi={s.kpi} label={s.label} />
              </Box>
            ))}
          </Stack>

          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 2, display: "block", textAlign: { xs: "center", md: "inherit" } }}
          >
            * Valores de ejemplo para ilustrar resultados potenciales.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  </motion.div>
</Box>

          </Stack>
        </Container>
      </Box>

      {/* VALUE PROPS */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack
          direction="row"
          flexWrap="wrap"
          useFlexGap
          sx={(theme) => ({
            gap: theme.spacing(3),
            justifyContent: "space-between",
          })}
        >
          {[
            {
              title: "Financiación e Innovación a tu alcance",
              desc: "Te ayudamos a conseguir fondos y los transformamos en mejoras operativas concretas mediante ingeniería y digitalización.",
            },
            {
              title: "Maximización de tus Recursos",
              desc: "Implementamos soluciones técnicas claras y a medida para profesionalizar tu gestión, optimizando cada recurso disponible.",
            },
            {
              title: "Acompañamiento de Punta a Punta",
              desc: "Desde la idea a la ejecución, captación de fondos y medición de resultados.",
            },
          ].map((v) => (
            <Box
              key={v.title}
              sx={(theme) => ({
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: {
                  xs: "100%",
                  sm: `calc((100% - ${theme.spacing(3)}) / 2)`,
                  md: `calc((100% - ${theme.spacing(3)} * 2) / 3)`,
                },
                minWidth: { xs: "100%", sm: 0 },
              })}
            >
              <ValueCard title={v.title} desc={v.desc} />
            </Box>
          ))}
        </Stack>
      </Container>


      {/* PROCESS */}
      <Box
        id="como"
        sx={{ bgcolor: "grey.50", borderTop: 1, borderBottom: 1, borderColor: "divider" }}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Box maxWidth={720}>
            <Typography variant="h4" fontWeight={800}>
              Cómo trabajamos: un proceso claro para un impacto medible
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1.5 }}>
              Nuestra metodología integral asegura que cada paso esté alineado con tus objetivos y maximice
              las oportunidades de financiación y sostenibilidad.
            </Typography>
          </Box>

          <Stack
            direction="row"
            flexWrap="wrap"
            useFlexGap
            sx={(theme) => ({
              mt: 3,
              gap: theme.spacing(3),
              justifyContent: "space-between",
            })}
          >
            {[
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
            ].map((s) => (
              <Box
                key={s.num}
                sx={(theme) => ({
                  flexGrow: 0,
                  flexShrink: 0,
                  flexBasis: {
                    xs: "100%", // 1 columna
                    sm: `calc((100% - ${theme.spacing(3)}) / 2)`, // 2 columnas
                    md: `calc((100% - ${theme.spacing(3)} * 3) / 4)`, // 4 columnas
                  },
                  minWidth: { xs: "100%", sm: 0 },
                })}
              >
                <Step num={s.num} title={s.title} desc={s.desc} />
              </Box>
            ))}
          </Stack>

          <Button
            href="#contacto"
            variant="contained"
            color="secondary"
            endIcon={<ArrowForwardIcon />}
            sx={{ mt: 3 }}
          >
            Quiero optimizar mi gestión
          </Button>
        </Container>
      </Box>

      {/* PHILOSOPHY */}
      <Container id="filosofia" maxWidth="lg" sx={{ py: 8 }}>
        <Stack
          direction="row"
          flexWrap="wrap"
          useFlexGap
          alignItems="flex-start"
          sx={(theme) => ({
            gap: theme.spacing(6),
          })}
        >
          {/* ---- Columna izquierda ---- */}
          <Box
            sx={(theme) => ({
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: {
                xs: "100%", // 1 columna en móvil
                md: `calc((100% - ${theme.spacing(6)}) / 2)`, // 2 columnas iguales
              },
              minWidth: { xs: "100%", sm: 0 },
            })}
          >
            <Typography variant="h4" fontWeight={800}>
              Nuestra Filosofía
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 2 }}>
              Somos un aliado estratégico que cree en el poder de la colaboración para construir un futuro
              donde ninguna organización social se quede atrás.
            </Typography>

            <Stack spacing={1.5} sx={{ mt: 3 }}>
              <Bullet>
                Compromiso con el impacto social: <b>Su misión es nuestro motor.</b>
              </Bullet>
              <Bullet>
                Accesibilidad y cercanía: <b>Soluciones claras, asequibles y a medida.</b>
              </Bullet>
              <Bullet>
                Transparencia y confianza: <b>Ética y comunicación honesta.</b>
              </Bullet>
              <Bullet>
                Innovación práctica: <b>De lo complejo a lo fácil de usar.</b>
              </Bullet>
              <Bullet>
                Colaboración y empoderamiento: <b>Compartimos conocimiento para tu autonomía.</b>
              </Bullet>
            </Stack>
          </Box>

          {/* ---- Columna derecha ---- */}
          <Box
            sx={(theme) => ({
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: {
                xs: "100%",
                md: `calc((100% - ${theme.spacing(6)}) / 2)`,
              },
              minWidth: { xs: "100%", sm: 0 },
            })}
          >
            <Stack spacing={3}>
              <InfoCard
                title="Misión"
                desc="Empoderamos a las organizaciones del tercer sector para que conviertan ideas de alto impacto en proyectos viables y sostenibles. Liberamos su potencial eliminando la carga administrativa y técnica."
              />
              <InfoCard
                title="Visión"
                desc="Ser el aliado estratégico de referencia del tercer sector, facilitando el acceso a la financiación y fortaleciendo capacidades operativas mediante soluciones innovadoras de ingeniería."
              />
            </Stack>
          </Box>
        </Stack>
      </Container>


      {/* TEAM */}
      <Box
        id="equipo"
        sx={{
          bgcolor: "grey.50",
          borderTop: 1,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography variant="h4" fontWeight={800}>
            Un equipo comprometido con tu causa
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 800 }}>
            Somos profesionales de la ingeniería y la gestión, apasionados por aplicar
            nuestro conocimiento para generar un impacto social real.
          </Typography>

          <Stack
            direction="row"
            flexWrap="wrap"
            useFlexGap
            sx={(theme) => ({
              mt: 3,
              gap: theme.spacing(3),
              justifyContent: "space-between",
            })}
          >
            {[
              {
                name: "Nahuel Deschuter",
                role: "Cofundador | Operaciones y Proyecto",
                quote:
                  "Mi foco es la ejecución. Traduzco la visión en resultados concretos. Me apasiona la eficiencia operativa y la mejora continua, garantizando impacto medible y sostenible.",
                linkedin: "https://www.linkedin.com/in/nahuel-deschutter/",
              },
              {
                name: "Jano Centeno",
                role: "Cofundador | Crecimiento y Alianzas",
                quote:
                  "Aseguro el crecimiento sostenible, forjo alianzas clave y diseño modelos para llevar nuestra ingeniería de impacto al mayor número de organizaciones.",
                linkedin: "https://www.linkedin.com/in/jano-centeno/",
              },
              {
                name: "Ignacio Davanzo",
                role: "Cofundador | Tecnología y Sistemas",
                quote:
                  "Soy la palanca tecnológica. Lidero la digitalización y automatización para decisiones inteligentes, con menos burocracia y más impacto.",
                linkedin: "https://www.linkedin.com/in/ignaciodavanzo/",
              },
            ].map((person) => (
              <Box
                key={person.name}
                sx={(theme) => ({
                  flexGrow: 0,
                  flexShrink: 0,
                  flexBasis: {
                    xs: "100%", // 1 columna en móvil
                    sm: `calc((100% - ${theme.spacing(3)}) / 2)`, // 2 columnas en tablets
                    md: `calc((100% - ${theme.spacing(3)} * 2) / 3)`, // 3 columnas en desktop
                  },
                  minWidth: { xs: "100%", sm: 0 },
                })}
              >
                <TeamCard
                  name={person.name}
                  role={person.role}
                  quote={person.quote}
                  linkedin={person.linkedin}
                />
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>


      {/* STORIES */}
      <Container id="historias" maxWidth="lg" sx={{ py: 8 }}>
        <Stack
          direction="row"
          flexWrap="wrap"
          useFlexGap
          alignItems="center"
          sx={(theme) => ({
            gap: theme.spacing(4),
          })}
        >
          {/* ---- Columna izquierda ---- */}
          <Box
            sx={(theme) => ({
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: {
                xs: "100%", // móvil
                md: `calc((100% - ${theme.spacing(4)}) * 0.58)`, // ~7/12 aprox
              },
              minWidth: { xs: "100%", sm: 0 },
            })}
          >
            <Typography variant="h4" fontWeight={800}>
              Historias de Impacto
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1.5 }}>
              El éxito de nuestros clientes es nuestra mejor carta de presentación.
            </Typography>

            <StoriesCarousel items={stories} intervalMs={6000} />
          </Box>

          {/* ---- Columna derecha ---- */}
          <Box
            sx={(theme) => ({
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: {
                xs: "100%",
                md: `calc((100% - ${theme.spacing(4)}) * 0.42)`, // ~5/12 aprox
              },
              minWidth: { xs: "100%", sm: 0 },
            })}
          >
            <InfoCard
              title="¿Listo para multiplicar tu impacto?"
              desc="Da el primer paso hacia un proyecto financiable, sostenible y con resultados medibles. Estamos aquí para ayudarte a hacerlo realidad."
            />
            <Button
              href="#contacto"
              variant="contained"
              sx={{ mt: 2 }}
              endIcon={<ArrowForwardIcon />}
            >
              Hablemos
            </Button>
          </Box>
        </Stack>
      </Container>


      {/* CONTACT */}
      <Box
        id="contacto"
        sx={{ bgcolor: "primary.main", color: "#fff" }}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          {/* Layout principal en horizontal */}
          <Stack
            direction="row"
            flexWrap="wrap"
            useFlexGap
            alignItems="flex-start"
            sx={(theme) => ({
              gap: theme.spacing(6),
            })}
          >
            {/* ---- Columna izquierda ---- */}
            <Box
              sx={(theme) => ({
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: {
                  xs: "100%",
                  md: `calc((100% - ${theme.spacing(6)}) * 0.42)`, // ~5/12 aprox
                },
                minWidth: { xs: "100%", sm: 0 },
              })}
            >
              <Typography variant="h4" fontWeight={800}>
                Hablemos de tu Misión
              </Typography>
              <Typography sx={{ mt: 1.5, color: "#fff" }}>
                Cuéntanos en qué punto estás y qué quieres lograr. Te responderemos
                con un plan claro y accionable.
              </Typography>

              <Stack spacing={1.5} sx={{ mt: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <MailOutlineIcon />
                  <Typography>contacto@trioptimo.org</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <PhoneAndroidIcon />
                  <Typography>+34 600 000 000</Typography>
                </Stack>
              </Stack>
            </Box>

            {/* ---- Columna derecha (formulario) ---- */}
            <Box
              sx={(theme) => ({
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: {
                  xs: "100%",
                  md: `calc((100% - ${theme.spacing(6)}) * 0.58)`, // ~7/12 aprox
                },
                minWidth: { xs: "100%", sm: 0 },
              })}
            >
              <Card sx={{ borderRadius: 3, p: 3 }}>
                <CardContent>
                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Stack
                      direction="row"
                      flexWrap="wrap"
                      useFlexGap
                      sx={(theme) => ({
                        gap: theme.spacing(2),
                      })}
                    >
                      {/* Campo helper */}
                      {[
                        { label: "Nombre Completo", name: "nombre", required: true },
                        { label: "Email de Contacto", name: "email", type: "email", required: true },
                        { label: "Teléfono (opcional)", name: "telefono" },
                        { label: "Nombre de la Organización / Fundación", name: "organizacion" },
                        { label: "Página Web (opcional)", name: "web" },
                        { label: "Tu Rol en la Organización", name: "rol" },
                        { label: "Sector Principal de Impacto", name: "sector" },
                        { label: "Tipo de Asesoría que buscas", name: "asesoria" },
                      ].map((f) => (
                        <Box
                          key={f.name}
                          sx={(theme) => ({
                            flexBasis: {
                              xs: "100%",
                              md: f.name === "sector" || f.name === "asesoria" ? "100%" : `calc((100% - ${theme.spacing(2)}) / 2)`,
                            },
                            minWidth: { xs: "100%", sm: 0 },
                          })}
                        >
                          <Typography
                            variant="body2"
                            fontWeight={600}
                            sx={{ mb: 0.5, color: "text.primary" }}
                          >
                            {f.label}
                            {f.required && <span style={{ color: "#d32f2f" }}> *</span>}
                          </Typography>

                          <TextField
                            name={f.name}
                            type={f.type || "text"}
                            required={f.required}
                            fullWidth
                            variant="outlined"
                            InputProps={{
                              sx: {
                                borderRadius: 2,
                                bgcolor: "background.paper",
                                "& fieldset": {
                                  borderColor: "grey.300",
                                },
                                "&:hover fieldset": {
                                  borderColor: "primary.main",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "primary.main",
                                  boxShadow: (theme) => `0 0 0 3px ${theme.palette.primary.main}22`,
                                },
                              },
                            }}
                          />
                        </Box>
                      ))}

                      {/* Campo multilinea */}
                      <Box sx={{ flexBasis: "100%" }}>
                        <Typography variant="body2" fontWeight={600}>
                          Cuéntanos más sobre tu proyecto o reto (esencial)
                        </Typography>
                        <TextField
                          name="detalle"
                          required
                          fullWidth
                          multiline
                          minRows={4}
                          variant="outlined"
                          sx={{
                            mt: 1,
                            "& .MuiOutlinedInput-root": {
                              borderRadius: 2,
                              bgcolor: "background.paper",
                              "& fieldset": { borderColor: "grey.300" },
                              "&:hover fieldset": { borderColor: "primary.main" },
                              "&.Mui-focused fieldset": {
                                borderColor: "primary.main",
                                boxShadow: (theme) => `0 0 0 3px ${theme.palette.primary.main}22`,
                              },
                            },
                          }}
                        />
                      </Box>

                      {/* Botón enviar */}
                      <Box sx={{ flexBasis: "100%" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          size="large"
                          endIcon={<SendIcon />}
                          disabled={sending}
                        >
                          {sending ? "Enviando..." : "Enviar Solicitud"}
                        </Button>
                      </Box>

                      {/* Feedback */}
                      {sent && (
                        <Box sx={{ flexBasis: "100%" }}>
                          <Alert severity="success">¡Gracias! Tu solicitud fue enviada.</Alert>
                        </Box>
                      )}
                      {error && (
                        <Box sx={{ flexBasis: "100%" }}>
                          <Alert severity="error">{error}</Alert>
                        </Box>
                      )}
                    </Stack>
                  </Box>
                </CardContent>
              </Card>

            </Box>
          </Stack>
        </Container>
      </Box>


      {/* FOOTER */}
      <Box component="footer" sx={{ borderTop: 1, borderColor: "divider" }}>
        <Container sx={{ py: 3, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 2 }}>
          <Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} TriOptimo. Todos los derechos reservados.</Typography>
          <Typography variant="body2" fontWeight={600}>Ingeniería con propósito</Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

// ==== COMPONENTES AUXILIARES ====
function Stat({ kpi, label }) {
  return (
    <Card variant="outlined" sx={{ height: "100%", borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h5" color="primary" fontWeight={800}>{kpi}</Typography>
        <Typography variant="body2" color="text.secondary">{label}</Typography>
      </CardContent>
    </Card>
  );
}

function ValueCard({ title, desc }) {
  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardContent>
        <Typography fontWeight={700}>{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>{desc}</Typography>
      </CardContent>
    </Card>
  );
}

function Step({ num, title, desc }) {
  return (
    <Card
      variant="outlined"
      sx={{
        position: "relative",
        height: "100%",
        overflow: "visible", // 👈 permite que el chip salga del borde
      }}
    >
      <CardContent sx={{ position: "relative", pt: 4 }}>
        <Chip
          label={num}
          color="secondary"
          sx={{
            position: "absolute",
            top: -16, // un poco más arriba para destacar
            left: -12,
            borderRadius: 2,
            zIndex: 2,
            boxShadow: (theme) => theme.shadows[2],
          }}
        />
        <Typography fontWeight={700} sx={{ mt: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
          {desc}
        </Typography>
      </CardContent>
    </Card>

  );
}

function InfoCard({ title, desc }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography fontWeight={700}>{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>{desc}</Typography>
      </CardContent>
    </Card>
  );
}

function Bullet({ children }) {
  return (
    <Stack direction="row" spacing={1.5} alignItems="flex-start">
      <CheckCircleOutlineIcon color="primary" />
      <Typography color="text.secondary">{children}</Typography>
    </Stack>
  );
}

function TeamCard({ name, role, quote, linkedin }) {
  return (
    <Card variant="outlined" sx={{ height: "100%" }}>
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 2 }}>
          <Box>
            <Typography fontWeight={700}>{name}</Typography>
            <Typography variant="body2" color="text.secondary">{role}</Typography>
          </Box>
          <MLink href={linkedin} target="_blank" rel="noreferrer noopener" color="primary" underline="hover" sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
            <LinkedInIcon fontSize="small" /> LinkedIn
          </MLink>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Typography variant="body2" fontStyle="italic">"{quote}"</Typography>
      </CardContent>
    </Card>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <TextField label={label} id={name} name={name} type={type} required={required} fullWidth />
  );
}
