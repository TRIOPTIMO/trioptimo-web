import {
  Box,
  Container,
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMetaTags } from "../../services/useMetaTags";

import SocialMedia from "./components/SocialMedia";
import Form from "./components/Form";
import Title from "./components/Title";

export default function Contacto() {
  const { t, i18n } = useTranslation('contact');

  useMetaTags({
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: t("meta.description"),
    lang: i18n.language,
  });

  return (
    <Box name="contact" sx={{ backgroundColor: 'colors.white',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover', py: 10 }}>
      <Container  maxWidth="md">
        <Title />
        <Form />
        <SocialMedia />
      </Container>
    </Box>
  );
}
