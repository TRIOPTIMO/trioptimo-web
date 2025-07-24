import { Box, Card, CardContent, Typography, Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NorthEastIcon from '@mui/icons-material/NorthEast';

export default function ServicesCards() {
    const { t } = useTranslation('services');
    const services = t('services', { returnObjects: true });

    return (
        <Box sx={{ px: 2, py: 6, }}>
            <Stack
                direction={{ xs: 'column', sm: 'column', md: 'row' }}
                spacing={4}
                alignItems="stretch"
                justifyContent="center"
                useFlexGap
                flexWrap="nowrap"
            >
                {services.map((service, index) => (
                    <Card
                        key={index}
                        elevation={3}
                        component={motion.div}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        sx={{
                            borderRadius: 3,
                            boxShadow: 0,
                            width: { xs: '100%', sm: '100%', md: 350 },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            p: 3,
                            backgroundColor: 'rgba(147, 30, 216, .1)',
                        }}
                    >
                        <CardContent>
                            <Typography variant="h3" color="text.secondary" fontSize={25} fontWeight={700} gutterBottom>
                                {t(`services.${index}.title`)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {t(`services.${index}.description`)}
                            </Typography>
                        </CardContent>

                        <Box mt={2} textAlign="right">
                            <Button
                                variant="outlined"
                                aria-label="Go to contact"
                                size="large"
                                component={ScrollLink}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                spy={true}
                                to="contact"
                                sx={{
                                    borderRadius: 2,
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    color: "colors.primary",
                                    borderColor: "colors.primary",
                                    '&:hover': {
                                        bgcolor: 'transparent',
                                    },
                                }}
                            >
                                {t(`services.${index}.button`)}
                                <NorthEastIcon />
                                {/* <KeyboardArrowDownIcon /> */}
                            </Button>
                        </Box>
                    </Card>
                ))}
            </Stack>
        </Box>
    );
}
