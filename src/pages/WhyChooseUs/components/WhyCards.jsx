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
  { icon: <InsightsIcon fontSize='large' /> },
  { icon: <BuildIcon fontSize='large' /> },
  { icon: <VerifiedIcon fontSize='large' /> }
];

const MotionBox = motion(Box);

export default function WhyCards() {
  const { t } = useTranslation('whychooseus');

  return (
   <Stack spacing={6} alignItems="center" sx={{ zIndex: 20 }}>
          <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} sx={{ zIndex: 20, width: { xs: "100%", md: "100%" } }} spacing={6} alignItems="center" justifyContent="center">
            {razones.map(({ icon }, index) => (
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
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                    mx: "auto",
                    cursor: 'pointer',
                    width: { xs: 300, md: 500 },
                    height: { xs: 150, md: 200 }
                  }}
                >
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      color: 'colors.secondary',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2,
                      fontSize: 30,
                    }}
                  >
                    {icon}
                  </Box>
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="subtitle1" fontSize={25} sx={{ color: 'colors.secondary', fontWeight: 'bold', mb: 1 }}>
                      {t(`reasons.${index}.title`)}
                    </Typography>
                  </CardContent>
                </Card>
              </MotionBox>
            ))}
          </Stack>
        </Stack>
  );
}
