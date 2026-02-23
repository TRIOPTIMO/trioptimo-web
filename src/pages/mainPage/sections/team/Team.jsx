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
import { useTranslation } from "react-i18next";

export default function Team({ mode }) {
  const { t } = useTranslation();

  const people = [
    {
      key: "nahuel",
      linkedin: "https://www.linkedin.com/in/nahuel-deschutter/",
      photo: "/deschu.jpg",
    },
    {
      key: "jano",
      linkedin: "https://www.linkedin.com/in/jano-centeno/",
      photo: "/jano.jpeg",
    },
    {
      key: "ignacio",
      linkedin: "https://www.linkedin.com/in/ignaciodavanzo/",
      photo: "/nacho.png",
    },
  ].map((p) => ({
    ...p,
    name: t(`team.people.${p.key}.name`),
    role: t(`team.people.${p.key}.role`),
    quote: t(`team.people.${p.key}.quote`),
  }));

  return (
    <Box id="equipo">
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6, maxWidth: 800, mx: "auto" }}>
          <Typography variant="h4" fontWeight={800} sx={{ fontSize: { xs: "1.9rem", md: "3.4rem" } }}>
            {t("team.title")}
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 1.5, maxWidth: 800 }}>
            {t("team.subtitle")}
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
              key={person.key}
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
              <TeamCard {...person} mode={mode} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

function TeamCard({ name, role, quote, linkedin, photo, mode }) {
  const { t } = useTranslation();
  const bw = 2;

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
        alt={t("team.aria.photoAlt", { name })}
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
          aria-label={t("team.aria.linkedin", { name })}
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
          <LinkedInIcon fontSize="small" /> {t("team.linkedinLabel")}
        </MLink>
      </CardContent>
    </Card>
  );
}