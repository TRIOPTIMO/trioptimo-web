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

export default function AvisoLegalPage() {
  const lastUpdate = "13/02/2026";

  // 🔹 COMPLETAR
  const owner = {
    name: "Ignacio Davanzo",
    address: "Malaga, España",
    email: "info@trioptimo.com",
    website: "https://trioptimo.com/",
  };

  return (
    <Box sx={{ py: { xs: 4, sm: 6 } }}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: 3 }}>
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            Aviso Legal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Última actualización: {lastUpdate}
          </Typography>
        </Stack>

        <Paper variant="outlined" sx={{ p: 3, borderRadius: 2 }}>
          <Stack spacing={3}>

            <Section title="1. Datos identificativos">
              <Typography>
                En cumplimiento de la Ley 34/2002 (LSSI-CE), se informa que el
                presente sitio web{" "}
                <MUILink href={owner.website} target="_blank"  sx={(theme) => {
                  return {
                    color: "text.primary", "&:hover": { color: theme.palette.secondary.main }
                  };
                }}>
                  {owner.website}
                </MUILink>{" "}
                es titularidad de:
                <br /><br />
                <strong>Nombre:</strong> {owner.name} <br />
                <strong>Ubicación:</strong> {owner.address} <br />
                <strong>Email:</strong> {owner.email}
              </Typography>
            </Section>

            <Divider />

            <Section title="2. Objeto">
              <Typography>
                El presente sitio web tiene como finalidad ofrecer información
                sobre los servicios y actividades del titular.
              </Typography>
            </Section>

            <Section title="3. Condiciones de uso">
              <Typography>
                El acceso y uso del sitio web atribuye la condición de usuario
                e implica la aceptación plena de las condiciones aquí
                establecidas.
              </Typography>
            </Section>

            <Section title="4. Propiedad intelectual">
              <Typography>
                Todos los contenidos del sitio web (textos, imágenes,
                logotipos, diseño, código fuente) son propiedad del titular o
                cuentan con licencia de uso, quedando prohibida su reproducción
                sin autorización expresa.
              </Typography>
            </Section>

            <Section title="5. Responsabilidad">
              <Typography>
                El titular no se hace responsable del uso indebido del
                contenido del sitio web ni de los daños que pudieran derivarse
                del acceso o uso de la información publicada.
              </Typography>
            </Section>

            <Section title="6. Enlaces externos">
              <Typography>
                Este sitio puede contener enlaces a páginas de terceros, sobre
                las cuales el titular no tiene control ni asume responsabilidad.
              </Typography>
            </Section>

            <Section title="7. Legislación aplicable">
              <Typography>
                El presente Aviso Legal se rige por la legislación española.
              </Typography>
            </Section>

            <Divider />

            <Typography variant="body2" color="text.secondary">
              Para cualquier consulta relacionada con este Aviso Legal puedes
              escribir a <strong>{owner.email}</strong>.
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
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
