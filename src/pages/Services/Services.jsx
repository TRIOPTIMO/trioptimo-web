import {
  Box,
  Container,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useMetaTags } from "../../services/useMetaTags";

import BuildIcon from '@mui/icons-material/Build';
import MemoryIcon from '@mui/icons-material/Memory';
import InsightsIcon from '@mui/icons-material/Insights';
import SensorsIcon from '@mui/icons-material/Sensors';

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

  const servicios = [
    {
      title: t('items.0.title'),
      description: t('items.0.description'),
      icon: <BuildIcon />,
    },
    {
      title: t('items.1.title'),
      description: t('items.1.description'),
      icon: <SensorsIcon />,
    },
    {
      title: t('items.2.title'),
      description: t('items.2.description'),
      icon: <InsightsIcon />,
    },
    {
      title: t('items.3.title'),
      description: t('items.3.description'),
      icon: <MemoryIcon />,
    },
  ];

  return (
    <Box name="services" sx={{
      // backgroundImage: `url("/images/services.jpg")`,
      backgroundColor: '#fff', 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover', py: 10
    }}>
      <Container>
        <Title />
        <ServicesComponent items={servicios} />
      </Container>
    </Box>
  );
}
