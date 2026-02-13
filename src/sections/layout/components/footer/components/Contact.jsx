import React from "react";
import {
    Container,
    Box,
    Typography,
    Stack,
    Link as MLink,
    IconButton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

import { useColorMode } from "../../../../../theme/ColorModeContext";

export function FooterContact() {
    const { mode } = useColorMode();

    return (
        <>
            <Box sx={{ px: 3, py: 1 }}>
                <Stack
                    direction="column"
                    spacing={2}
                    sx={{ flexWrap: "wrap", fontSize: 13, alignItems: "left" }}
                    aria-label="Contacto"
                >
                    <Typography>Contacto</Typography>
                    <Stack component="a" href="mailto:info@trioptimo.com" rel="noopener noreferrer" direction="row" spacing={1.5} alignItems="center" sx={{
                            textDecoration: "none",
                            color: "inherit",
                            cursor: "pointer",
                            "&:hover": {
                                textDecoration: "underline",
                            },
                        }}>
                        <MailOutlineIcon />
                        <Typography variant="body2">info@trioptimo.com</Typography>
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
                            "&:hover": {
                                textDecoration: "underline",
                            },
                        }}
                    >
                        <PhoneAndroidIcon />
                        <Typography variant="body2">+34 663 47 70 89</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/company/trioptimo/"
                            target="_blank"
                            rel="noreferrer noopener"
                            size="small"
                            sx={{
                                bgcolor: "background.paper",
                                borderRadius: "999px",
                                boxShadow: 0,
                                "&:hover": { bgcolor: "transparent" },
                            }}
                        >
                            <LinkedInIcon fontSize="small" sx={{ color: mode === "light" ? "#0104FE" : "#00dd93", background: "transparent", border: 0 }} />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://www.instagram.com/trioptimo?igsh=OHV5MWhlaXh6NG14"
                            target="_blank"
                            rel="noreferrer noopener"
                            size="small"
                            sx={{
                                bgcolor: "background.paper",
                                borderRadius: "999px",
                                boxShadow: 0,
                                "&:hover": { bgcolor: "transparent" },
                            }}
                        >
                            <InstagramIcon fontSize="small" sx={{ color: mode === "light" ? "#0104FE" : "#00dd93", background: "transparent", border: 0 }} />
                        </IconButton>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
}
