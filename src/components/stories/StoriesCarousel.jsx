import { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, IconButton, Stack, Typography, Box } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

export default function StoriesCarousel({ items = [], intervalMs = 6000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const safeItems = useMemo(() => items ?? [], [items]);
  const total = safeItems.length;

  useEffect(() => {
    if (total <= 1 || paused) return;
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, intervalMs);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [intervalMs, paused, total]);

  const go = (dir) => {
    if (total <= 1) return;
    setIndex((i) => (i + dir + total) % total);
  };

  return (
    <Card
      variant="outlined"
      sx={{ mt: 2, overflow: "visible" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <CardContent
        sx={{
          position: "relative",
          pt: 6,
          pb: 4,
          px: 6, // 👈 padding lateral extra para no chocar con las flechas
          minHeight: 220, // 👈 mantiene altura constante
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Flechas */}
        {total > 1 && (
          <>
            <IconButton
              size="small"
              onClick={() => go(-1)}
              aria-label="Anterior"
              sx={{
                position: "absolute",
                top: "50%",
                left: 8,
                transform: "translateY(-50%)",
                bgcolor: "background.paper",
                boxShadow: 1,
                "&:hover": { bgcolor: "grey.100" },
              }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              onClick={() => go(1)}
              aria-label="Siguiente"
              sx={{
                position: "absolute",
                top: "50%",
                right: 8,
                transform: "translateY(-50%)",
                bgcolor: "background.paper",
                boxShadow: 1,
                "&:hover": { bgcolor: "grey.100" },
              }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </>
        )}

        {/* Slide animado */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            style={{ width: "100%" }}
          >
            <Box textAlign="center">
              <Typography fontStyle="italic" sx={{ px: { xs: 2, sm: 4 } }}>
                “{safeItems[index]?.quote}”
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1.5, px: { xs: 2, sm: 4 } }}
              >
                {safeItems[index]?.author}
              </Typography>
            </Box>
          </motion.div>
        </AnimatePresence>
      </CardContent>

      {/* Dots */}
      {total > 1 && (
        <Stack
          direction="row"
          spacing={0.5}
          justifyContent="center"
          sx={{ mt: 1.5, mb: 1.5 }}
        >
          {safeItems.map((_, i) => (
            <IconButton
              key={i}
              size="small"
              onClick={() => setIndex(i)}
              aria-label={`Ir al testimonio ${i + 1}`}
            >
              <FiberManualRecordIcon
                fontSize="inherit"
                color={i === index ? "primary" : "disabled"}
              />
            </IconButton>
          ))}
        </Stack>
      )}
    </Card>
  );
}

StoriesCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
  intervalMs: PropTypes.number,
};
