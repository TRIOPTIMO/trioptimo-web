import React from 'react';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollTopButton() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Zoom in={trigger}>
      <Fab
        onClick={handleClick}
        aria-label="Scroll to top"
        size="medium"
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          bgcolor: 'colors.primary',      
          color: 'white',
          '&:hover': {
            bgcolor: '#04be80ff',
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}
