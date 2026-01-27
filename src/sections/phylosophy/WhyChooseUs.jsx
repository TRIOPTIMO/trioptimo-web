import {
    Container,
    Box,
    Typography,
    Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const reasons = [
    "Compromiso con el impacto social: su misión es nuestro motor.",
    "Accesibilidad y cercanía: soluciones claras, asequibles y a medida.",
    "Transparencia y confianza: ética y comunicación honesta.",
    "Innovación práctica: de lo complejo a lo fácil de usar.",
    "Colaboración y empoderamiento: compartimos conocimiento para tu autonomía.",
];

export function WhyChooseUs({mode}) {
    return (
        <Container
            id="por-que-elegirnos"
            maxWidth="lg"
            sx={{ py: { xs: 6, md: 8 } }}
        >
            {/* Pill "Por qué elegirnos" */}
            <Box
                sx={{
                    display: "inline-flex",
                    mb: 3,
                    borderRadius: 999,
                    bgcolor: "#c9421f",
                    px: 4,
                    py: 1.2,
                    boxShadow: "10px 10px 0 rgba(0,0,0,0.18)",
                }}
            >
                <Typography
                    sx={{
                        color: "#fff",
                        fontWeight: 800,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                    }}
                >
                    POR QUÉ ELEGIRNOS
                </Typography>
            </Box>

            {/* Lista de razones */}
            <Stack spacing={1.8} sx={{ mb: { xs: 5, md: 8 } }}>
                {reasons.map((text) => {
                    const [strongPart, rest] = text.split(":");
                    return (
                        <ReasonItem
                            key={text}
                            strongPart={strongPart}
                            rest={rest || ""}
                        />
                    );
                })}
            </Stack>

            {/* Faja inferior "Comprometidos con tu causa" */}
            <Box
                sx={{
                    mt: 4,
                    borderRadius: { xs: 8, md: 999 },
                    bgcolor: "secondary.main",
                    height: { xs: "300px", md: "200px" },     // ← control principal de altura
                    color: "#fff",
                    pr: { xs: 3, md: 6 },
                    pl: { xs: 3, md: 0 },
                    py: { xs: 7, md: 0 },
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",                     // ← CENTRADO VERTICAL GLOBAL
                    justifyContent: "space-between",
                    gap: { xs: 1.5, md: 2 },
                    boxShadow: "10px 10px 0 rgba(0,0,0,0.18)",
                }}
            >

                {/* BLOQUE IZQUIERDO — CENTRADO VERTICAL INTERNAMENTE */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",                 // ← centra verticalmente el texto
                        justifyContent: "center",
                        height: "100%",
                        backgroundColor:{ xs: "secondary.main", md: "secondary.secondary"},
                        borderRadius: { xs: 8, md: 999 },
                        maxWidth: { xs: "100%", md: 550 },
                        px: { xs: 2, md: 4 },
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "1.5rem", md: "2rem" },
                            fontWeight: 800,
                            fontStyle: "italic",
                            lineHeight: 1.1,
                        }}
                    >
                        Comprometidos
                        <br />
                        con tu causa
                    </Typography>
                </Box>

                {/* TEXTO DERECHA */}
                <Box sx={{ maxWidth: { xs: "100%", md: 520 } }}>
                    <Typography sx={{ lineHeight: 1.6, fontSize: {xs: "1rem", md: "1.4rem"} }}>
                        Somos profesionales de la ingeniería y la gestión, apasionados por
                        aplicar nuestro conocimiento para generar un impacto social real.
                    </Typography>
                </Box>
            </Box>

        </Container>
    );
}

function ReasonItem({ strongPart, rest }) {
    return (
        <Stack direction="row" spacing={1.5} alignItems="flex-start">
            {/* Icono circular morado con flecha */}
            <Box
                sx={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    bgcolor: "#5b1e76",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: "2px",
                    flexShrink: 0,
                }}
            >
                <ArrowForwardIcon sx={{ color: "#fff", fontSize: 16 }} />
            </Box>

            <Typography sx={{ fontSize: 15.5, lineHeight: 1.5 }}>
                <Box component="span" sx={{ fontWeight: 700 }}>
                    {strongPart}
                    {rest && ":"}
                </Box>
                {rest && (
                    <Box component="span" sx={{ ml: 0.5 }}>
                        {rest}
                    </Box>
                )}
            </Typography>
        </Stack>
    );
}
