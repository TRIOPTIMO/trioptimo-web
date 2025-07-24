import {
    Box,
    Stack,
    Divider,
} from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

import CTA from "./components/CTA";
import FAQs from "./components/FAQs";
import Title from "./components/Title";

export default function Faq() {
    const { t, i18n } = useTranslation('faq');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            name="faq"
            sx={{
                position: 'relative',
                py: 10,
                overflow: 'hidden',
                backgroundColor: 'colors.white',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    //backgroundColor: 'rgba(252, 163, 17, 0.1)', 
                    backgroundImage: 'url("/images/bg.png")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <Stack
                direction={{ xs: 'column', sm: 'column', md: 'row' }}
                spacing={4}
                alignItems="stretch"
                justifyContent="center"
                useFlexGap
                flexWrap="nowrap"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    mx: { md: 10, xs: 0 }
                }}
            >

                {!isMobile && (
                    <Box
                        sx={{
                            px: 2,
                            py: 4,
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 4
                        }}
                    >
                        {/* Columna izquierda */}
                        <Stack spacing={4} sx={{ flex: 1 }}>
                            <Title />
                            <CTA />
                        </Stack>

                        {/* Columna derecha */}
                        <Box sx={{ flex: 1 }}>
                            <FAQs />
                        </Box>
                    </Box>
                )}


                {isMobile && (
                    <Box >
                        <Title />
                        <FAQs />
                        <CTA />
                    </Box>

                )}



            </Stack>
        </Box>

    );
}
