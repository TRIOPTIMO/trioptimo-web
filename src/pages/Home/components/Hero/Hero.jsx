import { Box, Typography, Button, Stack } from "@mui/material";
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
        sx={{
          minHeight: {md: '100vh', sm: '90vh'},
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

        <Stack spacing={4} sx={{ mx: 'auto', color: 'colors.white' }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TypingTitle />
            <Typography
             ref={desc1Ref}
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
            
            <CallToAction/>
          </motion.div>
        </Stack>

      </Box>
      {/* <Statitics /> */}
    </>
  );
}
