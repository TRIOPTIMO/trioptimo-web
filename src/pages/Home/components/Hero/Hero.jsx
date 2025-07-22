import { Box, Typography, Stack } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import TypingTitle from "./components/TypingTitle";
import GlobalBackground from './components/GlobalBackground';
import Statitics from './components/Statitics';
import CallToAction from './components/CallToAction';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const { t } = useTranslation("hero");

  const desc1Ref = useRef(null);

  const scrambleText = (element, finalText, duration = 2) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const iterations = 20;
    let frame = 0;

    const scrambleInterval = setInterval(() => {
      const scrambled = finalText
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < (frame / iterations) * finalText.length) {
            return char;
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      element.textContent = scrambled;

      frame++;
      if (frame > iterations) {
        clearInterval(scrambleInterval);
        element.textContent = finalText;
      }
    }, (duration * 1000) / iterations);
  };

  useEffect(() => {
    scrambleText(desc1Ref.current, t("description1"), 2);
  }, [t]);

  return (
    <>
      <Box
        name="hero"
        sx={{
          minHeight: { md: '90vh', sm: '80vh', xs: '100vh', lg: '100vh' },
          width: { sm: '30%', md: '100%' },
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 2,
          backgroundColor: "transparent",
          color: 'colors.white',
        }}
      >

        <GlobalBackground />

        <Stack
          id="infoHero"
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{
            mx: 'auto',
            color: 'colors.white',
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {/* Columna izquierda: TypingTitle */}
          <TypingTitle />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ flex: 1, minWidth: 280 }}
          >
            {/* Columna derecha: textos + CTA */}
            <Box
              sx={{
                flex: 1.5,
                minWidth: 300,
                px: { xs: 0, md: 4 },
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <Typography
                ref={desc1Ref}
                variant="subtitle1"
                sx={{
                  width: "100%",
                  fontSize: { xs: "1.5rem", md: "1.5rem", lg: "3rem" },
                  my: { xs: 4, sm: 2, md: 6 },
                  color: 'colors.white'
                }}
              >
                {t("description1")}
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{
                  width: "100%",
                  fontSize: { xs: "1rem", md: "1rem", lg: "1.5rem" },
                  my: { xs: 4, sm: 2, md: 6 },
                  color: 'colors.grey'
                }}
              >
                {t("description2")}
              </Typography>

              <CallToAction />
            </Box>
          </motion.div>
        </Stack>


      </Box>
      {/* <Statitics /> */}
    </>
  );
}
