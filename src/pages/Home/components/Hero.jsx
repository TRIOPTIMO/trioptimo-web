import { Box, Typography, Button, Stack } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import TypingTitle from "./TypingTitle";
import GlobalBackground from './GlobalBackground';
import VantaBackground from "./VantaBackground";

export default function Hero() {
  const { t } = useTranslation("hero");
  return (
    <Box
      sx={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
        backgroundColor: "transparent",
        color: 'text.primary',
      }}
    >

      <GlobalBackground />
      {/* <VantaBackground /> */}
      <Stack spacing={4} sx={{ mx: 'auto', color: 'text.secondary' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TypingTitle />
          <Typography
            variant="subtitle1"
            sx={{ mx: 'auto', width: { xs: "380px", md: "1000px" }, fontSize: { xs: "1rem", md: "1.5rem" }, my: 6, color: 'text.primary' }}
          >
            {t("description1")}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ mx: 'auto', width: { xs: "380px", md: "1000px" }, fontSize: { xs: "1rem", md: "1rem" }, my: 6, color: 'text.tertiary' }}
          >
            {t("description2")}
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/contact"
            sx={{
              px: 5,
              py: 1.5,
              mt: 3,
              fontWeight: 'bold',
              fontSize: '1rem',
              borderRadius: '999px',
              bgcolor: 'primary.main',
              color: '#000',
              '&:hover': {
                bgcolor: 'secondary.main',
              },
            }}
          >
            {t("cta")}
          </Button>
        </motion.div>
      </Stack>
    </Box>
  );
}
