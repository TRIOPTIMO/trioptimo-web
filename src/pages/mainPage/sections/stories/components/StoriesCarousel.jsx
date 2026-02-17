import { useEffect, useMemo, useRef, useState } from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

export default function StoriesCarousel({ items = [], intervalMs = 3000, mode }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  const getPosition = (i) => {
    if (total === 0) return null;
    if (i === index) return 0; // centro
    if (i === (index - 1 + total) % total) return -1; // izquierda
    if (i === (index + 1) % total) return 1; // derecha
    return 99; // oculto
  };

  if (total === 0) return null;

  const offset = 220; // distancia lateral en desktop

  return (
    <Box
      sx={{ mt: 3, position: "relative" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Box
        sx={{
          position: "relative",
          height: { xs: 230, sm: 240 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible",
        }}
      >
        {safeItems.map((item, i) => {
          const pos = getPosition(i);
          if (pos === null) return null;

          const isActive = pos === 0;

          // 👉 En mobile: solo mostramos el activo, sin laterales
          if (isMobile && !isActive) return null;

          const translateX = isMobile ? 0 : pos * offset;
          const rotate = isMobile ? 0 : pos * 4;
          const scale = isActive ? 1 : isMobile ? 0.95 : 0.85;

          return (
            <Box
              key={i}
              sx={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: `translateX(-50%) translateX(${translateX}px) scale(${scale}) rotate(${rotate}deg)`,
                opacity: isActive ? 1 : 0.35, // activo siempre 1
                transition: "transform 450ms ease", // solo animamos transform
                width: "100%",
                maxWidth: isMobile ? 460 : 520,
                pointerEvents: isActive ? "auto" : "none",
                zIndex: isActive ? 3 : 2,
              }}
            >
              <Box
                sx={{
                  borderRadius: 2,
                  px: { xs: 3, sm: 4 },
                  py: { xs: 3, sm: 3.5 },
                  bgcolor: "background.paper",
                  boxShadow: isActive
                    ? "0 18px 45px rgba(15, 23, 42, 0.18)"
                    : "0 8px 20px rgba(15, 23, 42, 0.06)",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  {/* Comillas de color */}
                  <Typography
                    component="span"
                    aria-hidden="true"
                    role="presentation"
                    sx={{
                      position: "absolute",
                      top: -28,
                      left: -6,
                      fontSize: 64,
                      lineHeight: 1,
                      color: mode === "light" ? theme.palette.tertiary.main : theme.palette.secondary.main,
                      opacity: 0.5, 
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  >
                    “
                  </Typography>


                  <Typography
                    fontStyle="italic"
                    sx={{
                      position: "relative",
                      px: { xs: 1, sm: 0 },
                    }}
                  >
                    {item.quote}
                  </Typography>

                  <Typography
                    variant="body2"
                    color={theme.palette.text.secondary}
                    sx={{ mt: 2, textAlign: "right" }}
                  >
                    {item.author}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
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
