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
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{
                    mb: { xs: 0, sm: 4 },
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: { xs: 'center', sm: 'center' },
                    alignItems: "center"
                }}
            >
                {slogans.map((text, index) => (
                    <Typography key={index} variant="h1" sx={{
                        position: 'relative',
                        zIndex: 1,
                        fontWeight: 700,
                        width: "100%",
                        fontSize: { xs: "2rem", md: "1.5rem", lg: "3rem" },
                        my: { xs: 0, sm: 2, md: 6 },
                        color: 'colors.white'
                    }}>
                        {text}
                        {/* <HighlightedText delay={index * 1.5}>{text}</HighlightedText> */}
                    </Typography>
                ))}
            </Stack>
        </>
    );
}
