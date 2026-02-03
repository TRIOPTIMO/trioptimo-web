import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Phylosophy() {
  const reasons = [
    "Compromiso con el impacto social: tu misión también es la nuestra.",
    "Claridad y cercanía: hablamos simple y caminamos a tu ritmo.",
    "Transparencia y confianza: trabajamos con ética y comunicación honesta.",
    "Innovación práctica: transformamos procesos complejos en soluciones fáciles de usar.",
    "Colaboración y empoderamiento: compartimos conocimientos para que ganes autonomía.",
  ];

  return (
    <Container
      id="filosofia"
      maxWidth="lg"
      sx={{
        py: 8,
        position: "relative",
      }}
    >
      <Box
        component="img"
        src="/logo-grey.png" 
        alt="TriOptimo Logo"
        sx={{
          position: "absolute",
          bottom: 10,
          left: -500,
          width: 580,          // tamaño del watermark
          height: "auto",
          opacity: 0.06,  
          zIndex: -1,      
          pointerEvents: "none",
          userSelect: "none",
          display: { xs: "none", md: "block" },
        }}
      />
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
        md: `calc((100% - ${theme.spacing(6)}) / 2)`,
      },
      minWidth: { xs: "100%", sm: 0 },

      // 👇 Sticky solo en desktop
      position: { xs: "static", md: "sticky" },
      top: { xs: "auto", md: theme.spacing(12) }, // ajusta el offset (12*8=96px)
      alignSelf: "flex-start",

      // opcional: evita que el bloque se estire raro
      height: "fit-content",
    })}
  >
          <Typography variant="h4" fontWeight={800} sx={{ fontSize: { xs: "1.9rem", md: "3.4rem" }, textAlign: {xs: "center", md: "left"}  }}>
            Nuestra filosofía
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 2, textAlign: {xs: "center", md: "left"}  }}>
            Sabemos lo que implica sostener un proyecto social: la pasión, la entrega, las horas sin fin, y tambièn la sensaciòn de que a veces faltan recursos o apoyo.
            Queremos acompañarte, liberar tu carga técnica y ayudarte a enfocarte en lo escencial: <strong>seguir generando impacto real</strong>.
          </Typography>
        </Box>

        {/* ---- Columna derecha: cards ---- */}
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
              title="Nuestro compromiso contigo"
              desc="Nos sumamos a tu causa como un aliado que entiende tus desafíos. Transformamos tus ideas en proyectos sostenibles y te acompañamos en cada paso, para que tu equipo pueda concentrarse en lo que mejor sabe hacer: crear oportunidades y transformar vidas."
            />
            <InfoCard
              title="El cambio que soñamos"
              desc="Queremos un ecosistema social más fuerte, donde cada organización tenga acceso a las herramientas, la financiación y el conocimiento que necesita para crecer sin perder su esencia. Soñamos con un sector donde el trabajo colaborativo sea la norma y nadie quede atrás por falta de apoyo."
            />
            <ReasonsCard reasons={reasons} />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

function InfoCard({ title, desc }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" color="primary" fontWeight={700}>{title}</Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 1.5 }}
        >
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

function ReasonsCard({ reasons }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h5" color="primary" fontWeight={700}>¿Por qué elegirnos?</Typography>
        <Stack spacing={1.5} sx={{ mt: 1.5 }}>
          {reasons.map((text) => (
            <Bullet key={text}>{text}</Bullet>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

function Bullet({ children }) {
  return (
    <Stack direction="row" spacing={1.5} alignItems="flex-start">
      <KeyboardArrowRightIcon color="secondary" sx={{ mt: "2px" }} /> 
      <Typography variant="body1" color="text.secondary">
        {children}
      </Typography>
    </Stack>
  );
}
