import {
    Typography,
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
    const { t } = useTranslation('servicespage');

    return (
        <>
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
                                sx={{
                                    color: 'text.secondary',
                                    fontWeight: 500,
                                    mt: 3
                                }}
                                variant="body2"
                            >
                                {t(`items.${index}.title`)}
                            </TimelineOppositeContent>

                            <TimelineSeparator>
                                <TimelineDot
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        background: 'linear-gradient(135deg, #00bfff, #6a5acd)',
                                        color: '#fff',
                                        boxShadow: '0 4px 12px rgba(0,191,255,0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: 30,
                                    }}
                                >
                                    {servicio.icono}
                                </TimelineDot>
                                {index < servicios.length - 1 && (
                                    <TimelineConnector
                                        sx={{
                                            background: 'linear-gradient(180deg, #00bfff, #6a5acd)',
                                            width: 3,
                                            minHeight: 50,
                                            opacity: 0.7,
                                        }}
                                    />
                                )}
                            </TimelineSeparator>

                            <TimelineContent>
                                <Paper
                                    elevation={8}
                                    sx={{
                                        p: 3,
                                        borderRadius: 3,
                                        background: 'linear-gradient(135deg, #ffffff, #f0f4ff)',
                                        boxShadow: '0 8px 24px rgba(0,191,255,0.2)',
                                        border: '1px solid rgba(0,191,255,0.2)',
                                        color: 'text.primary',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 12px 30px rgba(0,191,255,0.4)',
                                        },
                                    }}
                                >
                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                        {t(`items.${index}.description`)}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    </motion.div>
                ))}
            </Timeline>

        </>
    );
}
