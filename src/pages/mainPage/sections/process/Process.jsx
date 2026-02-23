import {
  Container,
  Box,
  Typography,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

import CTAButton from "../../../../sections/common/CTAButton";

export default function Process({ mode }) {
  const { t } = useTranslation();

  const steps = ["s1", "s2", "s3", "s4"].map((key) => ({
    key,
    num: t(`process.steps.${key}.num`),
    title: t(`process.steps.${key}.title`),
    desc: t(`process.steps.${key}.desc`),
  }));

  return (
    <Box id="como">
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          alignItems="flex-start"
        >
          {/* === Columna izquierda: título, texto, CTA === */}
          <Box
            sx={{
              flexBasis: { xs: "100%", md: "40%" },
              flexShrink: 0,
              maxWidth: { md: 480 },
            }}
          >
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                fontSize: { xs: "1.9rem", md: "3.4rem" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {t("process.title")}
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ my: 1.5, textAlign: { xs: "center", md: "left" } }}
            >
              {t("process.subtitle")}
            </Typography>

            <CTAButton />
          </Box>

          {/* === Columna derecha: acordeón de pasos === */}
          <Box
            sx={{
              flexBasis: { xs: "100%", md: "60%" },
              width: "100%",
            }}
          >
            <Stack spacing={1.5}>
              {steps.map((step, index) => (
                <StepAccordion
                  key={step.key}
                  num={step.num}
                  title={step.title}
                  desc={step.desc}
                  defaultExpanded={index === 0}
                  ariaLabel={t("process.aria.stepSummary", {
                    num: step.num,
                    title: step.title,
                  })}
                />
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

function StepAccordion({ num, title, desc, defaultExpanded = false, ariaLabel }) {
  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      disableGutters
      square={false}
      elevation={0}
      sx={(theme) => ({
        borderRadius: 3,
        "&::before": { display: "none" },
        "&.Mui-expanded": { margin: 0 },
      })}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-label={ariaLabel}
        sx={(theme) => ({
          px: 2.5,
          py: 1.5,
          "& .MuiAccordionSummary-content": {
            alignItems: "center",
            gap: 2,
            minWidth: 0,
          },

          "&.Mui-expanded .step-num, &.Mui-expanded .step-title": {
            color: theme.palette.secondary.main,
          },

          "&:focus-visible": {
            outline: `2px solid ${theme.palette.secondary.main}`,
            outlineOffset: 2,
            borderRadius: 12,
          },
        })}
      >
        <Typography
          className="step-num"
          fontWeight={800}
          sx={(theme) => ({
            color: theme.palette.text.primary,
            minWidth: 44,
            flexShrink: 0,
          })}
        >
          {num}
        </Typography>

        <Typography
          className="step-title"
          fontWeight={700}
          sx={(theme) => ({
            color: theme.palette.text.primary,
            minWidth: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            "&:hover": { color: theme.palette.text.primary },
          })}
        >
          {title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails sx={{ px: 9.5, pb: 2.5, pt: 0 }}>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}