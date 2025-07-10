import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    colors: {
      black: '#000000',
      darkBlue: '#14213D',
      orange: '#FCA311',
      white: '#FFFFFF',
      grey: '#E5E5E5'
    },
    background: {
      default: '#0a0f1c',
      paper: '#f9fafb',
      pages: "#f0f2f5",
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
      secondary: '#000',
      tertiary: '#c0c0c0',
    },
  },
  typography: {
    fontFamily: 'Syne, sans-serif',
    h1: {
      fontFamily: 'Nunito, sans-serif',
    },
    h2: {
      fontFamily: 'Nunito, sans-serif',
    },
    h3: {
      fontFamily: 'Nunito, sans-serif',
    },
    h4: {
      fontFamily: 'Nunito, sans-serif',
    },
    h5: {
      fontFamily: 'Nunito, sans-serif',
    },
    h6: {
      fontFamily: 'Nunito, sans-serif',
    },
    body1: {
      fontFamily: 'Syne, sans-serif',
    },
    body2: {
      fontFamily: 'Syne, sans-serif',
    },
    button: {
      fontFamily: 'Nunito, sans-serif',
    },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
