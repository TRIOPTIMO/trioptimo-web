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
  FormControlLabel,
  Checkbox,
  Link as MUILink,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MeshBackground from "../../../../sections/common/MeshBackground";

export default function Contact({ mode }) {
  const { t } = useTranslation();

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("https://trioptimo-web-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(t("contact.feedback.sendError"));
      setSent(true);
      form.reset();
      setAcceptedPrivacy(false);
    } catch (err) {
      setError(err.message || t("contact.feedback.genericError"));
    } finally {
      setSending(false);
    }
  }

  const fields = [
    { key: "name", name: "nombre", required: true, autoComplete: "name" },
    { key: "email", name: "email", type: "email", required: true, autoComplete: "email" },
    { key: "websiteOptional", name: "web", autoComplete: "url" },
  ];

  return (
    <Box id="contacto">
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack
          direction="row"
          flexWrap="wrap"
          useFlexGap
          alignItems="flex-start"
          sx={(theme) => ({ gap: theme.spacing(6) })}
        >
          {/* ---- Columna izquierda ---- */}
          <Box
            sx={(theme) => ({
              flexGrow: 0,
              flexShrink: 0,
              flexBasis: {
                xs: "100%",
                md: `calc((100% - ${theme.spacing(6)}) * 0.42)`,
              },
              minWidth: { xs: "100%", sm: 0 },
            })}
          >
            <Typography
              variant="h4"
              fontWeight={800}
              sx={{
                fontSize: { xs: "1.9rem", md: "3.4rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {t("contact.title")}
            </Typography>

            <Typography sx={{ mt: 1.5, color: "text.primary", textAlign: { xs: "center", md: "left" } }}>
              {t("contact.subtitle")}
            </Typography>

            <Stack spacing={1.5} sx={{ mt: 3 }}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <MailOutlineIcon />
                <Typography>info@trioptimo.com</Typography>
              </Stack>

              <Stack
                component="a"
                href="https://wa.me/34663477089"
                target="_blank"
                rel="noopener noreferrer"
                direction="row"
                spacing={1.5}
                alignItems="center"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                  cursor: "pointer",
                  "&:hover": { opacity: 0.8 },
                }}
              >
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
                md: `calc((100% - ${theme.spacing(6)}) * 0.58)`,
              },
              minWidth: { xs: "100%", sm: 0 },
            })}
          >
            <MeshBackground
              sx={{
                minHeight: "70vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: { xs: 2, sm: 6 },
                py: { xs: 6, sm: 6 },
              }}
            >
              <Card sx={{ borderRadius: 1, p: 3 }}>
                <CardContent>
                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Stack
                      direction="column"
                      flexWrap="wrap"
                      useFlexGap
                      sx={(theme) => ({ gap: theme.spacing(2) })}
                    >
                      {fields.map((f) => {
                        const labelId = `label-${f.name}`;
                        const inputId = `input-${f.name}`;

                        return (
                          <Box
                            key={f.name}
                            sx={(theme) => ({
                              flexBasis: {
                                xs: "100%",
                                md:
                                  f.name === "sector" || f.name === "asesoria"
                                    ? "100%"
                                    : `calc((100% - ${theme.spacing(2)}) / 2)`,
                              },
                              minWidth: { xs: "100%", sm: 0 },
                            })}
                          >
                            <Typography
                              id={labelId}
                              component="label"
                              htmlFor={inputId}
                              variant="body2"
                              fontWeight={600}
                              sx={{ mb: 0.5, color: "text.primary", display: "block" }}
                            >
                              {t(`contact.fields.${f.key}`)}
                              {f.required && (
                                <span aria-hidden="true" style={{ color: "#d32f2f" }}>
                                  {" "}
                                  *
                                </span>
                              )}
                            </Typography>

                            <TextField
                              id={inputId}
                              name={f.name}
                              type={f.type || "text"}
                              required={f.required}
                              fullWidth
                              variant="outlined"
                              autoComplete={f.autoComplete}
                              inputProps={{
                                "aria-labelledby": labelId,
                                "aria-required": f.required ? "true" : undefined,
                              }}
                              InputProps={{
                                sx: {
                                  borderRadius: 2,
                                  bgcolor: "background.paper",
                                  "& fieldset": { borderColor: "grey.300" },
                                  "&:hover fieldset": { borderColor: "default" },
                                  "&.Mui-focused fieldset": {
                                    borderColor: "primary.main",
                                    boxShadow: (theme) =>
                                      `0 0 0 3px ${theme.palette.primary.main}22`,
                                  },
                                },
                              }}
                            />
                          </Box>
                        );
                      })}

                      {/* Campo multilinea */}
                      <Box sx={{ flexBasis: "100%" }}>
                        <Typography
                          id="label-detalle"
                          component="label"
                          htmlFor="input-detalle"
                          variant="body2"
                          fontWeight={600}
                          sx={{ display: "block" }}
                        >
                          {t("contact.fields.details")}{" "}
                          <span aria-hidden="true" style={{ color: "#d32f2f" }}>
                            *
                          </span>
                        </Typography>

                        <TextField
                          id="input-detalle"
                          name="detalle"
                          required
                          fullWidth
                          multiline
                          minRows={4}
                          variant="outlined"
                          inputProps={{
                            "aria-labelledby": "label-detalle",
                            "aria-required": "true",
                          }}
                          sx={{
                            mt: 1,
                            "& .MuiOutlinedInput-root": {
                              borderRadius: 2,
                              bgcolor: "background.paper",
                              "& fieldset": { borderColor: "grey.300" },
                              "&:hover fieldset": { borderColor: "default" },
                              "&.Mui-focused fieldset": {
                                borderColor: "primary.main",
                                boxShadow: (theme) =>
                                  `0 0 0 3px ${theme.palette.primary.main}22`,
                              },
                            },
                          }}
                        />
                      </Box>

                      <Box sx={{ flexBasis: "100%", mb: 2 }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              required
                              checked={acceptedPrivacy}
                              onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                              inputProps={{ "aria-label": t("contact.privacy.checkboxAria") }}
                            />
                          }
                          label={
                            <span>
                              {t("contact.privacy.labelPrefix")}{" "}
                              <MUILink
                                component={RouterLink}
                                to="/politica-de-privacidad"
                                target="_blank"
                                underline="hover"
                              >
                                {t("contact.privacy.linkText")}
                              </MUILink>
                            </span>
                          }
                        />
                      </Box>

                      {/* Botón enviar */}
                      <Box sx={{ flexBasis: "100%" }}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="tertiary"
                          size="large"
                          disabled={sending || !acceptedPrivacy}
                          aria-label={t("contact.submit.aria")}
                          sx={{
                            ml: 1,
                            borderRadius: 999,
                            px: 2.8,
                            py: 0.7,
                            textTransform: "none",
                            fontWeight: 600,
                            color: "white",
                          }}
                        >
                          {sending ? t("contact.submit.sending") : t("contact.submit.send")}
                        </Button>
                      </Box>

                      {/* Feedback */}
                      {sent && (
                        <Box sx={{ flexBasis: "100%" }} role="status" aria-live="polite">
                          <Alert severity="success">{t("contact.feedback.success")}</Alert>
                        </Box>
                      )}

                      {error && (
                        <Box sx={{ flexBasis: "100%" }} role="alert" aria-live="assertive">
                          <Alert severity="error">{error}</Alert>
                        </Box>
                      )}
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </MeshBackground>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}