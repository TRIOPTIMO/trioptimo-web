import { Box } from '@mui/material';
import { motion } from 'framer-motion';

export default function Logo() {

  return (
    <Box
      // component={motion.img}
      src="/images/icon.webp"
      alt="logo"
      fetchPriority="high"
      decoding="async"
      // initial={{ rotate: 0 }}
      // animate={{ rotate: 360 }}
      // transition={{ duration: 2, ease: "easeOut" }}
      sx={{
        height: "auto",
        maxHeight: {
          xs: 250,
          sm: 300,
          md: 500,
        },
        mb: 0,
      }}
    />
  );
}
