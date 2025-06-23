import Footer from '../components/Footer';
import { Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Layout({ children }) {
  const { i18n, t } = useTranslation('layout');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const languages = [
    { code: 'es', label: 'Español', flag: 'https://flagcdn.com/24x18/es.png' },
    { code: 'en', label: 'English', flag: 'https://flagcdn.com/24x18/gb.png' },
  ];

  const navItems = [
    { label: t('home'), to: `/` },
    { label: t('services'), to: `/services` },
    { label: t('aboutUs'), to: `/aboutus` },
    { label: t('contact'), to: `/contact` },
    { label: t('faq'), to: `/faq` }
  ];

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          mt: isMobile ? 0 : '30px',
          mx: isMobile ? 0 : 'auto',
          width: isMobile ? '100%' : '50%',
          borderRadius: isMobile ? 0 : '30px',
          backdropFilter: 'blur(10px)',
          backgroundImage: isMobile ? 0 : `radial-gradient(ellipse at top, rgba(0,191,255,0.25), transparent 70%)`,
          backgroundColor: isMobile ? 'transparent' : 'rgba(43, 43, 92, 0.5)'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', px: 2, py: 1 }}>
            {/* Logo o nombre */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.25rem',
                background: (theme) => theme.palette.text.primary, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}
            >
              {t('title')}
            </Typography>

            {/* Desktop Nav */}
            {!isMobile && (
              <Stack direction="row" spacing={3}>
                {navItems.map(({ label, to }) => (
                  <Button
                    key={to}
                    component={Link}
                    to={to}
                    sx={{
                      color: 'white',
                      fontWeight: location.pathname === to ? 'bold' : 700,
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {label}
                  </Button>
                ))}
                <Box sx={{ ml: 2 }}>
                  <Button
                    onClick={handleMenuClick}
                    sx={{
                      color: 'white',
                      textTransform: 'none',
                      fontWeight: 600,
                      mt: 0.7
                    }}
                    endIcon={<ArrowDropDownIcon />}
                  >
                    <LanguageIcon width={24} height={18}></LanguageIcon>

                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      sx: {
                        backgroundColor: 'background.paper',
                        color: 'text.primary',
                        mt: 1,
                      },
                    }}
                  >
                    {languages.map(({ code, label, flag }) => (
                      <MenuItem
                        key={code}
                        onClick={() => handleLanguageChange(code)}
                        selected={i18n.language === code}
                      >
                        <span style={{ marginRight: 8 }}>
                          <img
                            src={flag}
                          />
                        </span> {label}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Stack>
            )}

            {/* Mobile Menu Icon */}
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
                        <span role="img" aria-label="ES" style={{ fontSize: 22 }}>🇪🇸</span>
                      </IconButton>
                      <IconButton onClick={() => handleLanguageChange('en')} aria-label="English">
                        <span role="img" aria-label="EN" style={{ fontSize: 22 }}>🇺🇸</span>
                      </IconButton>
                    </Stack>
                  </Box>
                </Drawer>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Contenido */}
      <Box component="main">{children}</Box>

      <Footer />
    </>
  );
}
