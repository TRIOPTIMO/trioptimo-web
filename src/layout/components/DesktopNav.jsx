import { useTranslation } from 'react-i18next';

import {
  Button,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitch from './LanguageSwitch';

export default function DesktopNav() {
  const { t } = useTranslation('layout');


  const navItems = [
    { label: t('home'), to: `/` },
    { label: t('services'), to: `/services` },
    { label: t('aboutUs'), to: `/aboutus` },
    { label: t('contact'), to: `/contact` },
    { label: t('faq'), to: `/faq` }
  ];

  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
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
                <LanguageSwitch/>
              </Stack>
            )}
    </>
  );
}
