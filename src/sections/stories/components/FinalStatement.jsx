import {
    Box,
    Typography,
    Stack,
} from "@mui/material";

export default function FinalStatement() {
    return (
        <>
            <Box sx={{ width: "100%", display: "flex" }}>
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems={{ xs: "flex-end", sm: "center" }}
                    spacing={{ xs: 1, sm: 1.2 }}
                    sx={{
                        ml: { xs: 0, sm: "auto" },     // solo empuja a la derecha en sm+
                        mr: { xs: 0, md: -20 },        // ajuste fino en desktop
                        textAlign: "right",
                    }}
                >
                    {/* Círculo con flecha */}
                    <Box
                        sx={{
                            width: 34,
                            height: 34,
                            borderRadius: "50%",
                            bgcolor: "secondary.main",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}
                    >
                        <Typography sx={{ color: "#fff", fontWeight: 900, fontSize: 18 }}>
                            →
                        </Typography>
                    </Box>

                    {/* Texto completo */}
                    <Typography
                        variant="h4"
                        fontWeight={800}
                        sx={{
                            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                            whiteSpace: { xs: "normal", sm: "nowrap" }, // permite salto en mobile
                            fontStyle: "italic",
                        }}
                    >
                        El éxito de nuestros clientes{" "}
                        <Box
                            component="span"
                            sx={{
                                color: "secondary.main",
                                fontStyle: "italic",
                            }}
                        >
                            es nuestra mejor carta de presentación.
                        </Box>
                    </Typography>
                </Stack>
            </Box>
        </>
    );
}

