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

export default function Team() {
  const people = [
    {
      name: "Nahuel Deschuter",
      role: "Cofundador | Operaciones y Proyecto",
      quote:
        "Mi foco es la ejecución. Traduzco la visión en resultados concretos. Me apasiona la eficiencia operativa y la mejora continua, garantizando impacto medible y sostenible.",
      linkedin: "https://www.linkedin.com/in/nahuel-deschutter/",
      photo: "/deschu.jpeg", // 👈 ajustá el path real
    },
    {
      name: "Jano Centeno",
      role: "Cofundador | Crecimiento y Alianzas",
      quote:
        "Aseguro el crecimiento sostenible, forjo alianzas clave y diseño modelos para llevar nuestra ingeniería de impacto al mayor número de organizaciones.",
      linkedin: "https://www.linkedin.com/in/jano-centeno/",
      photo: "/jano.jpeg",
    },
    {
      name: "Ignacio Davanzo",
      role: "Cofundador | Tecnología y Sistemas",
      quote:
        "Soy la palanca tecnológica. Lidero la digitalización y automatización para decisiones inteligentes, con menos burocracia y más impacto.",
      linkedin: "https://www.linkedin.com/in/ignaciodavanzo/",
      photo: "/nacho.png",
    },
  ];

  return (
    <Box
      id="equipo"
      sx={{
        bgcolor: "grey.50",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6, maxWidth: 800, mx: "auto" }}>
          <Typography variant="h4" fontWeight={800} sx={{ fontSize: { xs: "1.9rem", md: "3.4rem" } }}>
            Nuestro Equipo
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
              <TeamCard {...person} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

function TeamCard({ name, role, quote, linkedin, photo }) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        border: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "grey.50"
      }}
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
        }}
      />

      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Nombre + LinkedIn */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box>
            <Typography fontWeight={700}>{name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {role}
            </Typography>
          </Box>
          <MLink
            href={linkedin}
            target="_blank"
            rel="noreferrer noopener"
            color="primary"
            underline="none"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              fontSize: "0.8rem",
              whiteSpace: "nowrap",
            }}
          >
            <LinkedInIcon fontSize="small" /> LinkedIn
          </MLink>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography
          variant="body2"
          fontStyle="italic"
          sx={{ flex: 1 }}
        >
          "{quote}"
        </Typography>
      </CardContent>
    </Card>
  );
}
