import {
    Box,
    Stack,
    Divider,
} from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMetaTags } from "../../services/useMetaTags";

import CTA from "./components/CTA";
import FAQs from "./components/FAQs";
import Title from "./components/Title";

export default function Faq() {
    const { t, i18n } = useTranslation('faq');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useMetaTags({
        title: t("meta.title"),
        description: t("meta.description"),
        keywords: t("meta.description"),
        lang: i18n.language,
    });

    return (
        <Box
            name="faq"
            sx={{
                position: 'relative',
                py: 10,
                overflow: 'hidden',
                // white base background
                backgroundColor: 'colors.white',
            }}
        >
            {/* Orange semi-transparent overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    //backgroundColor: 'rgba(252, 163, 17, 0.1)', 
                    backgroundImage: 'url("/images/bg.png")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <Stack
                direction={{ xs: 'column', sm: 'column', md: 'row' }}
                spacing={10}
                alignItems="stretch"
                justifyContent="center"
                useFlexGap
                flexWrap="nowrap"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    mx: "auto"
                }}
            >
                <Box sx={{ my: "auto" }}>
                    {!isMobile && (
                    <Title />
                )}
                    <CTA />
                </Box>
                {isMobile && (
                    <Title />
                )}
                <FAQs />

                
            </Stack>
        </Box>

    );
}
