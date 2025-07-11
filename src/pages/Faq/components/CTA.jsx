import React, { useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';

export default function MyButton() {
    const wrapperRef = useRef(null);
    const shineRef = useRef(null);
    const { t } = useTranslation("faq");

    const handleEnter = () => {
        gsap.fromTo(
            shineRef.current,
            { x: '-100%' },
            {
                x: '150%',
                duration: 1,
                ease: 'power2.out',
            }
        );
    };

    return (
        <>
            <Box textAlign={"center"}>
                <Typography variant="h6" color="colors.darkBlue" fontWeight={600} mb={2}>
                    {t('ctaTitle')}
                </Typography>
                <Box
                    ref={wrapperRef}
                    textAlign="center"
                    component="span"
                    onMouseEnter={handleEnter}
                    sx={{
                        display: 'inline-flex',
                        position: 'relative',
                        borderRadius: '999px',
                        overflow: 'hidden',
                        backgroundColor: '#FFA500',
                        height: '48px',
                        cursor: 'pointer',
                        my: { xs: 3 },
                    }}
                >

                    <Button
                        variant="text"
                        size="large"
                        component={ScrollLink}
                        smooth={true}
                        duration={500}
                        offset={-80}
                        spy={true}
                        to="contact"
                        sx={{
                            px: 5,
                            fontWeight: 'bold',
                            fontSize: { xs: '0.8rem', md: '1.5rem' },
                            borderRadius: '999px',
                            bgcolor: 'transparent',
                            color: 'white',
                            boxShadow: 'none',
                            height: '48px',
                            minHeight: 'unset',
                            lineHeight: 'normal',
                            '&:hover': {
                                bgcolor: 'transparent',
                            },
                        }}
                    >
                        {t("ctaButton")}
                    </Button>

                    <Box
                        ref={shineRef}
                        sx={{
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '50%',
                            height: '100%',
                            background: `linear-gradient(
            120deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          )`,
                            transform: 'skewX(-20deg)',
                            pointerEvents: 'none',
                        }}
                    />
                </Box>
            </Box>

        </>

    );
}

