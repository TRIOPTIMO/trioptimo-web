import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const stats = [
  { value: 50, suffix: '+'},
  { value: 5, suffix: '+'},
  { value: 120, suffix: '+'},
  { value: 15, suffix: ''},
];

export default function StatsSection() {
  const { t } = useTranslation('statistics');
  const labels = t('stats', { returnObjects: true }); 
  console.log(typeof labels);
  return (
    <Box sx={{ py: 10, backgroundColor: 'transparent' }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    backgroundColor: 'transparent',
                    borderRadius: 3,
                  }}
                >
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    sx={{
                      background: 'linear-gradient(45deg, #FFD700,rgb(255, 145, 0))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block',
                    }}
                  >
                    <CountUp end={stat.value} duration={4} suffix={stat.suffix} />
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mt: 1,
                      color: 'text.secondary',
                      fontWeight: 500,
                    }}
                  >
                    {labels[i]}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
