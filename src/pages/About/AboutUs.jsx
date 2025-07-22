import {
    Box,
    Container,
    Stack,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMetaTags } from "../../services/useMetaTags";
import Mision from "./components/Mision";
import Vision from "./components/Vision";
import Commitment from "./components/Commitment";
// import Ceos from "./components/Ceos";
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
        <Box name="aboutus" sx={{ py: 10, backgroundColor: 'colors.white', }}>
                {/* <Title /> */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={4}
                        sx={{ width: '100%', px: 2 }}
                    >
                        {/* Columna izquierda */}
                        <Stack spacing={4} sx={{ width: { xs: '100%', md: '50%' } }}>
                            <Mision />
                            <Vision />
                        </Stack>

                        {/* Columna derecha */}
                        <Stack spacing={4} sx={{ width: { xs: '100%', md: '50%' } }}>
                            <Commitment />
                        </Stack>
                    </Stack>
                </motion.div>

                {/* <Ceos /> */}
        </Box>
    );
}
