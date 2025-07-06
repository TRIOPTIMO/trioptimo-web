import {
    Box,
    Container,
    Grid,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMetaTags } from "../../services/useMetaTags";
import Mision from "./components/Mision";
import Vision from "./components/Vision";
import Ceos from "./components/Ceos";
import Title from "./components/Title";

export default function About() {
    const { t, i18n } = useTranslation('aboutUs');

    useMetaTags({
        title: t("meta.title"),
        description: t("meta.description"),
        keywords: t("meta.description"),
        lang: i18n.language,
    });

    return (
        <Box sx={{ py: 10, background: 'linear-gradient(180deg, #ffffff 0%, #f0f4ff 100%)' }}>
            <Container maxWidth="md">
                <Title />
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Grid container spacing={4}>
                        <Mision />
                        <Vision />
                    </Grid>
                </motion.div>

                <Ceos />
            </Container>
        </Box>
    );
}
