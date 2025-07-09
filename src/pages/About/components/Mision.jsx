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
        {/* Imagen */}
        <Box
          component="img"
          src="/images/mision.png" // ✅ CAMBIAR por tu ruta real
          alt={t('missionTitle')}
          sx={{
            width: { xs: '100%', md: 250 },
            height: { xs: 200, md: 250 },
            objectFit: 'cover',
            borderRadius: 2,
            boxShadow: 0
          }}
        />

        {/* Texto */}
        <Box>
          <Typography
            variant="h6"
            align="left"
            fontWeight={700}
            color="text.secondary"
            mb={1}
          >
            {t('missionTitle')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('missionText')}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
}
