import {
    TextField,
    Button,
    Stack,
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
        <>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >

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
                                    background: 'linear-gradient(135deg, #ffffff, #f0f4ff)',
                                    borderRadius: 1,
                                    boxShadow: '0 4px 12px rgba(0,191,255,0.2)',
                                    '& fieldset': {
                                        borderColor: 'rgba(0,191,255,0.5)',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#00bfff',
                                    },
                                    '& .MuiInputBase-input': {
                                        color: 'text.primary',
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
                                    background: 'linear-gradient(90deg, #00bfff, #6a5acd)',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    boxShadow: '0 8px 24px rgba(0,191,255,0.3)',
                                    borderRadius: 3,
                                    px: 4,
                                    py: 1.5,
                                    '&:hover': {
                                        background: 'linear-gradient(90deg, #6a5acd, #00bfff)',
                                        boxShadow: '0 12px 30px rgba(0,191,255,0.5)',
                                    },
                                }}
                            >
                                {t('send')}
                            </Button>
                        </motion.div>

                    </Stack>
                </form>
            </motion.div>
        </>
    );
}
