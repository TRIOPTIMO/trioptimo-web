import { Stack, Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';
import React, { useLayoutEffect, useRef } from 'react';

export default function ServicesComponent() {
  const { t } = useTranslation('services');
  const imgRef = useRef();

  useLayoutEffect(() => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      console.log("Image width:", rect.width);
      console.log("Image height:", rect.height);
    }
  }, []);

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={{ xs: 4, sm: 5, md: 3, lg: 8 }}
      sx={{
        mt: { xs: 6, sm: 8, md: 10 },
        width: { xs: "100%", sm: "90%", md: "90%", lg: "75%", xl: "100%" },
        minHeight: { xs: "auto", md: "50vh" },
        backgroundColor: "rgba(147, 30, 216, 0.1)",
        borderRadius: 3,
        position: "relative",
        overflow: "visible",
        p: { xs: 2, sm: 3, md: 4, lg: 6 },
        alignItems: "center",
        justifyContent: "space-between",
        mx: "auto",
      }}
    >
      {/* Texto con motion */}
      <Box
        component={motion.div}
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        sx={{
          flex: 1,
          width: {
            xs: "100%",
            sm: "80%",
            md: "60%",
            lg: "55%",
            xl: "50%",
          },
        }}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          color="colors.darkBlue"
          sx={{
            mb: { xs: 3, sm: 4, md: 5 },
            fontSize: {
              xs: 28,
              sm: 32,
              md: 40,
              lg: 48,
              xl: 54,
            },
          }}
        >
          {t('title')}
        </Typography>

        <Typography
          variant="body1"
          color="colors.darkBlue"
          sx={{
            textAlign: 'justify',
            width: {
              xs: "100%",
              sm: "90%",
              md: "70%",
              lg: "65%",
              xl: "60%",
            },
            fontSize: {
              xs: 16,
              sm: 18,
              md: 20,
              lg: 22,
              xl: 24,
            },
          }}
        >
          {t('description')}
        </Typography>

        <Button
          component={ScrollLink}
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          to="contact"
          variant="contained"
          aria-label="Go to contact"
          sx={{
            mt: { xs: 3, sm: 4, md: 5 },
            backgroundColor: "transparent",
            color: 'colors.primary',
            fontWeight: 'bold',
            borderRadius: 3,
            px: { xs: 4, sm: 5, md: 6 },
            py: { xs: 1.5, sm: 1.8, md: 2 },
            fontSize: {
              xs: '1rem',
              sm: '1.1rem',
              md: '1.3rem',
              lg: '1.5rem',
              xl: '1.7rem',
            },
            boxShadow: 0,
            '&:hover': {
              boxShadow: 0,
            },
          }}
        >
          {t('ctaButton')}
        </Button>
      </Box>

      {/* Imagen con motion */}
      <Box
        component={motion.div}
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        sx={{
          position: { md: "absolute", xs: "static" },
          right: { md: "-5%", lg: "-25%", xl: "-10%" },
          top: { md: "20%", xs: "auto" },
          transform: { md: "translateY(-50%)", xs: "none" },
          width: {
            xs: "100%",
            sm: 200,
            md: 300,
            lg: 450,
            xl: 500,
          },
          height: {
            xs: 200,
            sm: 200,
            md: 300,
            lg: 450,
            xl: 500,
          },
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          mx: { xs: "auto", md: 0 },
          mt: { xs: 4, md: 0 },
        }}
      >
        <Box
          component="img"
          ref={imgRef}
          src="./images/services.png"
          alt="Service"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 2,
            zIndex: 10,
          }}
        />
      </Box>
    </Stack>
  );
}
