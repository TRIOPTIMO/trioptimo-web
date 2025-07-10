// src/components/PorQueElegirnos.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import InsightsIcon from '@mui/icons-material/Insights';
import BuildIcon from '@mui/icons-material/Build';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useTranslation } from 'react-i18next';

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
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 0,
                background: "transparent",
                color:"colors.darkBlue",
                width: '100%',
                maxWidth: 400,
                minHeight: 280,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                zIndex: hoveredIndex === index ? 100 : 20,
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
          </Grid>
        ))}
      </Grid>

    </Box>
  );
}
