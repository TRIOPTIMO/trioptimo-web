import {
    Typography,
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Title() {
    const { t } = useTranslation('contact');
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Typography
                    variant="h1"
                    align="center"
                    fontWeight={700}
                    mb={6}
                    mr={2}
                    sx={{ fontSize: { xs: 35, md: 45, lg: 55 } }}
                    color="colors.secondary"
                >
                    {t('title')}
                </Typography>

                <Typography
                    variant="subtitle1"
                    align="center"
                    color="colors.darkBlue"
                    fontSize= {20}
                    mb={6}
                >
                    {t('description')}
                </Typography>
            </motion.div>
        </>
    );
}
