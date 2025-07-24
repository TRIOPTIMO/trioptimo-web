import {
  Box,
  Stack,
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
    <Box name="contact" sx={{
      backgroundColor: 'colors.white',
      backgroundImage: 'url("/images/contactBg.png")', 
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover', py: 10
    }}>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        sx={{ width: '100%', px: 2 }}
      >
        {/* Columna izquierda */}
        <Stack spacing={4} sx={{ width: { xs: '100%', md: '50%' }, px: {xs: 0, md: 8} }}>
          <Box sx={{ my: "auto", mx: "auto" }}>
            <Title />
            {/* <Box
              component={motion.img}
              src="/images/contact.png"
              alt={t('title')}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              sx={{
                width: { xs: '100%', md: 500 },
                height: { xs: 250, md: 500 },
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 0,
                mx: "auto"
              }}
            /> */}
          </Box>
        </Stack>

        {/* Columna derecha */}
        <Stack spacing={4} sx={{ width: { xs: '100%', md: '50%' }, px: {xs: 0, md: 8} }}>
          <Form />
          <SocialMedia />
        </Stack>
      </Stack>
    </Box>
  );
}
