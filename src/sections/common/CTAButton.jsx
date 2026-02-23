import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function CTAButton({ mode }) {
  const { t } = useTranslation();

  return (
    <Button
      href="#contacto"
      variant="contained"
      color="tertiary"
      aria-label={t("cta.aria")}
      sx={{
        ml: 1,
        borderRadius: 999,
        px: 2.8,
        py: 0.7,
        textTransform: "none",
        fontWeight: 600,
        color: "white",
        "&:hover": {
          backgroundColor: "tertiary.hover",
        },
      }}
    >
      {t("cta.startProject")}
    </Button>
  );
}