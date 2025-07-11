import { useState } from 'react';
import { useLayoutEffect, useRef } from 'react';
import { Box } from '@mui/material';


const TypingTitle = ({ logoSrc, logoAlt = "Logo" }) => {
  const logoRef = useRef();
  const [logoSize, setLogoSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (logoRef.current) {
      setLogoSize({
        width: logoRef.current.offsetWidth,
        height: logoRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      <Box
        component="img"
        ref={logoRef}
        src={logoSrc || "/images/trioptimo.png"}
        alt={logoAlt}
        sx={{
          width: {
            xs: "350px",
            sm: "400px",
            md: "600px",
            lg: "900px",
          },
          height: "auto",
          mb: { md: 0, xs: 10 },
        }}
      />
{/* 
      <Box
        sx={{
          width: logoSize.width / 2,
          height: 50,
          backgroundColor: 'orange',
        }}
      >
        ¡Box proporcional al logo!
      </Box> */}
    </Box>
  );
};

export default TypingTitle;
