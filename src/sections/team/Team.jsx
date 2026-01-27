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
import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";

export default function Team({ mode }) {
  const people = [
    {
      name: "Nahuel Deschuter",
      role: "Cofundador | Operaciones y Proyecto",
      quote:
        "Mi foco es la ejecución. Traduzco la visión en resultados concretos. Me apasiona la eficiencia operativa y la mejora continua, garantizando impacto medible y sostenible.",
      linkedin: "https://www.linkedin.com/in/nahuel-deschutter/",
      photo: "/deschu.jpg"
    },
    {
      name: "Jano Centeno",
      role: "Cofundador | Crecimiento y Alianzas",
      quote:
        "Aseguro el crecimiento sostenible, forjo alianzas clave y diseño modelos para llevar nuestra ingeniería de impacto al mayor número de organizaciones.",
      linkedin: "https://www.linkedin.com/in/jano-centeno/",
      photo: "/jano.jpeg"
    },
    {
      name: "Ignacio Davanzo",
      role: "Cofundador | Tecnología y Sistemas",
      quote:
        "Soy la palanca tecnológica. Lidero la digitalización y automatización para decisiones inteligentes, con menos burocracia y más impacto.",
      linkedin: "https://www.linkedin.com/in/ignaciodavanzo/",
      photo: "/nacho.png"
    },
  ];

  return (
    <Box
      id="equipo"
      sx={{
        bgcolor: mode === "light" ? "grey.50" : "grey.900",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6, maxWidth: 800, mx: "auto" }}>
          <Typography variant="h2" fontWeight={900} sx={{ 
            fontSize: { xs: "2.4rem", md: "4.8rem" },
            textTransform: "uppercase",
            letterSpacing: 2, 
            color: mode === "light" ? "primary.main" : "primary.secondary" }}>
            Nuestro Equipo
          </Typography>

          {/* <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 800 }}>
            Somos profesionales de la ingeniería y la gestión, apasionados por aplicar
            nuestro conocimiento para generar un impacto social real.
          </Typography> */}
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
                  md: `calc((95% - ${theme.spacing(3)} * 2) / 3)`, // 3 columnas en desktop
                },
                minWidth: { xs: "100%", sm: 0 },
              })}
            >
              <TeamCard {...person}  mode={mode}  />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

function TeamCard({ name, role, quote, linkedin, photo, mode }) {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
      }}
    >
      {/* CONTENEDOR PRINCIPAL CON FORMA DE DOMO + BLOQUE */}
      <Box
        sx={{
          position: "relative",
          borderRadius: "0 140px 120px 0",
          overflow: "visible",
          boxShadow: "10px 10px 0 rgba(0,0,0,0.18)",
        }}
      >
        {/* Parte superior gris (domo) */}
        <Box
        component="img" src={photo} alt={name}
          sx={{
            width: "100%", height: 220, objectFit: "cover",
            borderRadius: "120px 120px 0 0", // domo
            
          }}
        />

        {/* Parte inferior violeta (texto) */}
        <Box
          sx={{
            mt: -1, // une visualmente ambas partes
            px: 3,
            py: 3,
            color: "#FFFFFF",
            backgroundColor: mode === "light" ? "primary.main" : "primary.secondary",
            borderRadius: "0 0 120px 10px", // borde inferior redondeado grande
            minHeight: 230,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Nombre + Rol */}
          <Box>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 900,
                letterSpacing: 1.3,
                textTransform: "uppercase",
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontSize: 13,
                opacity: 0.9,
                mt: 0.5,
              }}
            >
              {role}
            </Typography>

            {/* Quote */}
            <Typography
              variant="body2"
              sx={{
                mt: 2,
                fontStyle: "italic",
                lineHeight: 1.6,
              }}
            >
              "{quote}"
            </Typography>
          </Box>

          {/* LinkedIn abajo a la derecha */}
          <Box
            sx={{
              mt: 2.5,
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <MLink
              href={linkedin}
              target="_blank"
              rel="noreferrer noopener"
              color="inherit"
              underline="none"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                fontSize: 12,
                opacity: 0.9,
                "&:hover": { opacity: 1 },
              }}
            >
              <LinkedInIcon fontSize="small" /> LinkedIn
            </MLink>
          </Box>
        </Box>

        {/* Círculo blanco con flecha en la unión de gris y violeta */}
        <Box
          sx={{
            position: "absolute",
            left: -18,
            top: 140,
            width: 36,
            height: 36,
            borderRadius: "50%",
            bgcolor: mode === "light" ? "grey.50" : "grey.900",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: mode === "light" ? "0px 0px 0px 3px grey.50" : "0px 0px 0px 3px grey.900" ,
          }}
        >
          <KeyboardArrowRightRounded sx={{
              fontSize: 30,
              color: "secondary.main",
            }}/>
        </Box>
      </Box>
    </Box>
  );
}

