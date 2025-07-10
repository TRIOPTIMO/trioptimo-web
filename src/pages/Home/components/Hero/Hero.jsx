import { Box, Typography, Button, Stack } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import TypingTitle from "./components/TypingTitle";
import GlobalBackground from './components/GlobalBackground';
import Statitics from './components/Statitics';

export default function Hero() {
  const { t } = useTranslation("hero");
  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
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

        <Stack spacing={4} sx={{ mx: 'auto', color: 'text.secondary' }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TypingTitle />
            <Typography
              variant="subtitle1"
              sx={{ mx: 'auto', width: { xs: "380px", md: "1200px" }, fontSize: { xs: "1rem", md: "3rem" }, my: 6, color: 'colors.white' }}
            >
              {t("description1")}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ mx: 'auto', width: { xs: "380px", md: "1000px" }, fontSize: { xs: "1rem", md: "1.5rem" }, my: 6, color: 'colors.grey' }}
            >
              {t("description2")}
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="#contact"
              sx={{
                px: 5,
                py: 1.5,
                mt: 5,
                mb: 12,
                fontWeight: 'bold',
                fontSize: '1.5rem',
                borderRadius: '999px',
                bgcolor: 'colors.orange',
                color: 'colors.white',
                '&:hover': {
                  bgcolor: 'rgb(218, 141, 18)',
                },
              }}
            >
              {t("cta")}
            </Button>
          </motion.div>
        </Stack>

      </Box>
      {/* <Statitics /> */}
    </>
  );
}
