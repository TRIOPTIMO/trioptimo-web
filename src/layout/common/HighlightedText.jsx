import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const HighlightedText = ({
    children,
    color = 'linear-gradient(120deg, #00dd93 0%, #00dd93 100%)',
    height = '0.5em',
    duration = 1.5,
    delay = 0,
    trigger = 'mount', }) => {

    return (
        <Box
            component={motion.span}
            initial={{ backgroundSize: '0% 100%' }}
            animate={{ backgroundSize: '100% 100%' }}
            transition={{ duration, ease: 'easeOut', delay }}
            sx={{
                position: 'relative',
                display: 'inline-block',
                // backgroundImage: color,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0 80%',
                padding: {md: '0 30px', xs: '0 5px' } ,
                borderRadius: 1
            }}
        >
            <Typography
                component="span"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    fontWeight: 700,
                    width: "100%",
                    fontSize: { xs: "1.5rem", md: "1.5rem", lg: "3rem" },
                    my: { xs: 0, sm: 2, md: 6 },
                    color: 'colors.white'
                }}
            >
                {children}
            </Typography>
        </Box>
    );
};

export default HighlightedText;
