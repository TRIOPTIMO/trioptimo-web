import { useState } from 'react';
import { useLayoutEffect, useRef } from 'react';
import { Box, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const TypingTitle = ({ logoSrc, logoAlt = "Logo" }) => {
  const logoRef = useRef();
  const [logoSize, setLogoSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (logoRef.current) {
      setLogoSize({
        width: logoRef.current.offsetWidth,
        height: logoRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      <Stack
        direction= "row"
        spacing={0}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box
            component="img"
            ref={logoRef}
            src={logoSrc || "/images/trioptimo1.png"}
            alt={logoAlt}
            sx={{
              height: "auto",
              maxHeight: {
                xs: 30,
                sm: 40,
                md: 80,
              },
              mb: { md: 0, xs: 10 },
            }}
          />
        </motion.div>
        <Box
          component={motion.img}
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, ease: "easeOut" }}
          ref={logoRef}
          src={logoSrc || "/images/trioptimo2.png"}
          alt={logoAlt}
          sx={{
            height: "auto",
            maxHeight: {
              xs: 30,
              sm: 40,
              md: 80,
            },
            mb: { md: 0, xs: 10 },
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box
            component="img"
            ref={logoRef}
            src={logoSrc || "/images/trioptimo3.png"}
            alt={logoAlt}
            sx={{
              height: "auto",
              maxHeight: {
                xs: 30,
                sm: 40,
                md: 80,
              },
              mb: { md: 0, xs: 10 },
            }}
          />
        </motion.div>
      </Stack>
    </Box>
  );
};

export default TypingTitle;
