import React from "react";
import { Box } from "@mui/material";

export default function AnimatedMesh({ children, sx }) {

  return (
      <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 1,
        p: { xs: 3, md: 10 },
        backgroundColor: (t) => (t.palette.mode === "light" ? "#9139D2" : "#00dd93"),
        isolation: "isolate",

        // Mesh base
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(900px 600px at 15% 10%, rgba(145,57,210,.82), transparent 60%)," +
            "radial-gradient(800px 600px at 85% 20%, rgba(0,221,147,.88), transparent 62%)," +
            "radial-gradient(900px 700px at 50% 95%, rgba(1,4,254,.18), transparent 60%)",
          filter: "saturate(120%)",
          transform: "translateZ(0)",
          zIndex: 0,
        },

        // Animated blobs layer
        "&::after": {
          content: '""',
          position: "absolute",
          inset: "-20%",
          background:
            "radial-gradient(circle at 20% 25%, rgba(145,57,210,.55), transparent 55%)," +
            "radial-gradient(circle at 85% 30%, rgba(0,221,147,.45), transparent 55%)," +
            "radial-gradient(circle at 55% 85%, rgba(1,4,254,.45), transparent 55%)",
          filter: "blur(36px)",
          opacity: 0.9,
          animation: "trioptimoMeshMove 18s ease-in-out infinite",
          zIndex: 0,
        },
      }}
    >
      {/* Noise */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.10,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />


      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>

      <style>{`
        @keyframes trioptimoMeshMove {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          35%  { transform: translate3d(4%, -3%, 0) scale(1.05); }
          70%  { transform: translate3d(-3%, 4%, 0) scale(0.98); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>
    </Box>
  );
}
