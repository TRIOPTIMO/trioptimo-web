import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Container,
  IconButton,
} from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useMetaTags } from "../../services/useMetaTags";

export default function Contacto() {
  const { t, i18n } = useTranslation('contact');
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
    };


    try {
      const res = await fetch("https://mail-sender-0dt2.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      alert("¡Mensaje enviado exitosamente!");
      e.target.reset();
    } catch (err) {
      alert("Error al enviar el mensaje.");
    }
  };

  useMetaTags({
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: t("meta.description"),
    lang: i18n.language,
  });

  return (
    <Box sx={{ backgroundColor: "background.pages", py: 10 }}>
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight={700}
            mb={6}
            mr={2}
            color="text.secondary"
          >
            {t('title')}
          </Typography>

          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            mb={6}
          >
            {t('description')}
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              {['name', 'email', 'company', 'message'].map((field) => (
                <TextField
                  key={field}
                  name={field}
                  label={t(field)}
                  type={field === 'email' ? 'email' : 'text'}
                  variant="outlined"
                  multiline={field === 'message'}
                  rows={field === 'message' ? 4 : 1}
                  required={field !== 'company'}
                  sx={{
                    backgroundColor: 'background.paper',
                    border: '1px solid rgba(0,191,255, 0.5)',
                    borderRadius: '15px'
                  }}
                  fullWidth
                />
              ))}

              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: 'primary.main',
                  color: '#000',
                  fontWeight: 'bold',
                  '&:hover': {
                    bgcolor: 'secondary.main',
                  },
                }}
              >
                {t('send')}
              </Button>
            </Stack>
          </form>

          {/* Redes sociales */}
          <Stack direction="row" spacing={2} justifyContent="center" mt={6}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/company/tuempresa"
              target="_blank"
              rel="noopener"
              sx={{ color: 'primary.main' }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/tuempresa"
              target="_blank"
              rel="noopener"
              sx={{ color: 'primary.main' }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://twitter.com/tuempresa"
              target="_blank"
              rel="noopener"
              sx={{ color: 'primary.main' }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              component="a"
              href="mailto:info@trioptimo.com"
              sx={{ color: 'primary.main' }}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
