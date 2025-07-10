import {
    Box,
    Typography,
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Title() {
    const { t } = useTranslation('services');

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
                        fontSize= {55}
                        mb={6}
                        mr={2}
                        color="colors.darkBlue"
                    >
                        {t('title')}
                    </Typography>
                </Box>

                <Typography
                    variant="subtitle"
                    align="center"
                    fontWeight={700}
                    fontSize= {25}
                    mb={6}
                    mr={2}
                    color="colors.darkBlue"
                >
                    {t('description')}
                </Typography>
            </motion.div>
        </>
    );
}
