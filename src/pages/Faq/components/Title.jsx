import {
    Box,
    Typography,
} from '@mui/material';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Title() {
    const { t } = useTranslation('faq');


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
            </motion.div>
        </>
    );
}
