import {
    Box,
    Stack,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Mision from "./components/Mision";
import Vision from "./components/Vision";
import Commitment from "./components/Commitment";
import GlobalBackground from '../Home/components/Hero/components/GlobalBackground';

export default function About() {
    const { t, i18n } = useTranslation('aboutUs');

    return (
        <Box name="aboutus" sx={{ py: 10, backgroundColor: 'colors.secondary', }}>
            {/* <GlobalBackground/> */}
                {/* <Title /> */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={1}
                        sx={{ width: '100%', px: 2 }}
                    >
                        {/* Columna izquierda */}
                        <Stack spacing={2} sx={{ width: { xs: '100%', md: '50%' }, px: {xs: 0, md: 8} }}>
                            <Mision />
                            <Vision />
                        </Stack>

                        {/* Columna derecha */}
                        <Stack spacing={2} sx={{ width: { xs: '100%', md: '50%' }, px: {xs: 0, md: 8} }}>
                            <Commitment />
                        </Stack>
                    </Stack>
                </motion.div>

                {/* <Ceos /> */}
        </Box>
    );
}
