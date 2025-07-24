import {
  TextField,
  Button,
  Stack,
  Box,
  Container
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import React, { useRef } from 'react';

export default function Form() {
  const wrapperRef = useRef(null);
  const shineRef = useRef(null);

    const handleEnter = () => {
      gsap.fromTo(
        shineRef.current,
        { x: '-120%' },
        {
          x: '250%',
          duration: 1,
          ease: 'power2.out',
        }
      );
    };

  const { t } = useTranslation('contact');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      lastName: formData.get('lastName'),
      company: formData.get('company'),
      country: formData.get('country'),
      city: formData.get('city'),
      jobTitle: formData.get('jobTitle'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    e.preventDefault();

    // const name = formData.get('name');
    // const email = formData.get('email');
    // const lastName = formData.get('lastName');
    // const phone = formData.get('phone');

    // if (!name || name.length < 2) {
    //   alert("El nombre es obligatorio y debe tener al menos 2 caracteres.");
    //   return;
    // }

    // if (!lastName || lastName.length < 2) {
    //   alert("El apellido es obligatorio y debe tener al menos 2 caracteres.");
    //   return;
    // }

    // if (phone && !/^\d{7,}$/.test(phone)) {
    //   alert("El teléfono debe tener al menos 7 dígitos numéricos.");
    //   return;
    // }

    // if (!email || !email.includes("@")) {
    //   alert("Ingrese un email válido.");
    //   return;
    // }

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

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: "100%" }}
      >
        <form onSubmit={handleSubmit}>
          <Stack direction="column" spacing={2}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                name="name"
                label={t('name')}
                variant="outlined"
                required
                sx={fieldStyles}
                fullWidth
              />
              <TextField
                name="lastName"
                label={t('lastName')}
                variant="outlined"
                required
                sx={fieldStyles}
                fullWidth
              />
            </Stack>

            {/* Resto de campos */}
            <TextField
              name="company"
              label={t('company')}
              variant="outlined"
              sx={fieldStyles}
              fullWidth
            />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                name="country"
                label={t('country')}
                variant="outlined"
                required
                sx={fieldStyles}
                fullWidth
              />
              <TextField
                name="city"
                label={t('city')}
                variant="outlined"
                required
                sx={fieldStyles}
                fullWidth
              />
            </Stack>
            <TextField
              name="jobTitle"
              label={t('jobTitle')}
              variant="outlined"
              sx={fieldStyles}
              fullWidth
            />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField
                name="phone"
                label={t('phone')}
                type="tel"
                variant="outlined"
                sx={fieldStyles}
                inputProps={{
                  pattern: "[0-9]{7,}",
                }}
                fullWidth
              />
              <TextField
                name="email"
                label={t('email')}
                type="email"
                variant="outlined"
                required
                sx={fieldStyles}
                fullWidth
              />
            </Stack>
            <TextField
              name="message"
              label={t('message')}
              multiline
              rows={4}
              variant="outlined"
              required
              sx={fieldStyles}
              fullWidth
            />
          </Stack>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Box
              ref={wrapperRef}
              textAlign="center"
              component="span"
              onMouseEnter={handleEnter}
              sx={{
                display: 'inline-flex',
                position: 'relative',
                borderRadius: '999px',
                overflow: 'hidden',
                backgroundColor: 'colors.primary',
                height: '48px',
                cursor: 'pointer',
                my: { xs: 3 },
              }}
            >

              <Button
                aria-label="Send mail"
                variant="text"
                size="large"
                type="submit"
                sx={{
                  px: 5,
                  fontWeight: 'bold',
                  fontSize: { xs: '0.8rem', md: '1.5rem' },
                  borderRadius: '999px',
                  bgcolor: 'transparent',
                  color: 'white',
                  boxShadow: 'none',
                  height: '48px',
                  minHeight: 'unset',
                  lineHeight: 'normal',
                  '&:hover': {
                    bgcolor: 'transparent',
                  },
                }}
              >
                {t("send")}
              </Button>

              <Box
                ref={shineRef}
                sx={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '50%',
                  height: '100%',
                  background: 'linear-gradient( 120deg, rgba(255, 255, 255, 0) 0%,  rgba(255, 255, 255, 0.4) 50%,  rgba(255, 255, 255, 0) 100% )',
                  transform: 'skewX(-20deg)',
                  pointerEvents: 'none',
                }}
              />
            </Box>
          </motion.div>
        </form>
      </motion.div>
    </Container>
  );
}

const fieldStyles = {
  backgroundColor: 'colors.white',
  borderRadius: 1,
  boxShadow: '0 4px 12px rgba(20, 33, 61, 0.2)',
  '& .MuiInputBase-input': {
    color: "colors.darkBlue"
  },
};
