import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';

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
    <Box sx={{ width: 18, height: 18 }}>
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <circle
          ref={circleRef}
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#FCA311"
          strokeWidth="12"
          strokeDasharray={`${segmentLength} ${gapLength}`}
          strokeLinecap="butt"
          transform="rotate(-195 50 50)" // Rota para que quede con un corte arriba
          strokeDashoffset={circumference}
        />
      </svg>
    </Box>
  );
}
