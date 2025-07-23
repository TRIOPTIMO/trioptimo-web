import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import InsightsIcon from '@mui/icons-material/Insights';
import BuildIcon from '@mui/icons-material/Build';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const razones = [
  { icon: <InsightsIcon /> },
  { icon: <BuildIcon /> },
  { icon: <VerifiedIcon /> }
];

const MotionBox = motion(Box);

export default function WhychooseUs() {
  const { t } = useTranslation('whychooseus');

  return (
    <Box sx={{ mx: "auto", backgroundColor: 'colors.white' }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          py: 8,
          px: 2,
          backgroundColor: 'rgba(229, 229, 229, .3)',
          position: 'relative',
          minHeight: '20vh',
          mx: 'auto',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url("/images/iconSecondary.png")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: { xs: 'center -50%', md: '-30% center' },
            backgroundSize: { xs: '60%', md: '700px' },
            zIndex: 0,

            // Nuevo: máscara de opacidad gradual
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
            maskSize: '100% 100%',
            maskRepeat: 'no-repeat',
          }
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ mx: "auto" }}>
          <Typography
            variant="h4"
            align="center"
            fontWeight={700}
            mb={6}
            mr={2}
            color="colors.darkBlue"
            fontSize={55}
          >
            {t('title')}
          </Typography>
        </Box>
        <Stack spacing={6} alignItems="center" sx={{ zIndex: 20 }}>
          {/* Primera fila: dos íconos */}
          <Stack direction="row" sx={{ zIndex: 20 }} spacing={6} justifyContent="center">
            {razones.slice(0, 2).map(({ icon }, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                sx={{ maxWidth: 400, width: '100%' }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 0,
                    background: "transparent",
                    color: "colors.darkBlue",
                    minHeight: 280,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                    cursor: 'pointer',
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      backgroundColor: 'colors.primary',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      color: '#fff',
                      fontSize: 30,
                    }}
                  >
                    {icon}
                  </Box>
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h6" fontSize={25} sx={{ color: 'colors.primary', fontWeight: 'bold', mb: 1 }}>
                      {t(`reasons.${index}.title`)}
                    </Typography>
                    <Typography variant="body1" fontSize={20} sx={{ color: 'colors.darkBlue', lineHeight: 1.6 }}>
                      {t(`reasons.${index}.description`)}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            ))}
          </Stack>

          {/* Segunda fila: un ícono centrado */}
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            sx={{ maxWidth: 400, width: '100%' }}
          >
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 0,
                background: "transparent",
                color: "colors.darkBlue",
                minHeight: 280,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 3,
                cursor: 'pointer',
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  backgroundColor: 'colors.primary',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                  color: '#fff',
                  fontSize: 30,
                }}
              >
                {razones[2].icon}
              </Box>
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h6" fontSize={25} sx={{ color: 'colors.primary', fontWeight: 'bold', mb: 1 }}>
                  {t(`reasons.2.title`)}
                </Typography>
                <Typography variant="body1" fontSize={20} sx={{ color: 'colors.darkBlue', lineHeight: 1.6 }}>
                  {t(`reasons.2.description`)}
                </Typography>
              </CardContent>
            </Card>
          </MotionBox>
        </Stack>

      </Stack>
    </Box>



  );
}
