import { Box, Container, Typography, Stack, Link, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('footer');

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#050812',
        color: 'text.primary',
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={4}
        >
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
             {t('copyright', { year: new Date().getFullYear() })}
          </Typography>

          <Stack direction="row" spacing={3}>
            <Link href="#" underline="hover" color="text.primary">
              {t('privacy')}
            </Link>
            <Link href="#" underline="hover" color="text.primary">
              {t('terms')}
            </Link>
            <Link href="/contact" underline="hover" color="text.primary">
              {t('contact')}
            </Link>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* <Typography variant="body2" align="center" sx={{ opacity: 0.5 }}>
          Desarrollado con ♥ por tu equipo de tecnología
        </Typography> */}
      </Container>
    </Box>
  );
}
