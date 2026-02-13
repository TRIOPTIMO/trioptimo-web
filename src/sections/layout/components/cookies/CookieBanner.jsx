import React from "react";
import { Box, Button, Typography, Paper, Stack } from "@mui/material";
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
                    sx={{
                        position: "fixed",
                        bottom: 20,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: { xs: "90%", sm: 900 },
                        p: 2,
                        zIndex: 9999,
                    }}
                >
                    <Stack direction="row" spacing={2} justifyContent="space-between">
                        <Typography variant="body2">
                            Utilizamos cookies analíticas (Google Analytics) para mejorar la
                            experiencia del usuario. Puedes aceptar o rechazar su uso.
                        </Typography>
                        <Stack direction="row" spacing={2} justifyContent="flex-end">
                            <Button variant="outlined" size="small" onClick={reject}>
                                Rechazar
                            </Button>
                            <Button variant="contained" size="small" onClick={accept} sx={(theme) => {
                                return {
                                    backgroundColor: theme.palette.secondary.main
                                };
                            }}>
                                Aceptar
                            </Button>
                        </Stack>
                    </Stack>

                    <Typography variant="caption">
                        Más información en nuestra{" "}
                        <RouterLink to="/politica-de-cookies" sx={(theme) => {
                            return {
                                color: "text.primary", "&:hover": { color: theme.palette.secondary.main }
                            };
                        }}>
                            Política de Cookies
                        </RouterLink>
                    </Typography>
                </MotionPaper>
            )}
        </AnimatePresence>
    );
}
