import {
  Box,
  Container,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMetaTags } from "../../services/useMetaTags";

import Title from "./components/Title";
import ServicesComponent from "./components/ServicesComponent";

export default function Services() {
  const { t, i18n } = useTranslation('servicespage');

  useMetaTags({
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: t("meta.description"),
    lang: i18n.language,
  });

  return (
    <Box name="services" sx={{ backgroundColor: 'background.pages', py: 10 }}>
      <Container>
        <Title/>
        <ServicesComponent/>
      </Container>
    </Box>
  );
}
