import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Link as MLink,
  Divider,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Team({ mode }) {

  const people = [
    {
      name: "Nahuel Deschuter",
      role: "Cofundador | Operaciones y Proyecto",
      quote:
        "Mi foco es la ejecución. Traduzco la visión de nuestros proyectos en resultados concretos. Me apaciona la eficiencia operativa y la mejora continua, garantizando que cada iniciativa tenga un impacto medible y sostenible.",
      linkedin: "https://www.linkedin.com/in/nahuel-deschutter/",
      photo: "/deschu.jpg"
    },
    {
      name: "Jano Centeno",
      role: "Cofundador | Crecimiento y Alianzas",
      quote:
        "Mi trabajo es asegurar el crecimiento sostenible, forjando las alianzas clave y diseñando los modelos que nos permiten llevar nuestra ingeniería de impacto al mayor número de organizaciones posibles.",
      linkedin: "https://www.linkedin.com/in/jano-centeno/",
      photo: "/jano.jpeg"
    },
    {
      name: "Ignacio Davanzo",
      role: "Cofundador | Tecnología y Sistemas",
      quote:
        "Soy la palanca tecnológica. Lidero la digitalización y automatización de procesos para que TriOptimo y nuestros aliados tomen decisiones inteligentes y basadas en datos. Menos burocracia, más impacto.",
      linkedin: "https://www.linkedin.com/in/ignaciodavanzo/",
      photo: "/nacho.png"
    },
  ];

  return (
    <Box
      id="equipo"
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6, maxWidth: 800, mx: "auto" }}>
          <Typography variant="h4" fontWeight={800} sx={{ fontSize: { xs: "1.9rem", md: "3.4rem" } }}>
            Nuestro equipo
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 800 }}>
            Somos profesionales de la ingeniería y la gestión, apasionados por aplicar
            nuestro conocimiento para generar un impacto social real.
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
          {people.map((person) => (
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
              <TeamCard {...person} mode={mode} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

function TeamCard({ name, role, quote, linkedin, photo, mode }) {
  const bw = 2

  return (
    <Card
      sx={(theme) => ({
        height: "100%",
        borderRadius: 1,
        overflow: "hidden",
        transition: "transform .25s ease, box-shadow .25s ease",
        "&:hover": {
          boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
          transform: "translateY(-4px)",
          border: `${bw}px solid transparent`,
          background:
            `linear-gradient(${theme.palette.background.paper}, ${theme.palette.background.paper}) padding-box,` +
            `linear-gradient(90deg, #9139D2, #0104FE, #00dd93) border-box`,
        },
      })}
    >
      {/* Foto */}
      <Box
        component="img"
        src={photo}
        alt={name}
        sx={{
          width: "100%",
          height: 220,
          objectFit: "cover",
          display: "block",
        }}
      />

      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <Box>
            <Typography fontWeight={700}>{name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {role}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body2" fontStyle="italic" sx={{ flex: 1 }}>
          "{quote}"
        </Typography>

        <MLink
          href={linkedin}
          target="_blank"
          rel="noreferrer noopener"
          color="text.primary"
          underline="none"
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            whiteSpace: "nowrap",
            mt: 2,
            "&:hover": {
              color: mode === "light" ? "tertiary.main" : "secondary.main",
            },
          }}
        >
          <LinkedInIcon fontSize="small" /> LinkedIn
        </MLink>
      </CardContent>
    </Card>
  )
}

