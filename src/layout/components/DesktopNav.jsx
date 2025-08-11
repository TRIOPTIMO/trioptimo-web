import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Stack, useMediaQuery, useTheme } from '@mui/material';
import LanguageSwitch from './LanguageSwitch';
import { Link as ScrollLink, scroller } from 'react-scroll';

export default function DesktopNav() {
  const { t } = useTranslation('layout');
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: t('services'), href: 'services' },
    { label: t('faq'), href: 'faq' },
    { label: t('aboutUs'), href: 'aboutus' },
    { label: t('contact'), href: 'contact' },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      // Ir a home y luego hacer scroll
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(id, {
          smooth: true,
          duration: 500,
          offset: -80,
        });
      }, 100);
    } else {
      // Ya estamos en home, hacer scroll directo
      scroller.scrollTo(id, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  };

  return (
    <>
      {!isMobile && (
        <Stack direction="row" spacing={3}>
          {navItems.map(({ label, href }) => (
            <Button
              key={href}
              aria-label="Menu"
              onClick={() => handleNavClick(href)}
              sx={{
                color: 'white',
                fontWeight: 700,
                fontSize: '1.1rem',
                textTransform: 'none',
                '&:hover': {
                  opacity: 0.8,
                  backgroundColor: 'transparent',
                },
              }}
            >
              {label}
            </Button>
          ))}
          <LanguageSwitch />
        </Stack>
      )}
    </>
  );
}
