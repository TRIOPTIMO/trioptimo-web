import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import InsightsIcon from '@mui/icons-material/Insights';
import BuildIcon from '@mui/icons-material/Build';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const razones = [
  {
    icon: <InsightsIcon />
  },
  {
    icon: <BuildIcon />
  },
  {
    icon: <VerifiedIcon />
  },
  {
    icon: <SupportAgentIcon />
  },
];

export default function WhychooseUs() {
  const { t } = useTranslation('whychooseus');

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: 'colors.white', position: 'relative', minHeight: "20vh" }}>
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
          color="colors.darkBlue"
          fontSize={55}
        >
          {t('title')}
        </Typography>
      </Box>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ px: { xs: 2, md: 6 }, position: 'relative', zIndex: 20 }}
      >
        {razones.map((razon, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                // scale: 1.08,
                // boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                // transition: { duration: 0.3 },
              }}
              sx={{
                width: '100%',
                maxWidth: 400,
              }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 0,
                  background: "transparent",
                  color: "colors.darkBlue",
                  width: '100%',
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
                    backgroundColor: 'colors.orange',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    color: '#fff',
                    fontSize: 30,
                  }}
                >
                  {razon.icon}
                </Box>

                <CardContent sx={{ p: 0 }}>
                  <Typography
                    variant="h6"
                    fontSize={25}
                    sx={{
                      color: 'colors.orange',
                      fontWeight: 'bold',
                      mb: 1,
                    }}
                  >
                    {t(`reasons.${index}.title`)}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="colors.darkBlue"
                    fontSize={20}
                    sx={{ lineHeight: 1.6 }}
                  >
                    {t(`reasons.${index}.description`)}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
