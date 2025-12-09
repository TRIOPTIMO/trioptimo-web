import { useState } from "react";

import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Alert,
  IconButton,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";

export default function Contact({ mode }) {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch(
        "https://trioptimo-web-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!res.ok) throw new Error("No se pudo enviar el formulario");
      setSent(true);
      form.reset();
    } catch (err) {
      setError(err.message || "Error desconocido");
    } finally {
      setSending(false);
    }
  }

  return (
    <Box
      id="contacto"
      sx={{
        color: "text.primary",
        py: { xs: 6, md: 8 },
        
        bgcolor: mode === "light" ? "grey.50" : "grey.900",
      }}
    >
      <Container maxWidth="lg">
        {/* Layout principal */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5, md: 6 }}
          alignItems={{ xs: "center", md: "flex-start" }} // centrado en mobile
        >
          {/* ---- Columna izquierda ---- */}
          <Box
            sx={(theme) => ({
              flexBasis: { xs: "100%", md: "45%" },
              pr: { xs: 0, md: 4 },
              borderRight: {
                xs: "none",
                md: `4px solid ${theme.palette.primary.main}`,
              },
              textAlign: { xs: "center", md: "left" }, // textos centrados en mobile
            })}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                textTransform: "uppercase",
                fontSize: { xs: "2rem", md: "3.7rem" },
                lineHeight: 1.1,
                color: mode === "light" ? "primary.main" : "secondary.main", // corregido primary.secondary
              }}
            >
              Cuéntanos
              <br />
              tu proyecto
            </Typography>

            <Stack spacing={1.8} sx={{ mt: 4 }}>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                justifyContent={{ xs: "center", md: "flex-start" }} // centrado en mobile
              >
                <MailOutlineIcon color="primary" />
                <Typography>info@trioptimo.com</Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                justifyContent={{ xs: "center", md: "flex-start" }} // centrado en mobile
              >
                <PhoneAndroidIcon color="primary" />
                <Typography>+34 663 47 70 89</Typography>
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent={{ xs: "center", md: "flex-start" }} // centrado en mobile
                sx={{ mt: 1 }}
              >
                <IconButton
                  size="small"
                  href="https://www.instagram.com/trioptimo?igsh=OHV5MWhlaXh6NG14"
                  target="_blank"
                  sx={{
                    bgcolor: "secondary.main",
                    color: "#fff",
                    "&:hover": { bgcolor: "secondary.main" },
                  }}
                >
                  <InstagramIcon fontSize="medium" />
                </IconButton>
                <IconButton
                  size="small"
                  href="https://www.linkedin.com/company/trioptimo"
                  target="_blank"
                  sx={{
                    bgcolor: "secondary.main",
                    color: "#fff",
                    "&:hover": { bgcolor: "secondary.main" },
                  }}
                >
                  <LinkedInIcon fontSize="medium" />
                </IconButton>
              </Stack>
            </Stack>
          </Box>

          {/* ---- Columna derecha (texto + formulario) ---- */}
          <Box
            sx={{
              flexBasis: { xs: "100%", md: "55%" },
              width: "100%",
            }}
          >
            {/* Título sobre el formulario */}
            <Box
              sx={{
                mb: 2.5,
                textAlign: { xs: "center", md: "left" }, // centrado en mobile
              }}
            >
              <Typography
                sx={{
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "secondary.main",
                  fontSize: 36,
                }}
              >
                Hablemos
              </Typography>
              <Typography
                sx={{
                  mt: 0.5,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  fontSize: 25,
                }}
              >
                ¿Cuál es tu misión?
              </Typography>
              <Typography
                sx={{
                  mt: 0.5,
                  fontSize: 20,
                  maxWidth: 560,
                  mx: { xs: "auto", md: 0 }, // centrado y ancho controlado en mobile
                }}
              >
                Cuéntanos en qué punto estás y qué quieres lograr. Te
                responderemos con un plan claro, accionable y alineado a tus
                objetivos.
              </Typography>
            </Box>

            {/* Formulario tipo tarjeta violeta */}
            <Card
              sx={{
                borderRadius: 4,
                bgcolor: mode === "light" ? "primary.main" : "primary.secondary", // corregido primary.secondary
                color: "#fff",
                boxShadow: "10px 10px 0 rgba(0,0,0,0.18)",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 3.5 } }}>
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    useFlexGap
                    sx={(theme) => ({
                      gap: theme.spacing(2),
                    })}
                  >
                    {[
                      {
                        label: "Nombre Completo",
                        name: "nombre",
                        required: true,
                      },
                      {
                        label: "Email de contacto",
                        name: "email",
                        type: "email",
                        required: true,
                      },
                      {
                        label: "Motivo",
                        name: "subject",
                        required: true,
                      },
                      {
                        label: "Página Web (opcional)",
                        name: "web",
                      },
                    ].map((f) => (
                      <Box
                        key={f.name}
                        sx={(theme) => ({
                          flexBasis: {
                            xs: "100%",
                            md: `calc((100% - ${theme.spacing(2)}) / 2)`,
                          },
                        })}
                      >
                        <Typography
                          variant="caption"
                          sx={{
                            mb: 0.5,
                            fontWeight: 600,
                            textTransform: "none",
                          }}
                        >
                          {f.label}
                          {f.required && (
                            <Box
                              component="span"
                              sx={{ color: "#ffd1d1", ml: 0.2 }}
                            >
                              *
                            </Box>
                          )}
                        </Typography>

                        <TextField
                          name={f.name}
                          type={f.type || "text"}
                          required={f.required}
                          fullWidth
                          variant="outlined"
                          InputProps={{
                            sx: {
                              borderRadius: 999,
                              bgcolor: "#FFFFFF",
                              fontSize: 14,
                              "& fieldset": {
                                borderColor: "transparent",
                              },
                              "&:hover fieldset": {
                                borderColor: "transparent",
                              },
                              "&.Mui-focused fieldset": {
                                borderColor: "transparent",
                                boxShadow: (theme) =>
                                  `0 0 0 3px ${theme.palette.secondary.main}44`,
                              },
                            },
                          }}
                        />
                      </Box>
                    ))}

                    {/* Campo multilinea */}
                    <Box sx={{ flexBasis: "100%" }}>
                      <Typography
                        variant="caption"
                        sx={{ fontWeight: 600 }}
                      >
                        Cuéntanos más sobre tu proyecto o reto (esencial)
                      </Typography>
                      <TextField
                        name="detalle"
                        required
                        fullWidth
                        multiline
                        minRows={4}
                        variant="outlined"
                        sx={{
                          mt: 0.8,
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 3,
                            bgcolor: "#FFFFFF",
                            fontSize: 14,
                            "& fieldset": { borderColor: "transparent" },
                            "&:hover fieldset": { borderColor: "transparent" },
                            "&.Mui-focused fieldset": {
                              borderColor: "transparent",
                              boxShadow: (theme) =>
                                `0 0 0 3px ${theme.palette.secondary.main}44`,
                            },
                          },
                        }}
                      />
                    </Box>

                    {/* Botón enviar */}
                    <Box
                      sx={{
                        flexBasis: "100%",
                        display: "flex",
                        justifyContent: { xs: "center", md: "flex-end" }, // centrado en mobile
                        mt: 1.5,
                      }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        endIcon={<SendIcon />}
                        disabled={sending}
                        sx={{
                          borderRadius: 999,
                          px: 3.2,
                          py: 1,
                          textTransform: "uppercase",
                          fontWeight: 800,
                          fontSize: 13,
                          letterSpacing: 0.8,
                          boxShadow: "0 10px 0 rgba(0,0,0,0.18)",
                        }}
                      >
                        {sending ? "Enviando..." : "Enviar solicitud"}
                      </Button>
                    </Box>

                    {/* Feedback */}
                    {sent && (
                      <Box sx={{ flexBasis: "100%" }}>
                        <Alert severity="success" sx={{ mt: 1 }}>
                          ¡Gracias! Tu solicitud fue enviada.
                        </Alert>
                      </Box>
                    )}
                    {error && (
                      <Box sx={{ flexBasis: "100%" }}>
                        <Alert severity="error" sx={{ mt: 1 }}>
                          {error}
                        </Alert>
                      </Box>
                    )}
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
