import { Box, Container, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        position: "relative",
        bgcolor: "primary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* LOGO */}
      <Container sx={{ textAlign: "center" }}>
        <motion.img
          src="/logo.png"
          style={{ width: "100%", maxWidth: 900 }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </Container>

      {/* ↓ FLECHA SCROLL CALL-TO-ACTION ↓ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1, 1.12, 1] }} // pulso suave
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          bottom: "100px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <motion.div
          whileHover={{ scale: 1.2, boxShadow: "0 0 18px rgba(255,255,255,0.6)", borderRadius: "50%", }}
          transition={{ type: "spring", stiffness: 220 }}
        >
          <IconButton
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(6px)",
              boxShadow: "0 0 10px rgba(0,0,0,0.25)",
              color: "#fff",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.25)",
              },
            }}
          >
            <KeyboardArrowDownRoundedIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </motion.div>
      </motion.div>
    </Box>
  );
}
