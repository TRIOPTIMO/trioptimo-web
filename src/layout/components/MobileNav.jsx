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
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function MobileNav() {
  const { i18n, t } = useTranslation('layout');

  const navItems = [
    { label: t('home'), to: `/` },
    { label: t('services'), to: `/services` },
    { label: t('aboutUs'), to: `/aboutus` },
    { label: t('contact'), to: `/contact` },
    { label: t('faq'), to: `/faq` }
  ];

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    handleClose();
  };


  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <>
            {isMobile && (
              <>
                <IconButton
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
                      background: 'background.paper', // o '#0a0f1c' o 'rgba(0,0,0,0.8)'
                      color: 'text.primary',                // asegura que el texto sea visible
                      backdropFilter: 'blur(5px)',        // opcional: efecto de glassmorphism
                      borderLeft: '1px solid rgba(255,255,255,0.1)', // opcional
                    },
                  }}
                >
                  <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                    <List>
                      {navItems.map(({ label, to }) => (
                        <ListItem button component={Link} to={to} key={to} sx={{
                          '&:hover': {
                            backgroundColor: 'rgba(0,191,255,0.1)', // azul suave al hover
                          },
                        }}>
                          <ListItemText primary={label} sx={{ color: '#fff' }} />
                        </ListItem>
                      ))}
                    </List>
                    <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                      <IconButton onClick={() => handleLanguageChange('es')} aria-label="Español">
                        <img aria-label="ES"  src='https://flagcdn.com/24x18/es.png'  />
                      </IconButton>
                      <IconButton onClick={() => handleLanguageChange('en')} aria-label="English">
                        <img aria-label="EN"  src='https://flagcdn.com/24x18/gb.png'  />
                      </IconButton>
                    </Stack>
                  </Box>
                </Drawer>
              </>
            )}
    </>
  );
}
