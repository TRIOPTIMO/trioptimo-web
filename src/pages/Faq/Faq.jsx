import {
    Box,
    Container,
    Divider,
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { useMetaTags } from "../../services/useMetaTags";

import CTA from "./components/CTA";
import FAQs from "./components/FAQs";
import Title from "./components/Title";

export default function Faq() {
    const { t, i18n } = useTranslation('faq');

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
                    // backgroundColor: 'rgba(252, 163, 17, 0.1)', // tu naranja con opacidad
                    backgroundImage: 'url("/images/bg-orange.png")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <Container
                maxWidth="md"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                }}
            >
                <Box
                    sx={{
                        borderRadius: 2,
                        p: { xs: 3, md: 6 },
                    }}
                >
                    <Title />
                    <FAQs />
                    <Divider sx={{ my: 6 }} />
                    <CTA />
                </Box>
            </Container>
        </Box>

    );
}
