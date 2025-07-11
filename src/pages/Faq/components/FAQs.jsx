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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
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
                color: 'colors.darkBlue',
                mb: 3,
                borderRadius: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&::before': { display: 'none' },
              }}
            >
              <AccordionSummary
                sx={{ my: 2 }}
                expandIcon={
                  <ExpandMoreIcon
                    sx={{ color: 'colors.orange' }}
                  />
                }
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  {faq.icon}
                  <Typography
                    fontWeight={700}
                    sx={{
                      fontSize: { xs: 18, sm: 20, md: 22 },
                      color: 'colors.darkBlue',
                    }}
                  >
                    {t(`items.${index}.question`)}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    color: 'colors.darkBlue',
                    fontSize: { xs: 16, sm: 18, md: 20 },
                    lineHeight: 1.6,
                  }}
                >
                  {t(`items.${index}.answer`)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))
      ) : (
        <Typography variant="body1" color="#14213D">
          {t('notFound')}
        </Typography>
      )}
    </motion.div>
  );
}
