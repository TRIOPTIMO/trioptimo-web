import { Stack, Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';


export default function ServicesComponent() {
  const { t } = useTranslation('services');

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={4}
      sx={{
        mt: 6,
        width: { xs: "100%", md: "80%" },
        minHeight: { xs: "auto", md: "50vh" },
        backgroundColor: "rgba(252, 163, 17, 0.1)",
        borderRadius: 3,
        position: "relative",
        overflow: "visible",
        p: { xs: 2, md: 4 },
        alignItems: "center",
        justifyContent: "space-between",
        mx: "auto",
      }}
    >
      {/* Texto */}
      <Box
        sx={{
          flex: 1,
          width: { xs: "100%", md: "60%" },
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          color="colors.darkBlue"
          sx={{
            mb: { xs: 3, md: 5 },
            fontSize: { xs: 28, md: 40 },
          }}
        >
          {t('title')}
        </Typography>

        <Typography
          variant="body1"
          color="colors.darkBlue"
          sx={{
            textAlign: 'justify',
            width: { xs: "100%", md: "70%" },
            fontSize: { xs: 16, md: 20 },
          }}
        >
          {t('description')}
        </Typography>

        <Button
          component={ScrollLink}
          smooth={true}
          duration={500}
          offset={-80} // opcional, si tenés header fijo
          spy={true}
          to="contact"
          variant="contained"
          sx={{
            mt: { xs: 3, md: 5 },
            // background: 'linear-gradient(90deg, #00bfff, #6a5acd)',
            backgroundColor: "transparent",
            color: 'colors.orange',
            fontWeight: 'bold',
            borderRadius: 3,
            px: 4,
            py: 1.5,
            boxShadow: 0,
            '&:hover': {
              boxShadow: 0,
            },
          }}
        >
          {t('ctaButton')}
        </Button>
      </Box>

      {/* Imagen */}
      <Box
        sx={{
          position: { md: "absolute", xs: "static" },
          right: { md: "-30%", xs: "auto" },
          top: { md: "50%", xs: "auto" },
          transform: { md: "translateY(-50%)", xs: "none" },
          width: { xs: "100%", sm: 300, md: 500 },
          height: { xs: 200, sm: 300, md: 400 },
          borderRadius: 2,
          background: 'linear-gradient(135deg, rgba(159, 226, 248, 1), rgba(179, 175, 207, 1))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0, 191, 255, 0.3)',
          mx: { xs: "auto", md: 0 },
          mt: { xs: 4, md: 0 },
        }}
      >
        <Box
          component="img"
          src="./images/services.webp"
          alt="Service"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 2,
            zIndex: 10,
          }}
        />
      </Box>
    </Stack>
  );
}
