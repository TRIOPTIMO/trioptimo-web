import * as React from "react";
import {
  Box,
  Container,
  Divider,
  Link as MUILink,
  Stack,
  Typography,
  Paper,
} from "@mui/material";

export default function PoliticaDePrivacidadPage() {
  const lastUpdate = "13/02/2026"; // cámbialo cuando actualices la política

  // Completa estos datos
  const company = {
    name: "Jano Neuen Baudino Centeno",
    nif: "[NIF/CIF (si aplica)]",
    address: "Sevilla, España",
    email: "info@trioptimo.com",
    phone: "+34 663 47 70 89",
    website: "https://trioptimo.com/",
  };

  return (
    <Box sx={{ py: { xs: 4, sm: 6 } }}>
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ mb: 3 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
            Política de Privacidad
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Última actualización: {lastUpdate}
          </Typography>
        </Stack>

        <Paper variant="outlined" sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2 }}>
          <Stack spacing={3}>
            <Typography variant="body1">
              En cumplimiento del Reglamento (UE) 2016/679 (Reglamento General de
              Protección de Datos – GDPR), te informamos sobre el tratamiento de
              tus datos personales a través del sitio web{" "}
              <MUILink href={company.website} target="_blank" rel="noreferrer"
                sx={(theme) => {
                  return {
                    color: "text.primary", "&:hover": { color: theme.palette.secondary.main }
                  };
                }}>
                {company.website}
              </MUILink>
              .
            </Typography>

            <Divider />

            <Section title="1. Responsable del tratamiento">
              <Typography variant="body1">
                <strong>Titular:</strong> {company.name}
                <br />
                {/* <strong>NIF/CIF:</strong> {company.nif}
                <br /> */}
                <strong>Dirección:</strong> {company.address}
                <br />
                <strong>Correo electrónico:</strong> {company.email}
                <br />
                {company.phone?.startsWith("[") ? (
                  <>
                    <strong>Teléfono:</strong> {company.phone}
                  </>
                ) : (
                  company.phone && (
                    <>
                      <strong>Teléfono:</strong> {company.phone}
                    </>
                  )
                )}
              </Typography>
            </Section>

            <Section title="2. Datos personales que recopilamos">
              <Typography variant="body1">
                Podemos recopilar los siguientes datos, según el uso que hagas
                del sitio:
              </Typography>
              <Bullets
                items={[
                  "Nombre y apellidos (si los introduces en formularios)",
                  "Dirección de correo electrónico",
                  "Teléfono (si se solicita en formularios)",
                  "Mensajes enviados mediante formularios de contacto",
                  "Dirección IP",
                  "Datos de navegación (cookies, identificadores, navegador, páginas visitadas, etc.)",
                ]}
              />
            </Section>

            <Section title="3. Finalidad del tratamiento">
              <Typography variant="body1">
                Tratamos tus datos personales con las siguientes finalidades:
              </Typography>
              <Bullets
                items={[
                  "Responder consultas enviadas mediante formularios o correo electrónico",
                  "Prestar los servicios solicitados y gestionar la relación con el usuario",
                  "Gestionar comunicaciones comerciales (solo si das tu consentimiento)",
                  "Analizar el uso del sitio web y mejorar la experiencia del usuario",
                  "Garantizar la seguridad del sitio y prevenir fraudes o usos indebidos",
                  "Cumplir obligaciones legales aplicables",
                ]}
              />
            </Section>

            <Section title="4. Base legal para el tratamiento">
              <Typography variant="body1">
                La base legal del tratamiento es:
              </Typography>
              <Bullets
                items={[
                  "Tu consentimiento (por ejemplo, al enviar formularios o aceptar cookies no esenciales)",
                  "La ejecución de un contrato o la aplicación de medidas precontractuales (si solicitas un servicio)",
                  "Interés legítimo del Responsable (seguridad, mejora del sitio y atención al usuario)",
                  "Cumplimiento de obligaciones legales",
                ]}
              />
            </Section>

            <Section title="5. Conservación de los datos">
              <Typography variant="body1">
                Conservaremos tus datos únicamente durante el tiempo necesario
                para cumplir la finalidad para la que se recabaron y para
                determinar posibles responsabilidades derivadas del tratamiento.
              </Typography>
              <Bullets
                items={[
                  "Consultas/contacto: durante el tiempo necesario para atender y cerrar la solicitud",
                  "Relación contractual: mientras dure la relación y, posteriormente, durante los plazos legales aplicables",
                  "Analítica/cookies: según la duración indicada en la Política de Cookies y/o configuración del proveedor",
                ]}
              />
            </Section>

            <Section title="6. Destinatarios de los datos y encargados del tratamiento">
              <Typography variant="body1">
                No cedemos tus datos a terceros, salvo obligación legal.
                <br />
                No obstante, determinados proveedores pueden tratar datos en
                nuestro nombre (por ejemplo, hosting, correo, analítica),
                actuando como <strong>encargados del tratamiento</strong> bajo
                contratos y garantías adecuadas.
              </Typography>
            </Section>

            <Section title="7. Transferencias internacionales">
              <Typography variant="body1">
                Si utilizamos proveedores que traten datos fuera del Espacio
                Económico Europeo (por ejemplo, servicios de analítica o correo),
                las transferencias se realizarán con garantías adecuadas (p. ej.,
                Cláusulas Contractuales Tipo u otros mecanismos permitidos por el
                GDPR).
              </Typography>
            </Section>

            <Section title="8. Derechos del usuario">
              <Typography variant="body1">
                Puedes ejercer los derechos de:
              </Typography>
              <Bullets
                items={[
                  "Acceso a tus datos",
                  "Rectificación de datos inexactos",
                  "Supresión (derecho al olvido)",
                  "Limitación del tratamiento",
                  "Oposición al tratamiento",
                  "Portabilidad de tus datos",
                  "Retirar el consentimiento en cualquier momento (sin afectar la licitud previa)",
                ]}
              />
              <Typography variant="body1" sx={{ mt: 1 }}>
                Para ejercerlos, escríbenos a{" "}
                <strong>{company.email}</strong> indicando el
                derecho que deseas ejercer e identificándote.
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                También tienes derecho a presentar una reclamación ante la
                autoridad de control competente en materia de protección de
                datos.
              </Typography>
            </Section>

            <Section title="9. Medidas de seguridad">
              <Typography variant="body1">
                Aplicamos medidas técnicas y organizativas razonables para
                proteger tus datos personales y evitar accesos no autorizados,
                pérdidas, alteraciones o divulgación indebida.
              </Typography>
            </Section>

            {/* <Section title="10. Cookies">
              <Typography variant="body1">
                Este sitio utiliza cookies propias y/o de terceros para fines
                técnicos y analíticos. Puedes consultar información detallada en
                nuestra{" "}
                <MUILink href="/politica-de-cookies" sx={(theme) => {
                  return {
                    color: "text.primary", "&:hover": { color: theme.palette.secondary.main }
                  };
                }}>
                  Política de Cookies
                </MUILink>
                .
              </Typography>
            </Section> */}

            <Section title="10. Cookies">
              <Typography variant="body1">
                Actualmente este sitio web no utiliza cookies no esenciales.
                En caso de incorporar herramientas de análisis o cookies de terceros
                (por ejemplo, para estadísticas de uso), se solicitará previamente el
                consentimiento del usuario y se actualizará esta política en consecuencia.
              </Typography>
            </Section>


            <Section title="11. Cambios en esta política">
              <Typography variant="body1">
                Nos reservamos el derecho a modificar esta Política de Privacidad
                para adaptarla a novedades legislativas o cambios en el sitio.
                La versión vigente estará siempre disponible en esta página.
              </Typography>
            </Section>

            <Section title="12. Decisiones automatizadas y perfiles">
              <Typography>
                Este sitio web no realiza decisiones automatizadas ni elaboración de perfiles
                que produzcan efectos jurídicos sobre el usuario.
              </Typography>
            </Section>

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
