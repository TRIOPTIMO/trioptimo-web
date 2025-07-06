import { Menu, MenuItem } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTranslation } from 'react-i18next';
import LanguageIcon from '@mui/icons-material/Language';

import {
  Box,
  Button,
} from '@mui/material';
import { useState } from 'react';

export default function LanguageSwitch() {
  const { i18n } = useTranslation('layout');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const languages = [
    { code: 'es', label: 'Español', flag: 'https://flagcdn.com/24x18/es.png' },
    { code: 'en', label: 'English', flag: 'https://flagcdn.com/24x18/gb.png' },
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

  return (
    <>
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
    </>
  );
}
