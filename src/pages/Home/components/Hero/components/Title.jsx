import { Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Title() {
  const { t } = useTranslation("hero");

  return (
    <>
      <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              style={{ flex: 1, minWidth: 280 }}
            >
              <Typography
                variant="h1"
                align="center"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3rem", lg: "4rem" },
                  fontWeight: 700,
                  mt: { xs: 10, sm: 15 },
                  mx: "auto",
                  color: 'colors.secondary',
                  maxWidth: { xs: "100%", md: "90%", lg: "80%" }
                }}
              >
                {t("title")}
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
              style={{ flex: 1, minWidth: 280 }}
            >
              <Typography
                variant="h2"
                align="center"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem", lg: "3rem" },
                  fontWeight: 700,
                  my: { xs: 3, sm: 4 },
                  mx: "auto",
                  color: 'colors.secondary',
                  maxWidth: { xs: "100%", md: "90%", lg: "100%" }
                }}
              >
                {t("subtitle")}
              </Typography>
            </motion.div>
    </>
  );
}
