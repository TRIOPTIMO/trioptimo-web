import { Box, Container, Typography, Link, Divider, Stack } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('footer');

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'colors.darkBlue',
        color: 'text.primary',
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Masonry
          columns={{ xs: 1, sm: 2, md: 3 }}
          spacing={2}
        >
          {/* Bloque 1 */}
          {/* <Box>
            
          </Box> */}

          {/* Bloque 2 */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              {t('title1')}
            </Typography>
            <Link href="#" underline="hover" color="text.primary">
              {t('privacy')}
            </Link>
            <Link href="#" underline="hover" color="text.primary">
              {t('terms')}
            </Link>
          </Box>

          {/* Bloque 3 (opcional mensaje extra) */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              {t('title2')}
            </Typography>
            <Link href="#" underline="hover" color="text.primary">
              {t('telContact')}
            </Link>
            <Link href="#" underline="hover" color="text.primary">
              {t('mailContact')}
            </Link>
          </Box>
        </Masonry>

        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Stack display={"flex"} flexDirection={"row"} justifyContent={"space-between"}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            {t('copyright', { year: new Date().getFullYear() })}
          </Typography>

          <Box
            component="img"
            src="/images/trioptimo.webp"
            alt="logo"
            sx={{
              width: {
                xs: "120px",
                sm: "150px",
                md: "180px",
              },
              height: "auto",
              maxHeight: {
                xs: 40,
                sm: 50,
                md: 50,
              },
              mb: 0, // 👈 ELIMINAMOS EL MARGIN EN MOBILE
            }}
          />
        </Stack>

      </Container>
    </Box>
  );
}
