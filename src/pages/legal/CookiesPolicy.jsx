import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Divider,
  Link as MUILink,
  Stack,
  Typography,
  Paper,
} from "@mui/material";

export default function PoliticaDeCookiesPage() {
  const lastUpdate = "13/02/2026"; // cámbialo cuando actualices la política

  // Ajusta estos datos a tu proyecto
  const site = {
    domain: "trioptimo.com",
    ownerName: "Ignacio Davanzo",
    contactEmail: "info@trioptimo.com",
    gaProvider: "Google LLC",
    gaService: "Google Analytics",
    gaCookieDuration: "entre la sesión y hasta 2 años",
  };

  return (
    <Box sx={{ py: { xs: 4, sm: 6 } }}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: 3 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
            Política de Cookies
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Última actualización: {lastUpdate}
          </Typography>
        </Stack>

        <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
          <Stack spacing={3}>
            <Typography variant="body1">
              Esta Política de Cookies explica qué son las cookies, qué tipos se
              utilizan en <strong>{site.domain}</strong> y cómo puedes
              gestionarlas.
            </Typography>

            <Divider />

            <Section title="1. ¿Qué son las cookies?">
              <Typography variant="body1">
                Las cookies son pequeños archivos de texto que un sitio web
                puede almacenar en tu dispositivo (ordenador, móvil o tablet)
                para recordar información sobre tu visita (por ejemplo,
                preferencias, estadísticas de uso o configuración técnica).
              </Typography>
            </Section>

            <Section title="2. ¿Qué tipos de cookies existen?">
              <Typography variant="body1">
                De forma general, las cookies pueden clasificarse por:
              </Typography>
              <Bullets
                items={[
                  "Según la entidad que las gestione: cookies propias o de terceros.",
                  "Según el tiempo de permanencia: de sesión o persistentes.",
                  "Según su finalidad: técnicas (necesarias), de personalización, analíticas, publicitarias, etc.",
                ]}
              />
            </Section>

            <Section title="3. Cookies utilizadas en este sitio">
              <Typography variant="body1">
                <strong>Este sitio utiliza cookies analíticas</strong> (no
                esenciales) para medir y analizar el uso del sitio, con el fin
                de mejorar la experiencia de usuario y el rendimiento.
              </Typography>

              <Typography variant="body1" sx={{ mt: 1 }}>
                Herramienta: <strong>{site.gaService}</strong>
                <br />
                Proveedor: <strong>{site.gaProvider}</strong>
                <br />
                Finalidad: <strong>análisis estadístico</strong> (páginas
                visitadas, duración de visitas, tipo de dispositivo, etc.)
                <br />
                Duración aproximada: <strong>{site.gaCookieDuration}</strong>
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Nota: La información recogida por estas cookies es, por lo
                general, agregada o seudonimizada según la configuración del
                proveedor. En cualquier caso, puedes rechazar su instalación.
              </Typography>
            </Section>

            <Section title="4. Base legal">
              <Typography variant="body1">
                La base legal para el uso de cookies analíticas (no esenciales)
                es el <strong>consentimiento del usuario</strong>, solicitado a
                través del banner de cookies antes de su instalación.
              </Typography>
            </Section>

            <Section title="5. Cómo gestionar, retirar o cambiar el consentimiento">
              <Typography variant="body1">
                Puedes bloquear o eliminar cookies desde la configuración de tu
                navegador. Ten en cuenta que, si deshabilitas ciertas cookies,
                algunas funcionalidades podrían no funcionar correctamente.
              </Typography>

              <Typography variant="body1" sx={{ mt: 1 }}>
                Además, si aceptaste las cookies analíticas y quieres retirar tu
                consentimiento, puedes:
              </Typography>

              <Bullets
                items={[
                  "Eliminar las cookies desde tu navegador.",
                  "Borrar el almacenamiento local del sitio (localStorage) desde las herramientas del navegador.",
                  "Volver a cargar el sitio: se te mostrará el banner si no hay preferencia guardada.",
                ]}
              />

              <Typography variant="body2" color="text.secondary">
                (Si implementas un botón “Configurar cookies”, podrás cambiar tu
                elección fácilmente desde el propio sitio.)
              </Typography>
            </Section>

            <Section title="6. Más información sobre el tratamiento de datos">
              <Typography variant="body1">
                Para más información sobre cómo tratamos los datos personales,
                consulta nuestra{" "}
                <MUILink
                  component={RouterLink}
                  to="/politica-de-privacidad"
                  underline="hover"
                  sx={(theme) => ({
                    color: "text.primary",
                    "&:hover": { color: theme.palette.secondary.main },
                  })}
                >
                  Política de Privacidad
                </MUILink>
                .
              </Typography>
            </Section>

            <Section title="7. Identificación del responsable">
              <Typography variant="body1">
                Responsable: <strong>{site.ownerName}</strong>
                <br />
                Email de contacto: <strong>{site.contactEmail}</strong>
              </Typography>
            </Section>

            <Divider />

            <Typography variant="body2" color="text.secondary">
              Esta Política de Cookies puede actualizarse para reflejar cambios
              en el uso de cookies o cambios normativos. La versión vigente
              estará siempre disponible en esta página.
            </Typography>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

function Section({ title, children }) {
  return (
    <Box>
      <Typography variant="h6" component="h2" sx={{ fontWeight: 700, mb: 1 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function Bullets({ items }) {
  return (
    <Box component="ul" sx={{ m: 0, pl: 3 }}>
      {items.map((t, i) => (
        <Box component="li" key={i} sx={{ mb: 0.75 }}>
          <Typography variant="body1">{t}</Typography>
        </Box>
      ))}
    </Box>
  );
}
