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

export function FooterLocations() {
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
                    <Typography>Ubicaciones</Typography>
                    
                    <Typography variant="body2">Sevilla</Typography>
                    <Typography variant="body2">Málaga</Typography>
                    <Typography variant="body2">Granada</Typography>

                </Stack>
            </Box>
        </>
    );
}
