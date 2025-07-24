import {
  Box,
  Typography,
} from "@mui/material";
import { useTranslation } from 'react-i18next';

export default function Title() {
  const { t } = useTranslation('whychooseus');

  return (
   <Box display="flex" justifyContent="center" alignItems="center" sx={{ mx: "auto" }}>
          <Typography
            variant="h1"
            align="center"
            fontWeight={700}
            mb={6}
            color="colors.darkBlue"
            sx={{ fontSize: { xs: 35, md: 45, lg: 55 } }}
          >
            {t('title')}
          </Typography>
        </Box>
  );
}
