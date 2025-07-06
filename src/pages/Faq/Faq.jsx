import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    InputBase,
    Divider,
    Button,
    Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useMetaTags } from "../../services/useMetaTags";

export default function Faq() {
    const { t, i18n } = useTranslation('faq');

    const [search, setSearch] = useState('');
    const faqs = t('items', { returnObjects: true });
    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(search.toLowerCase())
    );

    useMetaTags({
    title: t("meta.title"),
    description: t("meta.description"),
    keywords: t("meta.description"),
    lang: i18n.language,
  });

    return (
        <Box sx={{ backgroundColor: 'background.pages', py: 10 }}>
            <Container maxWidth="md">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Box display={"flex"}
                        flexDirection={"row"}
                        alignItems={"center"}
                        justifyContent={"center"}
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
                        {/* <Typography
                            variant="h4"
                            align="center"
                            fontWeight={700}
                            mb={6}
                            mr={2}
                            sx={{ background: (theme) => theme.palette.primary.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                        >
                            {t('title2')}
                        </Typography> */}
                        {/* <Typography
                            variant="h4"
                            align="center"
                            fontWeight={700}
                            mb={6}
                            mr={2}
                            color="text.secondary"
                        >
                            {t('title3')}
                        </Typography> */}
                    </Box>
                </motion.div>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'background.paper',
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        mb: 4,
                        border: '1px solid rgba(255,255,255,0.05)',
                    }}
                >
                    <SearchIcon color="primary" />
                    <InputBase
                        placeholder={t('searchPlaceholder')}
                        fullWidth
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{ ml: 2, color: 'text.secondary' }}
                    />
                </Box>

                {/* FAQ List */}
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
                                    backgroundColor: 'background.paper',
                                    color: 'text.secondary',
                                    mb: 2,
                                    borderRadius: 2,
                                    border: '1px solid rgba(255,255,255,0.05)',
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

                <Divider sx={{ my: 6 }} />

                {/* CTA final */}
                <Box textAlign="center">
                    <Typography variant="h6" color="text.secondary" fontWeight={600} mb={2}>
                        {t('ctaTitle')}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/contact"
                        sx={{ fontWeight: 'bold', px: 4, py: 1 }}
                    >
                        {t('ctaButton')}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
