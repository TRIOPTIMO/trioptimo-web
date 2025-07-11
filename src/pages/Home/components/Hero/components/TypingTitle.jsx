import { Box } from '@mui/material';

const TypingTitle = ({ logoSrc, logoAlt = "Logo" }) => {
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
    </Box>
  );
};

export default TypingTitle;
