import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

const TypingTitle = () => {
  const { t } = useTranslation("hero");
  // const fullText = t("title2"); // El texto con efecto
  // const [typedText, setTypedText] = useState("");

  // useEffect(() => {
  //   if (!fullText) return;
  //   let index = 0;
  //   const interval = setInterval(() => {
  //     setTypedText((prev) => prev + fullText.charAt(index));
  //     index++;
  //     if (index >= fullText.length) clearInterval(interval);
  //   }, 120); // velocidad del typing
  //   return () => clearInterval(interval);
  // }, [fullText]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        flexWrap: "wrap",
        gap: 1
      }}
    >
      <Typography
        variant="h1"
        fontWeight={500}
        sx={{
          fontSize: { xs: "4rem", md: "15rem" },
          mb: 0,
        }}
      >
        {t("title1")}
      </Typography>

      <Typography
        variant="h1"
        fontWeight={500}
        sx={{
          fontSize: { xs: "4rem", md: "15rem" },
          mt: 0,
          whiteSpace: "nowrap",
          background: (theme) => theme.palette.primary.gradient,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {/* {typedText} */}
         {t("title2")}
      </Typography>
    </Box>
  );
};

export default TypingTitle;
