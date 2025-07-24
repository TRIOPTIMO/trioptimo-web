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
                direction={{ xs: 'row', sm: 'row', md: 'row' }}
                spacing={2}
                sx={{
                    my: { xs: 4, sm: 4 },
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
                        width: {xs: "auto", md: "auto"},
                        fontSize: { xs: "1.2rem", md: "1.5rem", lg: "3rem" },
                        my: { xs: 0, sm: 2, md: 6 },
                        color: 'colors.darkBlue'
                    }}>
                        {text}
                        {/* <HighlightedText delay={index * 1.5}>{text}</HighlightedText> */}
                    </Typography>
                ))}
            </Stack>
        </>
    );
}
