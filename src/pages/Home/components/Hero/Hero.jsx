import { Box, Typography, Stack } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import LogoType from "./components/LogoType";
import Slogans from "./components/Slogans";
import GlobalBackground from './components/GlobalBackground';
import CallToAction from './components/CallToAction';

export default function Hero() {
  const { t } = useTranslation("hero");

  return (
    <>
      <Box
        name="hero"
        sx={{
          minHeight: { xs: '100vh', sm: '90vh', md: '90vh', lg: '100vh' },
          width: '100%',
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 2,
          backgroundColor: "transparent",
          color: 'colors.white',
          position: 'relative',
        }}
      >
        <GlobalBackground />

        <Stack
          id="infoHero"
          direction={{ xs: "column", md: "row", lg: "row" }}
          spacing={4}
          sx={{
            mx: 'auto',
            width: '100%',
            // maxWidth: "1200px",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            zIndex: 2
          }}
        >
          {/* Columna izquierda */}
          {/* <Box
            sx={{
              flex: 1,
              minWidth: { xs: '100%', md: '40%', lg: '40%' },
              mb: { xs: 4, md: 0 }
            }} >
            <LogoType />
          </Box> */}

          {/* Columna derecha */}

          <Box
            sx={{
              flex: 1.5,
              px: { xs: 0, md: 4 },
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "center" },
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            <Slogans />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              style={{ flex: 1, minWidth: 280 }}
            >
              <Typography
                variant="subtitle2"
                align="center"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", lg: "1.5rem" },
                  my: { xs: 3, sm: 4 },
                  mx: "auto",
                  color: 'colors.grey',
                  maxWidth: { xs: "100%", md: "90%", lg: "80%" }
                }}
              >
                {t("description")}
              </Typography>
            </motion.div>

            <CallToAction />
          </Box>
        </Stack>
      </Box>
    </>
  );
}
