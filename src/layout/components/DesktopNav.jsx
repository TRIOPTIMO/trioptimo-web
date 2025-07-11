import { useTranslation } from 'react-i18next';

import {
  Button,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import LanguageSwitch from './LanguageSwitch';
import { Link as ScrollLink } from 'react-scroll';

export default function DesktopNav() {
  const { t } = useTranslation('layout');
  const navItems = [
    { label: t('services'), href: `#services` },
    { label: t('aboutUs'), href: `#aboutus` },
    { label: t('faq'), href: `#faq` },
    { label: t('contact'), href: `#contact` },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {!isMobile && (
        <Stack direction="row" spacing={3}>
          {navItems.map(({ label, href }) => {
            const id = href.replace('#', '');
            return (
              <Button
                key={href}
                component={ScrollLink}
                to={id}
                smooth={true}
                duration={500}
                offset={-80}
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  '&:hover': {
                    color: 'colors.orange',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {label}
              </Button>
            );
          })}
          <LanguageSwitch />
        </Stack>
      )}
    </>
  );
}
