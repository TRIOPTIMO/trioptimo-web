import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

export default function CircularSegmentsIcon() {
  const circleRef = useRef(null);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  // Queremos 3 segmentos idénticos y 3 espacios idénticos
  const segmentLength = (circumference / 3) * 0.75;
  const gapLength = (circumference / 3) * 0.25;

  useEffect(() => {
    // Inicialmente el dashoffset está completo (sin mostrar nada)
    gsap.fromTo(
      circleRef.current,
      { strokeDashoffset: circumference },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.out'
      }
    );
  }, [circumference]);

  return (
     <Box
      component={motion.img}
      src="/images/icon.png"
      alt="logo"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 2, ease: "easeOut" }}
      sx={{
        height: "auto",
        maxHeight: {
          xs: 30,
          sm: 40,
          md: 40,
        },
        mb: 0,
      }}
    />
  );
}
