import React from "react";
import { Box } from "@mui/material";
import { keyframes } from "@mui/system";

const driftA = keyframes`
  0%   { transform: translate3d(-6%, -4%, 0) scale(1.08); }
  35%  { transform: translate3d(5%, -2%, 0)  scale(1.12); }
  70%  { transform: translate3d(-2%, 6%, 0)  scale(1.06); }
  100% { transform: translate3d(-6%, -4%, 0) scale(1.08); }
`;

const driftB = keyframes`
  0%   { transform: translate3d(4%, 6%, 0) scale(1.12); }
  40%  { transform: translate3d(-5%, 2%, 0) scale(1.06); }
  75%  { transform: translate3d(3%, -4%, 0) scale(1.10); }
  100% { transform: translate3d(4%, 6%, 0) scale(1.12); }
`;

export default function AnimatedMesh({ children, sx }) {
  const primary = "#9139D2";
  const secondary = "#00dd93";
  const tertiary = "#0104FE";

  return (
    <Box sx={{ position: "relative", overflow: "hidden", ...sx }}>
      {/* Layer A */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: "-25%",
          zIndex: 0,
          background: `
            radial-gradient(700px 520px at 20% 25%, ${primary} 0%, transparent 60%),
            radial-gradient(640px 520px at 80% 30%, ${tertiary} 0%, transparent 62%),
            radial-gradient(600px 520px at 30% 85%, ${secondary} 0%, transparent 60%)
          `,
          filter: "blur(46px) saturate(115%)",
          opacity: 0.9,
          animation: `${driftA} 10s ease-in-out infinite`,
          willChange: "transform",
        }}
      />

      {/* Layer B (movimiento cruzado) */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: "-25%",
          zIndex: 0,
          background: `
            radial-gradient(720px 540px at 70% 20%, ${primary} 0%, transparent 60%),
            radial-gradient(620px 520px at 15% 70%, ${secondary} 0%, transparent 60%),
            radial-gradient(680px 520px at 85% 85%, ${tertiary} 0%, transparent 65%)
          `,
          filter: "blur(54px) saturate(110%)",
          opacity: 0.75,
          animation: `${driftB} 10s ease-in-out infinite`,
          willChange: "transform",
          mixBlendMode: "screen",
        }}
      />

      {/* Overlay para legibilidad */}
     

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
    </Box>
  );
}
