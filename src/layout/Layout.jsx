import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
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
      <AppBar
        position="relative"
        elevation={0}
        sx={{
          my: isMobile ? 0 : 1,
          mx: isMobile ? 0 : 'auto',
          width: isMobile ? '100%' : '80%',
          backgroundColor: 'transparent'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', px: 2, py: 1 }}>
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

            <DesktopNav />
            <MobileNav />
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main">{children}</Box>

      <Footer />
    </>
  );
}
