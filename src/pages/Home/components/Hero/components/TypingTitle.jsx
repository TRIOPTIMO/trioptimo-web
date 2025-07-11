import { Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const TypingTitle = () => {
  const { t } = useTranslation("hero");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      <Typography
        variant="h1"
        fontWeight={500}
        color="text.primary"
        sx={{
          fontSize: { xs: "4rem", md: "12.5rem" },
          mb: {md: 0, xs: 10},
        }}
      >
        {t("title1")}
      </Typography>

      <Typography
        variant="h1"
        fontWeight={500}
        color="text.primary"
        sx={{
          fontSize: { xs: "4rem", md: "12.5rem" },
          mt: 0,
        }}
      >
         {t("title2")}
      </Typography>
    </Box>
  );
};

export default TypingTitle;
