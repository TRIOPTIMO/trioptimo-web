import {
    TextField,
    Button,
    Stack,
    Container
} from '@mui/material';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Form() {
    const { t } = useTranslation('contact');
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
          <Stack
            spacing={3}
            sx={{
              width: { xs: "100%", sm: "80%", md: "60%" },
              margin: "0 auto",
            }}
          >
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
                  backgroundColor: 'colors.white',
                  borderRadius: 1,
                  boxShadow: '0 4px 12px rgba(20, 33, 61, 0.2)',
                  '& .MuiInputBase-input': {
                    color:"colors.darkBlue"
                  },
                }}
                fullWidth
              />
            ))}

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: ' #FCA311',
                  color: '#fff',
                  fontWeight: 'bold',
                  boxShadow: '0 8px 24px rgba(20, 33, 61, 0.2)',
                  borderRadius: 3,
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: 'rgb(206, 134, 17)',
                    boxShadow: '0 12px 30px rgba(20, 33, 61, 0.2)',
                  },
                }}
              >
                {t('send')}
              </Button>
            </motion.div>
          </Stack>
        </form>
      </motion.div>
    </Container>
  );
}
