import {
  Box,
  Typography,
  Container,
  Paper,
} from '@mui/material';

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';

import BuildIcon from '@mui/icons-material/Build';
import MemoryIcon from '@mui/icons-material/Memory';
import InsightsIcon from '@mui/icons-material/Insights';
import SensorsIcon from '@mui/icons-material/Sensors';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMetaTags } from "../services/useMetaTags";

const servicios = [
  {
    icono: <BuildIcon />,
  },
  {
    icono: <SensorsIcon />,
  },
  {
    icono: <InsightsIcon />,
  },
  {
    icono: <MemoryIcon />,
  },
];

export default function Services() {
  const { t, i18n } = useTranslation('servicespage');

  useMetaTags({
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: t("meta.description"),
    lang: i18n.language,
  });

  return (
    <Box sx={{ backgroundColor: 'transparent', py: 10 }}>
      <Container>
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
              {t('title1')}
            </Typography>
            <Typography
              variant="h4"
              align="center"
              fontWeight={700}
              mb={6}
              sx={{ background: (theme) => theme.palette.primary.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              {t('title2')}
            </Typography>
          </Box>

          <Typography
            variant="subtitle"
            align="center"
            fontWeight={700}
            mb={6}
            mr={2}
            color="text.secondary"
          >
            {t('description')}
          </Typography>
        </motion.div>
        <Timeline position="alternate">
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  sx={{ color: 'text.primary' }}
                  variant="body2"
                >
                  {t(`items.${index}.title`)}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    {servicio.icono}
                  </TimelineDot>
                  {index < servicios.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={4}
                    sx={{
                      p: 2,
                      backgroundImage: `radial-gradient(ellipse at bottom, rgba(0,191,255,0.35), transparent 80%)`,
                      backgroundColor: 'background.paper',
                      border: '1px solid rgba(0,191,255)',
                      color: 'text.primary',
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="bold">
                      {t(`items.${index}.title`)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t(`items.${index}.description`)}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </motion.div>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
