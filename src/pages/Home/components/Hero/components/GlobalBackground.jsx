import { Box, Stack, useTheme, useMediaQuery } from '@mui/material';
import { motion } from "framer-motion";

export default function GlobalBackground() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const GlowBox = ({ top, left, bottom, right, width, height, color }) => (
    <Box
      sx={{
        position: "absolute",
        top,
        left,
        bottom,
        right,
        width,
        height,
        backgroundColor: color,
        borderRadius: "50%",
        filter: "blur(48px)",
        zIndex: 0,
      }}
    />
  );
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#fff",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.7,
          zIndex: 0,
        }}
      />

      {!isMobile && (
        <Stack>
          <GlowBox top="5%" left="5%" width={256} height={256} color="rgba(0, 221, 147, 0.3)" />
          <GlowBox top="1%" left="95%" width={256} height={256} color="rgba(147, 30, 216, 0.3)" />
          <GlowBox bottom="-10%" left="1%" width={384} height={384} color="rgba(0, 26, 255, 0.1)" />
        </Stack>
      )}

    </>
  );
}