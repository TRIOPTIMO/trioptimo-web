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
        <>
            <Grid item xs={12} md={6}>
                <Paper
                    elevation={4}
                    sx={{
                        p: 4,
                        height: '100%',
                        background: 'linear-gradient(135deg, #ffffff, #f0f4ff)',
                        borderRadius: 3,
                        boxShadow: '0 8px 24px rgba(0,191,255,0.2)',
                        border: '1px solid rgba(0,191,255,0.2)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 12px 30px rgba(0,191,255,0.4)',
                        },
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
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        {t('missionText')}
                    </Typography>
                </Paper>
            </Grid>
        </>
    );
}
