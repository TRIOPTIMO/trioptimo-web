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
        backgroundImage: 'url("/images/bg.webp"), linear-gradient(135deg, #000000, #931ed8)',
        opacity: 0.4,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          // background: 'radial-gradient(circle, #001aff, #00dd93)',
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
