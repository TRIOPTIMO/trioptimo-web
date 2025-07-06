import {
    Box,
    Typography,
} from '@mui/material';

import BuildIcon from '@mui/icons-material/Build';
import MemoryIcon from '@mui/icons-material/Memory';
import InsightsIcon from '@mui/icons-material/Insights';
import SensorsIcon from '@mui/icons-material/Sensors';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const servicios = [
    {
        icono: <BuildIcon />,
    },
    {
        icono: <SensorsIcon />,
    },
    {
        icono: <InsightsIcon />,
    },
    {
        icono: <MemoryIcon />,
    },
];

export default function Title() {
    const { t } = useTranslation('servicespage');

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Box display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        fontWeight={700}
                        mb={6}
                        mr={2}
                        color="text.secondary"
                    >
                        {t('title')}
                    </Typography>
                </Box>

                <Typography
                    variant="subtitle"
                    align="center"
                    fontWeight={700}
                    mb={6}
                    mr={2}
                    color="text.secondary"
                >
                    {t('description')}
                </Typography>
            </motion.div>
        </>
    );
}
