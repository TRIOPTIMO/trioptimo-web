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

    const motionProps =
        trigger === 'view'
            ? {
                initial: 'hidden',
                whileInView: 'visible',
                viewport: { once: true, amount: 0.6 },
            }
            : trigger === 'hover'
                ? { initial: 'visible', whileHover: 'hover' }
                : { initial: 'hidden', animate: 'visible' }; // mount

    const variants =
        trigger === 'hover'
            ? {
                visible: { scaleX: 0, transition: { duration: 0 } },
                hover: { scaleX: 1, transition: { duration } },
            }
            : {
                hidden: { scaleX: 0 },
                visible: {
                    scaleX: 1,
                    transition: { duration, delay, ease: 'easeOut' },
                },
            };

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
                padding: '0 30px',
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
                    my: { xs: 4, sm: 2, md: 6 },
                    color: 'colors.white'
                }}
            >
                {children}
            </Typography>
        </Box>
    );
};

export default HighlightedText;
