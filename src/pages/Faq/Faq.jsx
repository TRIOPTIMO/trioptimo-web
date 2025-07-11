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
        <Box sx={{ backgroundColor: 'colors.white', py: 10 }}>
            <Container maxWidth="md">
                <Title />
                <FAQs />
                <Divider sx={{ my: 6 }} />
                <CTA />
            </Container>
        </Box>
    );
}
