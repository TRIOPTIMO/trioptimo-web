import {
  Box,
  Typography,
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Title() {
  const { t } = useTranslation('services');

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h1"
          align="center"
          fontWeight={700}
          fontSize={55}
          mb={6}
          color="colors.darkBlue"
        >
          {t('title')}
        </Typography>
      </Box>

      {/* 📌 Descripción centrada */}
      <Box display="flex" justifyContent="center">
        <Typography
          variant="subtitle1"
          align="center"
          fontWeight={700}
          fontSize={20}
          mb={6}
          color="colors.darkBlue"
          sx={{ maxWidth: '800px' }}
        >
          {t('description')}
        </Typography>
      </Box>
    </motion.div>
  );
}
