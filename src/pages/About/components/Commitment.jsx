import {
  Box,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import React, { useLayoutEffect, useRef } from 'react';
import CallToAction from "./CallToAction";

export default function Mision() {
  const { t } = useTranslation('aboutUs');
  const imgRef = useRef();

  useLayoutEffect(() => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      console.log("Imagen Mision - width:", rect.width);
      console.log("Imagen Mision - height:", rect.height);
    }
  }, []);

  return (
    <Grid item xs={12} md={6}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          height: '100%',
          width: "50%",
          background: "transparent",
          borderRadius: 3,
          boxShadow: 0,
          mx:"auto",
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 3,
        }}
      >
        {/* Imagen con motion */}
        {/* <Box
          component={motion.img}
          ref={imgRef}
          src="/images/mision.png"
          alt={t('missionTitle')}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          sx={{
            width: { xs: '100%', md: 250 },
            height: { xs: 250, md: 250 },
            objectFit: 'cover',
            borderRadius: 2,
            boxShadow: 0,
          }}
        /> */}

        {/* Texto con motion */}
        <Box
          component={motion.div}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Typography
            variant="h6"
            align="center"
            fontWeight={700}
            color="colors.darkBlue"
            mb={1}
            fontSize={35}
          >
            {t('commitmentTitle')}
          </Typography>
          <Typography  align="center" variant="body2" fontSize={20} color="colors.darkBlue">
            {t('commitmentDescription')}
          </Typography>

          <CallToAction/>
        </Box>
      </Paper>
    </Grid>
  );
}
