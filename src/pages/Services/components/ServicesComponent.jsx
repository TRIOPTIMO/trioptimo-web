import { Stack, Box, Typography } from '@mui/material';

export default function ServicesComponent({ items = [] }) {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={2}
      sx={{
        mt: 6,
        width: "80%",
        height: "50vh",
        backgroundColor: "#f7fbff",
        borderRadius: 3,
        position: "relative",
        overflow: "visible",
        p: 4,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Texto */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          fontWeight={700}
          color="#374a69"
          sx={{ mb: 10 }}
        >
          ¿Qué ofrecemos?
        </Typography>
{/* 
        <Typography
          variant="subtitle1"
          color="#374a69"
          sx={{ mb: 2 }}
        >
          Una breve descripción más pequeña que explica el servicio en pocas líneas.
        </Typography> */}

        <Typography
          variant="body1"
          color="#374a69"
          sx={{ textAlign: 'justify', width: "70%", fontSize: 25 }}
        >
          Impulsamos tu industria optimizando procesos, digitalizando sin riesgos y transformando datos en decisiones inteligentes, mientras formamos a tu equipo para sostener el cambio.
        </Typography>
      </Box>

      <Box
        sx={{
           position: { md: "absolute", xs: "static" },
          right: { md: "-40%", xs: "auto" },
          top: { md: "50%", xs: "auto" },
          transform: { md: "translateY(-50%)", xs: "none" },
          width: { xs: "100%", md: 500 },
          height: { xs: 200, md: 400 },
          borderRadius: 1,
          background: 'linear-gradient(135deg,rgb(159, 226, 248),rgb(179, 175, 207))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0, 191, 255, 0.3)',
        }}
      >
        {/* Imagen encima */}
        <Box
          component="img"
          src="./images/services.webp"
          alt="Service"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 3,
            zIndex: 10,
          }}
        />
      </Box>
    </Stack>
  );
}