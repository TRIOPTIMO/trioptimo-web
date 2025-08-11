import { useState, useEffect } from "react";
import { Box, Typography, Button, Link, Slide } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
    const [showBanner, setShowBanner] = useState(false);
    const { t } = useTranslation("privacyPolicy");

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setShowBanner(true);
        } else if (consent === "accepted") {
            loadGoogleAnalytics();
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setShowBanner(false);
        loadGoogleAnalytics();
    };

    const rejectCookies = () => {
        localStorage.setItem("cookieConsent", "rejected");
        setShowBanner(false);
    };

    const loadGoogleAnalytics = () => {
        if (window.gtag) return; // Evita duplicados
        const script = document.createElement("script");
        script.src = `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`;
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag("js", new Date());
        gtag("config", "G-XXXXXXXXXX", { anonymize_ip: true });
    };

    return (
        <Slide direction="up" in={showBanner} mountOnEnter unmountOnExit>
            <Box
                sx={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    bgcolor: 'colors.darkBlue',
                    color: 'colors.white',
                    p: 2,
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0 -2px 10px rgba(0,0,0,0.3)",
                    zIndex: 2000
                }}
            >
                <Typography variant="body1" sx={{ mb: { xs: 2, sm: 0 }, maxWidth: "700px" }}>
                    {t("cookies.banner.content")}{" "}
                    <Link
                        href="/politica-de-cookies"
                        underline="hover"
                        sx={{ color: 'colors.primary', fontWeight: "bold" }}
                    >
                        {t("cookies.banner.link")}
                    </Link>
                </Typography>
                <Box sx={{ display: "flex", gap: 1 }}>
                    <Button
                        variant="contained"
                        onClick={acceptCookies}
                        sx={{
                            bgcolor: 'colors.primary',
                            color: 'colors.black',
                            "&:hover": { bgcolor: "#00c783" }
                        }}
                    >
                        {t("cookies.banner.accept")}
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={rejectCookies}
                        sx={{
                            borderColor: 'colors.grey',
                            color: 'colors.white',
                            "&:hover": { borderColor: 'colors.white' }
                        }}
                    >
                        {t("cookies.banner.reject")}
                    </Button>
                </Box>
            </Box>
        </Slide>
    );
}
