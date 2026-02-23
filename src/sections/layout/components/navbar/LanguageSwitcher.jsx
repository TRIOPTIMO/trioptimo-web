import { useEffect, useMemo, useState } from "react";
import i18n from "i18next";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const STORAGE_KEY = "lang";

// Añade idiomas aquí
const LANGS = [
  { code: "es", label: "Español", short: "ES" },
  { code: "en", label: "English", short: "EN" },
];

export default function LanguageSwitcher() {
  const initialLang = useMemo(() => {
    if (typeof window === "undefined") return i18n.resolvedLanguage || i18n.language;
    return window.localStorage.getItem(STORAGE_KEY) || i18n.resolvedLanguage || i18n.language;
  }, []);

  const [lang, setLang] = useState(initialLang);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  useEffect(() => {
    const current = i18n.resolvedLanguage || i18n.language;
    if (lang && current !== lang) i18n.changeLanguage(lang);

    const onChanged = (lng) => setLang(lng);
    i18n.on("languageChanged", onChanged);
    return () => i18n.off("languageChanged", onChanged);
  }, [lang]);

  const currentLang = useMemo(() => {
    const base = (lang || "").split("-")[0];
    return LANGS.find((l) => l.code === base) || LANGS[0];
  }, [lang]);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const change = (lng) => {
    i18n.changeLanguage(lng);
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, lng);
    handleClose();
  };

  return (
    <Box>
      <Button
        onClick={handleOpen}
        aria-label="Selector de idioma"
        aria-haspopup="menu"
        aria-expanded={open ? "true" : undefined}
        endIcon={<KeyboardArrowDownIcon />}
        startIcon={<LanguageIcon />}
        disableRipple
        sx={(theme) => ({
          borderRadius: 999,
          px: 1.5,
          py: 0.8,
          border: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
          textTransform: "none",
          fontWeight: 800,
          color: "text.primary",
          transition: "all .2s ease",
          "&:hover": {
            bgcolor: theme.palette.action.hover,
            borderColor: "transparent",
          },
          "&:focus-visible": {
            outline: `2px solid ${theme.palette.secondary.main}`,
            outlineOffset: 2,
          },
        })}
      >
        <Typography component="span" sx={{ fontSize: "0.85rem" }}>
          {currentLang.short}
        </Typography>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-label": "Opciones de idioma",
          role: "menu",
        }}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 2,
            overflow: "hidden",
            minWidth: 190,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {LANGS.map((l) => {
          const active = (lang || "").startsWith(l.code);

          return (
            <MenuItem
              key={l.code}
              onClick={() => change(l.code)}
              selected={active}
              aria-checked={active ? "true" : "false"}
              role="menuitemradio"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                py: 1,
              }}
            >
              <ListItemIcon sx={{ minWidth: 28 }}>
                {active ? <CheckIcon fontSize="small" /> : <span />}
              </ListItemIcon>

              <Typography sx={{ fontWeight: active ? 800 : 600 }}>
                {l.label}
              </Typography>

              <Typography sx={{ ml: "auto", color: "text.secondary", fontWeight: 800, fontSize: "0.8rem" }}>
                {l.short}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
}