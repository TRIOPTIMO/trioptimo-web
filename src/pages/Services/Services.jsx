import {
  Box,
  Container,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMetaTags } from "../../services/useMetaTags";

import Title from "./components/Title";
import ServicesCards from "./components/ServicesCards";

export default function Services() {
  const { t, i18n } = useTranslation('services');

  useMetaTags({
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: t("meta.description"),
    lang: i18n.language,
  });

  return (
    <Box name="services" sx={{
      backgroundColor: 'colors.white', 
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url("/images/servicesBg.png")', 
      backgroundSize: 'cover', 
      py: 10,
      mx: 0
    }}>
        <Title />
        <ServicesCards />
    </Box>
  );
}
