import { useEffect, useMemo, useRef, useState } from "react";
import { Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

export default function StoriesCarousel({ items = [], intervalMs = 3000 }) {
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
          height: { xs: 260, sm: 270 }, // un poco más alto para la barra y la cola
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
                transition: "transform 450ms ease",
                width: "100%",
                maxWidth: isMobile ? 460 : 520,
                pointerEvents: isActive ? "auto" : "none",
                zIndex: isActive ? 3 : 2,
              }}
            >
              {/* GLOBO NARANJA */}
              <Box
                sx={{
                  position: "relative",
                  px: { xs: 3, sm: 4 },
                  pt: { xs: 7, sm: 7 }, // deja espacio para la barra superior
                  pb: 4,
                  bgcolor: "secondary.main",
                  color: "#FFFFFF",
                  borderRadius: 1.5, // menos redondeado
                    boxShadow: "10px 10px 0 rgba(0,0,0,0.18)",

                  // cola del globo con sombra sólida
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: "20%",                      // como solicitaste
                    bottom: -26,
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "22px solid transparent",
                    borderRight: "22px solid transparent",
                    borderTop: "26px solid #C7431D",
                    zIndex: 2,
                  },

                  // sombra de la cola (se coloca detrás creando el efecto sólido)
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: "21%",
                    bottom: -40,                      // un poco más abajo para generar sombra visible
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "26px solid transparent",
                    borderRight: "26px solid transparent",
                    borderTop: "30px solid rgba(0,0,0,0.18)",  // color sombra sólida
                    zIndex: 1,
                  },

                }}
              >
                {/* BARRA SUPERIOR MORADA */}
                {/* QUOTE flotando sobre la barra morada */}
                <Typography
                  sx={{
                    position: "absolute",
                    top: -45,
                    left: { xs: "20%", md: "15%" },
                    transform: "translateX(-50%)",
                    fontSize: { xs: 80, md: 100 },
                    fontWeight: 700,
                    color: "#FFF",               // mismo tono del violeta para cohesión
                    // textShadow: "0px 4px 0px #D3D3D3", // sombra sólida tipo sticker
                    lineHeight: 1,
                    zIndex: 5,
                    fontFamily: "Twingle Star",
                  }}
                >
                  “
                </Typography>

                {/* BARRA SUPERIOR DEL AUTOR */}
                <Box
                  sx={{
                    position: "absolute",
                    top: -42,
                    left: 50,
                    right: {xs: -10, md: -20},
                    bgcolor: "#5F215E",
                    height: "80px",
                    px: 3,
                    py: 1.1,
                    color: "#FFFFFF",
                    borderRadius: 1.2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    zIndex: 4,
                    boxShadow: "10px 10px 0 rgba(0,0,0,0.18)",
                  }}
                >
                  <Typography sx={{ fontSize: 15, fontWeight: 700, lineHeight: 1.2, textAlign: "right" }}>
                    {item.author}
                  </Typography>

                  {item.role && (
                    <Typography sx={{ fontSize: 13, opacity: 0.9, mt: 0.3 }}>
                      {item.role}
                    </Typography>
                  )}
                </Box>


                {/* TEXTO DEL TESTIMONIO */}
                <Typography
                  sx={{
                    fontSize: { xs: 15, sm: 17 },
                    fontWeight: 400,
                    lineHeight: 1.55,
                    fontStyle: "italic",
                    textAlign: "left",
                    letterSpacing: "0.2px",
                  }}
                >
                  {item.quote}
                </Typography>
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
