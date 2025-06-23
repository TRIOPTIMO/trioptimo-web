// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0a0f1c',
      paper: '#131a2b',
    },
    primary: {
      main: '#00bfff',
      gradient: 'linear-gradient(to right, #00bfff 0%, #5c42ff 50%, #8a2be2 100%)',
    },
    secondary: {
      main: '#009acd',
    },
    text: {
      primary: '#ffffff',
      secondary: '#c0c0c0',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontFamily: 'Audiowide, sans-serif',
      fontWeight: 400, // Audiowide solo tiene 1 peso
    },
    h2: {
      fontFamily: 'Audiowide, sans-serif',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'Audiowide, sans-serif',
      fontWeight: 400,
    },
    h4: {
      fontFamily: 'Audiowide, sans-serif',
      fontWeight: 400,
    },
    h5: {
      fontFamily: 'Audiowide, sans-serif',
      fontWeight: 400,
    },
    h6: {
      fontFamily: 'Audiowide, sans-serif',
      fontWeight: 400,
    },
    body1: {
      fontFamily: 'Inter, sans-serif',
    },
    body2: {
      fontFamily: 'Inter, sans-serif',
    },
    button: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
