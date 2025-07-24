import React, { useRef } from 'react';
import { Box, Button } from '@mui/material';
import { gsap } from 'gsap';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function MyButton() {
  const wrapperRef = useRef(null);
  const shineRef = useRef(null);
  const { t } = useTranslation("aboutUs");

  const handleEnter = () => {
    gsap.fromTo(
      shineRef.current,
      { x: '-120%' },
      {
        x: '250%',
        duration: 1,
        ease: 'power2.out',
      }
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        style={{ flex: 1, minWidth: 280 }}
      >
        <Box
          ref={wrapperRef}
          component="span"
          onMouseEnter={handleEnter}
          sx={{
            display: 'inline-flex',
            position: 'relative',
            borderRadius: '999px',
            overflow: 'hidden',
            backgroundColor: 'colors.primary',
            height: { lg: '80px', md: "40px", sm: "30px", xs: "80px" },
            width: { lg: "25vw", md: "25vw", sm: "25vw" } ,
            cursor: 'pointer',
            my: { xs: 3, sm: 1, md: 1, lg: 3 },
            mx: "auto"
          }}
        >
          <Button
            variant="text"
            aria-label="Go to contact"
            size="large"
            component={ScrollLink}
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            to="contact"
            sx={{
              px: 5,
              fontWeight: 'bold',
              fontSize: { xs: '1rem', md: '1.5rem' },
              borderRadius: '999px',
              bgcolor: 'transparent',
              color: 'white',
              my: "auto",
              mx: "auto",
              textAlign: "center",
              boxShadow: 'none',
              height: { lg: '48px' },
              minHeight: 'unset',
              lineHeight: 'normal',
              '&:hover': {
                bgcolor: 'transparent',
              },
            }}
          >
            {t("CTACommitment")}
          </Button>

          <Box
            ref={shineRef}
            sx={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '50%',
              height: '100%',
              background: `linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          )`,
              transform: 'skewX(-20deg)',
              pointerEvents: 'none',
            }}
          />
        </Box>
      </motion.div>
    </>

  );
}
