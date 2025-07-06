import {
  Box,
  Typography,
  Paper
} from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SensorsIcon from '@mui/icons-material/Sensors';
import AssessmentIcon from '@mui/icons-material/Assessment';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const servicios = [
  {
    icon: <PrecisionManufacturingIcon fontSize="large" />
  },
  {
    icon: <SensorsIcon fontSize="large" />
  },
  {
    icon: <AssessmentIcon fontSize="large" />
  },
  {
    icon: <AssessmentIcon fontSize="large" />
  },
];

export default function Servicios() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { t } = useTranslation('services');

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "background.pages" }}>
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
        {hoveredIndex !== null && (
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          />
        )}
      </motion.div>
      <Masonry columns={{ xs: 1, sm: 2, md: 2 }} spacing={3}>
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Paper
              elevation={8}
              sx={{
                p: 3,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #ffffff, #f0f4ff)',
                boxShadow: '0 8px 24px rgba(0, 191, 255, 0.3)',
                border: '1px solid rgba(0,191,255,0.2)',
                color: 'text.primary',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00bfff, #6a5acd)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                  color: '#fff',
                  fontSize: 30,
                }}
              >
                {servicio.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  color: 'primary.main',
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                {t(`items.${index}.title`)}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.6 }}
              >
                {t(`items.${index}.description`)}
              </Typography>
            </Paper>
          </motion.div>
        ))}
      </Masonry>
    </Box>
  );
}
