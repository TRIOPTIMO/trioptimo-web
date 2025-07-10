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
import { Link } from 'react-router-dom';
import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';

export default function Layout({ children }) {
  const { t } = useTranslation('layout');
const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
     <Toolbar
        disableGutters
        sx={{
          m: 0,
          px: 4,
          py: 1,
        }}
      >
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1.25rem',
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

      <Box component="main">{children}</Box>

      <Footer />
    </>
  );
}
