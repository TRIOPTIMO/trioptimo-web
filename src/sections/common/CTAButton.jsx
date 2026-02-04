import {
    Button,
} from "@mui/material";


export default function CTAButton({ mode }) {
    return (
        <Button
            href="#contacto"
            variant="contained"
            color="tertiary"
            sx={{
                ml: 1,
                borderRadius: 999,
                px: 2.8,
                py: 0.7,
                textTransform: "none",
                fontWeight: 600,
                color: "white",
                "&:hover": {
                    backgroundColor: "tertiary.hover"
                },
            }}
        >
            Empieza tu proyecto
        </Button>
    );
}