import { useTranslation } from 'react-i18next';
import {
  Box,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { scroller } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MobileNav() {
  const { i18n, t } = useTranslation('layout');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const location = useLocation();
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  // Aquí puedes incluir rutas internas además de secciones
  const navItems = [
    { label: t('services'), to: 'services', type: 'section' },
    { label: t('faq'), to: 'faq', type: 'section' },
    { label: t('aboutUs'), to: 'aboutus', type: 'section' },
    { label: t('contact'), to: 'contact', type: 'section' },
    { label: t('cookiesPolicy'), to: '/politica-de-cookies', type: 'page' }
  ];

  const handleNavClick = (item) => {
    setDrawerOpen(false);

    if (item.type === 'page') {
      // Navegación directa a otra ruta
      navigate(item.to);
      return;
    }

    if (location.pathname !== '/') {
      // Ir a home y luego hacer scroll
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(item.to, {
          smooth: true,
          duration: 500,
          offset: -80,
        });
      }, 100);
    } else {
      // Ya estamos en home, hacer scroll directo
      scroller.scrollTo(item.to, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  };

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setDrawerOpen(false);
  };

  return (
    <>
      {isMobile && (
        <>
          <IconButton
            aria-label="Menu"
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            ModalProps={{
              sx: {
                background: 'background.paper',
                color: 'text.secondary',
                backdropFilter: 'blur(5px)',
                borderLeft: '1px solid rgba(255,255,255,0.1)',
              },
            }}
          >
            <Box sx={{ width: 250 }} role="presentation">
              <List>
                {navItems.map((item) => (
                  <ListItem
                    button
                    aria-label={item.label}
                    key={item.to}
                    onClick={() => handleNavClick(item)}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(0,191,255,0.1)',
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      sx={{ color: 'text.secondary' }}
                    />
                  </ListItem>
                ))}
              </List>

              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                mt={2}
              >
                <IconButton
                  onClick={() => handleLanguageChange('es')}
                  aria-label="Español"
                >
                  <img
                    aria-label="ES"
                    src="https://flagcdn.com/24x18/es.png"
                    alt="ES"
                  />
                </IconButton>
                <IconButton
                  onClick={() => handleLanguageChange('en')}
                  aria-label="English"
                >
                  <img
                    aria-label="EN"
                    src="https://flagcdn.com/24x18/gb.png"
                    alt="EN"
                  />
                </IconButton>
              </Stack>
            </Box>
          </Drawer>
        </>
      )}
    </>
  );
}
