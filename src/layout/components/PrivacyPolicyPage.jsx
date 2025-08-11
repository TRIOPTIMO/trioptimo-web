import { Box, Container, Typography, Link, Paper, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicyPage() {
    const { t } = useTranslation("privacyPolicy");
    return (
        <Box sx={{ bgcolor: 'colors.white', minHeight: "100vh" }}>

            {/* Encabezado */}
            <Box
                sx={{
                    backgroundColor: "colors.white",
                    color: 'colors.secondary',
                    py: { xs: 8, md: 12 },
                    textAlign: "center"
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 }}>
                    {t("cookies.title")}
                </Typography>
                <Typography variant="subtitle1">
                    {t("cookies.lastUpdate", { date: "11 de agosto de 2025" })}
                </Typography>
            </Box>

            {/* Contenido */}
            <Container maxWidth="md" sx={{ py: { xs: 1, md: 2 } }}>

                {/* Sección 1 */}
                <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, mb: 4 }}>
                    <Typography variant="h5" sx={{ color: 'colors.darkBlue', fontWeight: "bold", mb: 2 }}>
                        {t("cookies.sections.whatAre.title")}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'colors.darkBlue' }}>
                        {t("cookies.sections.whatAre.content")}
                    </Typography>
                </Paper>

                {/* Sección 2 */}
                <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, mb: 4 }}>
                    <Typography variant="h5" sx={{ color: 'colors.darkBlue', fontWeight: "bold", mb: 2 }}>
                        {t("cookies.sections.usedCookies.title")}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'colors.darkBlue' }}>
                        {t("cookies.sections.usedCookies.intro")}
                    </Typography>
                    <ul>
                        <Box component="li" sx={{ color: 'colors.darkBlue' }}>
                            {t("cookies.sections.usedCookies.list.provider")}
                        </Box>
                        <Box component="li" sx={{ color: 'colors.darkBlue' }}>
                            {t("cookies.sections.usedCookies.list.purpose")}
                        </Box>
                        <Box component="li" sx={{ color: 'colors.darkBlue' }}>
                            {t("cookies.sections.usedCookies.list.duration")}
                        </Box>
                        <Box component="li" sx={{ color: 'colors.darkBlue' }}>
                            {t("cookies.sections.usedCookies.list.moreInfo")}{" "}
                            <Link
                                href="https://policies.google.com/technologies/cookies?hl=es"
                                target="_blank"
                                rel="noopener"
                                sx={{ color: 'colors.primary', fontWeight: "bold" }}
                            >
                                {t("cookies.sections.usedCookies.list.link")}
                            </Link>
                        </Box>
                    </ul>
                </Paper>

                {/* Sección 3 */}
                <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, mb: 4 }}>
                    <Typography variant="h5" sx={{ color: 'colors.darkBlue', fontWeight: "bold", mb: 2 }}>
                        {t("cookies.sections.legalBasis.title")}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'colors.darkBlue' }}>
                        {t("cookies.sections.legalBasis.content")}
                    </Typography>
                </Paper>

                {/* Sección 4 */}
                <Paper elevation={3} sx={{ p: { xs: 3, md: 4 } }}>
                    <Typography variant="h5" sx={{ color: 'colors.darkBlue', fontWeight: "bold", mb: 2 }}>
                        {t("cookies.sections.manageCookies.title")}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: 'colors.darkBlue' }}>
                        {t("cookies.sections.manageCookies.intro")}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <ul>
                        <li>
                            <Link href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener" sx={{ color: 'colors.primary' }}>
                                Google Chrome
                            </Link>
                        </li>
                        <li>
                            <Link href="https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia" target="_blank" rel="noopener" sx={{ color: 'colors.primary' }}>
                                Mozilla Firefox
                            </Link>
                        </li>
                        <li>
                            <Link href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener" sx={{ color: 'colors.primary' }}>
                                Safari
                            </Link>
                        </li>
                        <li>
                            <Link href="https://support.microsoft.com/es-es/help/4027947/microsoft-edge-delete-cookies" target="_blank" rel="noopener" sx={{ color: 'colors.primary' }}>
                                Microsoft Edge
                            </Link>
                        </li>
                    </ul>
                </Paper>

            </Container>
        </Box>
    );
}
