import {
  Box,
  Stack,
} from "@mui/material";
import { useTranslation } from 'react-i18next';
import Title from "./components/Title";
import WhyCards from "./components/WhyCards";

export default function WhychooseUs() {

  return (
    <Box sx={{ mx: "auto", backgroundColor: 'colors.white' }}>
      <Stack
        direction={{ xs: "column", md: "column" }}
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          py: 8,
          px: 2,
          position: 'relative',
          minHeight: '20vh',
          mx: 'auto',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url("/images/iconSecondary.webp")',
            fetchPriority: "high",
            decoding: "async",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: { xs: 'center -50%', md: '-30% center' },
            backgroundSize: { xs: '60%', md: '700px' },
            zIndex: 0,

            // Nuevo: máscara de opacidad gradual
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)',
            maskSize: '100% 100%',
            maskRepeat: 'no-repeat',
          }
        }}
      >
        <Title/>

       <WhyCards/>

      </Stack>
    </Box>



  );
}
