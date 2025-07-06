import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMetaTags } from "../../services/useMetaTags";

export default function About() {
    const { t, i18n } = useTranslation('aboutUs');
    
    const ceos = t('ceos', { returnObjects: true });
    
    useMetaTags({
        title: t("meta.title"),
        description: t("meta.description"),
        keywords: t("meta.description"),
        lang: i18n.language,
      });

    return (
        <Box sx={{ py: 10, backgroundColor: 'background.pages' }}>
            <Container maxWidth="md">
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
                            {t('title')}
                        </Typography>
                        {/* <Typography
                            variant="h4"
                            align="center"
                            fontWeight={700}
                            mb={6}
                            sx={{ background: (theme) => theme.palette.primary.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                        >
                            {t('title2')}
                        </Typography> */}
                    </Box>

                    <Typography
                        variant="body1"
                        align="center"
                        color="text.secondary"
                        mb={6}
                    >
                        {t('description')}
                    </Typography>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={4}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    backgroundColor: 'background.paper',
                                    border: '1px solid rgba(0,191,255, 0.2)',
                                }}
                            >
                                <Box display={"flex"}
                                    flexDirection={"row"}
                                >
                                    <Typography
                                        variant="h6"
                                        align="center"
                                        fontWeight={700}
                                        mr={2}
                                        color="text.secondary"
                                    >
                                        {t('missionTitle')}
                                    </Typography>
                                    {/* <Typography
                                        variant="h6"
                                        align="center"
                                        fontWeight={700}
                                        sx={{ background: (theme) => theme.palette.primary.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                                    >
                                        {t('missionTitle2')}
                                    </Typography> */}
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                    {t('missionText')}
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Paper
                                elevation={4}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    backgroundColor: 'background.paper',
                                    border: '1px solid rgba(0,191,255, 0.2)',
                                }}
                            >
                                <Box display={"flex"}
                                    flexDirection={"row"}
                                >
                                    <Typography
                                        variant="h6"
                                        align="center"
                                        fontWeight={700}
                                        mr={2}
                                        color="text.secondary"
                                    >
                                        {t('visionTitle')}
                                    </Typography>
                                    {/* <Typography
                                        variant="h6"
                                        align="center"
                                        fontWeight={700}
                                        sx={{ background: (theme) => theme.palette.primary.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                                    >
                                        {t('visionTitle2')}
                                    </Typography> */}
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                    {t('visionText')}
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </motion.div>
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
                        {/* <Typography
                            variant="h4"
                            align="center"
                            fontWeight={700}
                            mb={6}
                            sx={{ background: (theme) => theme.palette.primary.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                        >
                            {t('teamTitle2')}
                        </Typography> */}
                    </Box>
                </motion.div>
                <Grid container spacing={3} justifyContent="center" wrap="nowrap" alignItems="stretch">
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
                                        backgroundColor: 'background.paper',
                                        borderBottom: '5px solid rgba(0,191,255,0.9)',
                                        boxShadow: '0 0 0 1px rgba(0,191,255,0.2)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.03)',
                                            boxShadow: '0 0 15px rgba(0,191,255,0.4)'
                                        }
                                    }}
                                >
                                    {/* Imagen de fondo */}
                                    <Box
                                        sx={{
                                            height: 240,
                                            width: '100%',
                                            backgroundImage: `url(../images/ceo${i + 1}.HEIC)`, // Asegurate de tener /images/ceo1.jpg, ceo2.jpg, etc.
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    />

                                    {/* Contenido */}
                                    <Box sx={{ p: 3 }}>
                                        <Typography variant="subtitle1" fontWeight={700}>
                                            {ceo.name}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {ceo.role}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" mt={1}>
                                            {ceo.bio}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" mt={1} fontWeight={700}>
                                            {ceo.commitment}
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
