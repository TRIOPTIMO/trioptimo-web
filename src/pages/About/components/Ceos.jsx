import {
    Box,
    Typography,
    Grid,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Ceos() {
    const { t } = useTranslation('aboutUs');

    const ceos = t('ceos', { returnObjects: true });

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Box display={"flex"}
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    mt={8}
                    mb={4}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        fontWeight={700}
                        mb={6}
                        mr={2}
                        color="text.secondary"
                    >
                        {t('teamTitle')}
                    </Typography>
                </Box>
            </motion.div>
            <Grid container spacing={3} justifyContent="center" sx={{
                flexWrap: {
                    xs: 'wrap', 
                    sm: 'nowrap',
                },
            }} alignItems="stretch">
                {ceos.map((ceo, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                        >
                            <Box
                                sx={{
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    background: 'linear-gradient(135deg, #ffffff, #f0f4ff)',
                                    borderBottom: '5px solid #00bfff',
                                    boxShadow: '0 8px 24px rgba(0,191,255,0.2)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 12px 30px rgba(0,191,255,0.4)',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        height: 240,
                                        width: '100%',
                                        backgroundImage: `url(../images/ceo${i + 1}.HEIC)`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background:
                                                'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
                                        },
                                    }}
                                />
                                <Box sx={{ p: 3 }}>
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={700}
                                        sx={{ color: 'primary.main', mb: 1 }}
                                    >
                                        {ceo.name}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {ceo.role}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        mt={1}
                                        sx={{
                                            transition: 'color 0.3s ease',
                                            '&:hover': {
                                                color: '#00bfff',
                                            },
                                        }}
                                    >
                                        {ceo.bio}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        mt={1}
                                        fontWeight={700}
                                    >
                                        {ceo.commitment}
                                    </Typography>
                                </Box>
                            </Box>

                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}
