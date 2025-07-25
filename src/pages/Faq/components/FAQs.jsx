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
import { useState } from 'react';

export default function FAQs() {
  const { t } = useTranslation('faq');
  const faqs = t('items', { returnObjects: true }) || [];
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleChange = (index) => (_event, isExpanded) => {
    setExpandedIndex(isExpanded ? index : null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expandedIndex === index}
            onChange={handleChange(index)}
            sx={{
              mb: 3,
              mx: 2,
              borderRadius: 3,
              backgroundColor: 'colors.white',
              transition: 'all 0.3s ease',
              color: 'colors.darkBlue',
              boxShadow: expandedIndex === index ? 4 : 1,
              '&::before': { display: 'none' },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color:  'colors.secondary' }} />}
            >
              <Stack direction="row" spacing={2} alignItems="center">
                {faq.icon}
                <Typography
                  fontWeight={700}
                  sx={{
                    fontSize: { xs: 18, sm: 20, md: 22 },
                    color: 'colors.secondary',
                    p: 1
                  }}
                >
                  {t(`items.${index}.question`)}
                </Typography>
              </Stack>
            </AccordionSummary>

            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: { xs: 16, sm: 18, md: 20 },
                  lineHeight: 1.6,
                  color: 'colors.darkBlue',
                    p: 2
                }}
              >
                {t(`items.${index}.answer`)}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </motion.div>
  );
}
