// src/components/GlobalBackground.jsx
import { Box } from '@mui/material';

export default function GlobalBackground() {
  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        top: 0,
        left: 0,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, #00bfff, #0a0f1c)',
          filter: 'blur(150px)',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.4,
        },
      }}
    />
  );
}
