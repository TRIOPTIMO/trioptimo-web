import { Box, Container, Typography, Link, Divider, Stack } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('footer');

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'colors.secondary', //'colors.darkBlue',
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
                xs: 20,
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



/**
 * Utilizamos cookies necesarias para el correcto funcionamiento del sitio web. Además, utilizamos cookies opcionales para optimizar tu experiencia, cookies estadísticas para análisis y cookies de marketing para ofrecerte información y publicidad personalizadas. Puedes aceptarlas, rechazarlas o configurarlas según tus preferencias. Para más información, consulta nuestra Política de Cookies.
 * 
 * Configuración de cookies Rechazar todo  Aceptar todas las cookies
 * 
 * Logotipo de la empresaCentro de preferencia de la privacidadCuando visita cualquier sitio web, este podría almacenar o recuperar información en su navegador, principalmente mediante el uso de cookies. Esta información puede ser sobre usted, sus preferencias o su dispositivo, y se utiliza principalmente para que el sitio funcione correctamente. Por lo general, la información no lo identifica directamente, pero puede brindarle una experiencia web más personalizada. Dado que respetamos su derecho a la privacidad, puede optar por no permitir ciertos tipos de cookies. Haga clic en los encabezados de cada categoría para obtener más información y cambiar nuestra configuración predeterminada. Sin embargo, bloquear algunos tipos de cookies puede afectar su experiencia en el sitio y los servicios que podemos ofrecer.
 * 
 * Gestionar preferencias de consentimiento
Cookies de rendimiento: Estas cookies nos permiten contar las visitas y las fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio web. Nos ayudan a saber qué páginas son las más y menos populares y a ver cuántas personas visitan el sitio. Toda la información que recopilan estas cookies es agregada y, por lo tanto, anónima. Si no permite estas cookies, no sabremos cuándo ha visitado nuestro sitio web y no podremos monitorizar su rendimiento.

Cookies estrictamente necesarias: Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. Por lo general, solo se configuran para responder a acciones que usted realiza, como una solicitud de servicios, como ajustar sus preferencias de privacidad, iniciar sesión o completar formularios. Puede configurar su navegador para bloquear o alertar sobre estas cookies, pero algunas partes del sitio web no funcionarán. Estas cookies no guardan ninguna información personal identificable.


 */