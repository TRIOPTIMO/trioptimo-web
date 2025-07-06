import {
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function FAQs() {
    const { t } = useTranslation('faq');

    const faqs = t('items', { returnObjects: true });
    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase()
    );

    return (
       <>
       {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <Accordion
                                sx={{
                                    background: 'linear-gradient(135deg, #ffffff, #f0f4ff)',
                                    color: 'text.secondary',
                                    mb: 3,
                                    borderRadius: 3,
                                    boxShadow: '0 4px 12px rgba(0,191,255,0.15)',
                                    border: '1px solid rgba(0,191,255,0.2)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.02)',
                                        boxShadow: '0 8px 24px rgba(0,191,255,0.3)',
                                    },
                                    '&::before': { display: 'none' },
                                }}

                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                                >
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        {faq.icon}
                                        <Typography fontWeight={600}>{t(`items.${index}.question`)}</Typography>
                                    </Stack>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="text.secondary">
                                        {t(`items.${index}.answer`)}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </motion.div>
                    ))
                ) : (
                    <Typography variant="body1" color="text.secondary">
                        {t('notFound')}
                    </Typography>
                )}
       </>
    );
}
