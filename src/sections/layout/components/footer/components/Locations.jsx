import React from "react";
import {
    Box,
    Typography,
    Stack
} from "@mui/material";
import { useTranslation } from "react-i18next";

export function FooterLocations() {
    const { t } = useTranslation();

    const cities = ["sevilla", "malaga", "granada"];
    return (
        <Box sx={{ px: 3, py: 1 }}>
            <Stack
                direction="column"
                spacing={2}
                sx={{ flexWrap: "wrap", fontSize: 13, alignItems: "left" }}
                aria-label={t("footer.locations.title")}
            >
                <Typography>
                    {t("footer.locations.title")}
                </Typography>

                {cities.map((city) => (
                    <Typography key={city} variant="body2">
                        {t(`footer.locations.${city}`)}
                    </Typography>
                ))}
            </Stack>
        </Box>
    );
}