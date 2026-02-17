import React from "react";
import { Box, Button, Typography, Paper, Stack, Link as MUILink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import useCookieConsent from "../../../../hooks/useCookieConsent";
import { motion, AnimatePresence } from "framer-motion";

const MotionPaper = motion(Paper);

export default function CookieBanner() {
    if (typeof window === "undefined") return null;

    const { consent, accept, reject } = useCookieConsent();
    if (consent !== null) return null;

    return (
        <AnimatePresence>
            {consent === null && (
                <MotionPaper
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    elevation={6}
                    role="dialog"
                    aria-live="polite"
                    aria-label="Preferencias de cookies"
                    sx={{
                        position: "fixed",
                        zIndex: 9999,
                        borderRadius: 2,
                        p: 2,

                        // Mobile: pegado a bordes, sin cálculos
                        left: { xs: 12, sm: "50%" },
                        right: { xs: 12, sm: "auto" },
                        bottom: { xs: 12, sm: 20 },
                        transform: { xs: "none", sm: "translateX(-50%)" },

                        // Mobile: no fuerces width, deja que left/right manden
                        width: { xs: "auto", sm: 900 },
                        maxWidth: { xs: "65%", sm: 900 },

                        // Blindaje anti overflow
                        boxSizing: "border-box",
                        overflowX: "hidden",
                        overflowWrap: "anywhere",
                    }}
                >
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        alignItems={{ xs: "stretch", sm: "center" }}
                        justifyContent="space-between"
                        sx={{ minWidth: 0, maxWidth: "100%" }}
                    >

                        <Typography
                            variant="body2"
                            sx={{
                                minWidth: 0,
                                overflowWrap: "anywhere",
                                wordBreak: "break-word",
                            }}
                        >
                            Utilizamos cookies analíticas (Google Analytics) para mejorar la experiencia del usuario.
                            Puedes aceptar o rechazar su uso.
                        </Typography>

                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={1.2}
                            justifyContent="flex-end"
                            sx={{ flexShrink: 0, maxWidth: "100%" }}
                        >
                            <Button
                                variant="outlined"
                                size="small"
                                onClick={reject}
                                fullWidth
                                sx={{ whiteSpace: "nowrap" }}
                            >
                                Rechazar
                            </Button>

                            <Button
                                variant="contained"
                                size="small"
                                onClick={accept}
                                fullWidth
                                sx={(theme) => ({
                                    backgroundColor: theme.palette.secondary.main,
                                    whiteSpace: "nowrap",
                                })}
                            >
                                Aceptar
                            </Button>
                        </Stack>

                    </Stack>

                    <Typography variant="caption" sx={{ display: "block", mt: 1 }}>
                        Más información en nuestra{" "}
                        <MUILink
                            component={RouterLink}
                            to="/politica-de-cookies"
                            underline="hover"
                            sx={(theme) => ({
                                color: "text.primary",
                                "&:hover": { color: theme.palette.secondary.main },
                            })}
                        >
                            Política de Cookies
                        </MUILink>
                    </Typography>
                </MotionPaper>
            )}
        </AnimatePresence>
    );
}
