import {
  Box,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import Title from "./components/Title";
import ServicesCards from "./components/ServicesCards";

export default function Services() {
  const { t, i18n } = useTranslation('services');

  return (
    <Box name="services" sx={{
      backgroundColor: 'colors.white',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url("/images/servicesBg.webp")',
      fetchPriority: "high",
      decoding: "async",
      backgroundSize: 'cover',
      py: 10,
      mx: 0
    }}>
      <Title />
      <ServicesCards />
    </Box>
  );
}
