import { Box, Typography, Stack } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import Title from "./components/Title";
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
          minHeight: { xs: '60vh', sm: '90vh', md: '90vh', lg: '100vh' },
          width: '100%',
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 2,
          backgroundColor: "colors.white",
          color: 'colors.white',
          position: 'relative',
        }}
      >
        <GlobalBackground />

        <Stack
          id="infoHero"
          direction={{ xs: "column-reverse", md: "row", lg: "row" }}
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
            {/* <Title/> */}
            <Slogans />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              style={{ flex: 1, minWidth: 280 }}
            >
              <Typography
                variant="h2"
                align="center"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.1rem", lg: "1.5rem" },
                  my: { xs: 3, sm: 4 },
                  mx: "auto",
                  color: 'colors.darkBlue',
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
