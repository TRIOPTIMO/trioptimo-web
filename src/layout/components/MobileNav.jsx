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
import { Link as ScrollLink } from 'react-scroll';

export default function MobileNav() {
  const { i18n, t } = useTranslation('layout');

  const navItems = [
    { label: t('services'), to: 'services' },
    { label: t('aboutUs'), to: 'aboutus' },
    { label: t('faq'), href: 'faq' },
    { label: t('contact'), to: 'contact' },
  ];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setDrawerOpen(false);
  };

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
                background: 'background.paper',
                color: 'text.secondary',
                backdropFilter: 'blur(5px)',
                borderLeft: '1px solid rgba(255,255,255,0.1)',
              },
            }}
          >
            <Box sx={{ width: 250 }} role="presentation">
              <List>
                {navItems.map(({ label, to }) => (
                  <ListItem
                    button
                    key={to}
                    component={ScrollLink}
                    to={to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    onClick={toggleDrawer(false)}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(0,191,255,0.1)',
                      },
                    }}
                  >
                    <ListItemText primary={label} sx={{ color: 'text.secondary' }} />
                  </ListItem>
                ))}
              </List>

              <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
                <IconButton onClick={() => handleLanguageChange('es')} aria-label="Español">
                  <img aria-label="ES" src="https://flagcdn.com/24x18/es.png" />
                </IconButton>
                <IconButton onClick={() => handleLanguageChange('en')} aria-label="English">
                  <img aria-label="EN" src="https://flagcdn.com/24x18/gb.png" />
                </IconButton>
              </Stack>
            </Box>
          </Drawer>
        </>
      )}
    </>
  );
}
