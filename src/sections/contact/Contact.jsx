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
  Link as MLink,
  Alert,
} from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
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
      const res = await fetch("https://mail-sender-0dt2.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
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
        sx={{ bgcolor: "primary.main", color: "#fff" }}
      >
        <Container maxWidth="lg" sx={{ py: 8 }}>
          {/* Layout principal en horizontal */}
          <Stack
            direction="row"
            flexWrap="wrap"
            useFlexGap
            alignItems="flex-start"
            sx={(theme) => ({
              gap: theme.spacing(6),
            })}
          >
            {/* ---- Columna izquierda ---- */}
            <Box
              sx={(theme) => ({
                flexGrow: 0,
                flexShrink: 0,
                flexBasis: {
                  xs: "100%",
                  md: `calc((100% - ${theme.spacing(6)}) * 0.42)`, // ~5/12 aprox
                },
                minWidth: { xs: "100%", sm: 0 },
              })}
            >
              <Typography variant="h4" fontWeight={800} sx={{
            fontSize: { xs: "1.9rem", md: "3.4rem" },
          }}>
                Hablemos de tu Misión
              </Typography>
              <Typography sx={{ mt: 1.5, color: "#fff" }}>
                Hablenos. Da el primer paso hacia un proyecto financiable, sostenible y con resultados medibles. Estamos aqui para ayudarte a hacerlo realidad.
              </Typography>

              <Stack spacing={1.5} sx={{ mt: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <MailOutlineIcon />
                  <Typography>info@trioptimo.com</Typography>
                </Stack>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <PhoneAndroidIcon />
                  <Typography>+34 663 47 70 89</Typography>
                </Stack>
              </Stack>
            </Box>

            {/* ---- Columna derecha (formulario) ---- */}
            <Box
              sx={(theme) => ({
                flexGrow: 1,
                flexShrink: 0,
                flexBasis: {
                  xs: "100%",
                  md: `calc((100% - ${theme.spacing(6)}) * 0.58)`, // ~7/12 aprox
                },
                minWidth: { xs: "100%", sm: 0 },
              })}
            >
              <Card sx={{ borderRadius: 3, p: 3 }}>
                <CardContent>
                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Stack
                      direction="row"
                      flexWrap="wrap"
                      useFlexGap
                      sx={(theme) => ({
                        gap: theme.spacing(2),
                      })}
                    >
                      {/* Campo helper */}
                      {[
                        { label: "Nombre Completo", name: "nombre", required: true },
                        { label: "Email de Contacto", name: "email", type: "email", required: true },
                        { label: "Motivo", name: "subject", required: true },
                        { label: "Página Web (opcional)", name: "web" },
                      ].map((f) => (
                        <Box
                          key={f.name}
                          sx={(theme) => ({
                            flexBasis: {
                              xs: "100%",
                              md: f.name === "sector" || f.name === "asesoria" ? "100%" : `calc((100% - ${theme.spacing(2)}) / 2)`,
                            },
                            minWidth: { xs: "100%", sm: 0 },
                          })}
                        >
                          <Typography
                            variant="body2"
                            fontWeight={600}
                            sx={{ mb: 0.5, color: "text.primary" }}
                          >
                            {f.label}
                            {f.required && <span style={{ color: "#d32f2f" }}> *</span>}
                          </Typography>

                          <TextField
                            name={f.name}
                            type={f.type || "text"}
                            required={f.required}
                            fullWidth
                            variant="outlined"
                            InputProps={{
                              sx: {
                                borderRadius: 2,
                                bgcolor: "background.paper",
                                "& fieldset": {
                                  borderColor: "grey.300",
                                },
                                "&:hover fieldset": {
                                  borderColor: "primary.main",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "primary.main",
                                  boxShadow: (theme) => `0 0 0 3px ${theme.palette.primary.main}22`,
                                },
                              },
                            }}
                          />
                        </Box>
                      ))}

                      {/* Campo multilinea */}
                      <Box sx={{ flexBasis: "100%" }}>
                        <Typography variant="body2" fontWeight={600}>
                          Cuéntanos más sobre tu proyecto o reto (esencial)
                        </Typography>
                        <TextField
                          name="message"
                          required
                          fullWidth
                          multiline
                          minRows={4}
                          variant="outlined"
                          sx={{
                            mt: 1,
                            "& .MuiOutlinedInput-root": {
                              borderRadius: 2,
                              bgcolor: "background.paper",
                              "& fieldset": { borderColor: "grey.300" },
                              "&:hover fieldset": { borderColor: "primary.main" },
                              "&.Mui-focused fieldset": {
                                borderColor: "primary.main",
                                boxShadow: (theme) => `0 0 0 3px ${theme.palette.primary.main}22`,
                              },
                            },
                          }}
                        />
                      </Box>

                      {/* Botón enviar */}
                      <Box sx={{ flexBasis: "100%" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="tertiary"
                          size="large"
                          endIcon={<SendIcon />}
                          disabled={sending}
                        >
                          {sending ? "Enviando..." : "Enviar Solicitud"}
                        </Button>
                      </Box>

                      {/* Feedback */}
                      {sent && (
                        <Box sx={{ flexBasis: "100%" }}>
                          <Alert severity="success">¡Gracias! Tu solicitud fue enviada.</Alert>
                        </Box>
                      )}
                      {error && (
                        <Box sx={{ flexBasis: "100%" }}>
                          <Alert severity="error">{error}</Alert>
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