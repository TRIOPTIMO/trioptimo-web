import Footer from './components/Footer';
import { useTheme, useMediaQuery, AppBar, Box, Toolbar } from '@mui/material';
import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';
import ScrollToTop from "../layout/components/ScrollToTop";
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

export default function Layout({ children }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo('hero', {
          smooth: true,
          duration: 500,
          offset: -80,
        });
      }, 100);
    } else {
      scroller.scrollTo('hero', {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'colors.darkBlue',
          boxShadow: 'none',
          width: "100%",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            m: 0,
            px: { xs: 2, sm: 3, md: 4 },
            py: 1,
            width: "100%",
            boxSizing: "border-box",
            minHeight: { xs: 56, sm: 64, md: 72 },
            display: "flex",
            alignItems: "center",
          }}
        >

          <Box
            onClick={handleLogoClick}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              textDecoration: "none",
              whiteSpace: "nowrap",
              height: "100%",
              ml: 1,
              '&:hover img': {
                opacity: 0.8,
              },
            }}
          >
            <Box
              component="img"
              src="/images/logo-small.webp"
              alt="logo"
              sx={{
                height: "auto",
                maxHeight: {
                  xs: 15,
                  sm: 20,
                  md: 30,
                },
                mb: 0,
              }}
            />
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
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
          mt: 0,
          overflowX: "hidden",
        }}
      >
        {children}
      </Box>

      <ScrollToTop />
      <Footer />
    </>
  );
}
