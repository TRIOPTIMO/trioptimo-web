import { Typography, Stack } from "@mui/material";
import { useTranslation } from 'react-i18next';
import HighlightedText from '../../../../../layout/common/HighlightedText';

export default function Slogans() {
    const { t } = useTranslation("hero");
    const slogans = [t("slogan1"), t("slogan2"), t("slogan3")];

    return (
        <>
            {/* Slogans */}
            <Stack
                direction={{ xs: 'row', sm: 'row' }}
                spacing={2}
                sx={{
                    mb: { xs: 3, sm: 4 },
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: { xs: 'center', sm: 'start' },
                    alignItems: "center"
                }}
            >
                {slogans.map((text, index) => (
                    <Typography key={index} variant="h1">
                        <HighlightedText delay={index * 1.5}>{text}</HighlightedText>
                    </Typography>
                ))}
            </Stack>
        </>
    );
}
