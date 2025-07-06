import {
    Box,
    Typography,
    Button,
} from '@mui/material';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function CTA() {
    const { t } = useTranslation('faq');
    return (
        <>
            <Box textAlign="center">
                <Typography variant="h6" color="text.secondary" fontWeight={600} mb={2}>
                    {t('ctaTitle')}
                </Typography>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Button
                        variant="contained"
                        href="/contact"
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
                        {t('ctaButton')}
                    </Button>
                </motion.div>
            </Box>
        </>
    );
}
