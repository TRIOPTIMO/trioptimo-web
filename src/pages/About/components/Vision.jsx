import {
    Box,
    Typography,
    Grid,
    Paper,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Mision() {
    const { t } = useTranslation('aboutUs');

    return (
        <Grid item xs={12} md={6}>
            <Paper
                elevation={4}
                sx={{
                    p: 4,
                    height: '100%',
                    background: "transparent",
                    borderRadius: 3,
                    boxShadow: 0,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    gap: 3,
                }}
            >

                <Box>
                    <Typography
                        variant="h6"
                        align="left"
                        fontWeight={700}
                        color="colors.darkBlue"
                        mb={1}
                        fontSize= {35}
                    >
                        {t('visionTitle')}
                    </Typography>
                    <Typography variant="body2"  fontSize= {20} color="colors.darkBlue">
                        {t('visionText')}
                    </Typography>
                </Box>

                <Box
                    component="img"
                    src="/images/vision.webp" // ✅ CAMBIAR por tu ruta real
                    alt={t('missionTitle')}
                    sx={{
                        width: { xs: '100%', md: 250 },
                        height: { xs: 200, md: 250 },
                        objectFit: 'cover',
                        borderRadius: 2,
                        boxShadow: 0
                    }}
                />
            </Paper>
        </Grid>
    );
}

