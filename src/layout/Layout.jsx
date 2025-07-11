import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';
import { useTheme, useMediaQuery } from '@mui/material';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
} from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';
import Logo from "../layout/components/Logo";
import ScrollToTop from "../layout/components/ScrollToTop";

export default function Layout({ children }) {
  const { t } = useTranslation('layout');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(20, 33, 61, 0.7)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            m: 0,
            px: 4,
            py: 1,
          }}
        >
          <Logo />

          <Typography
            variant="h6"
            component={ScrollLink}
            to="hero"
            smooth={true}
            duration={500}
            offset={-80}
            sx={{
              color: 'colors.white',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1.25rem',
              cursor: 'pointer', // importante para mostrar que es clickeable
            }}
          >
            {t('title')}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {!isMobile && <DesktopNav />}
            {isMobile && <MobileNav />}
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{
          mt: { xs: 8, sm: 10 },
        }}
      >
        {children}
      </Box>

        <ScrollToTop/>
      <Footer />
    </>
  );
}
