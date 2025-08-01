import {
    Stack,
    IconButton,
} from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

export default function SocialMedia() {
    return (
        <>
            <Stack direction="row" spacing={2} justifyContent="center" mt={6}>
                {[{
                    icon: <LinkedInIcon />,
                    label: "LinkedIn",
                    href: 'https://www.linkedin.com/company/trioptimo'
                }, {
                    icon: <InstagramIcon />,
                    label: "Instagram",
                    href: 'https://www.instagram.com/trioptimo'
                 },
                // {
                //     icon: <TwitterIcon />,
                //     href: 'https://twitter.com/tuempresa'
                // },
                 {
                    icon: <EmailIcon />,
                    href: 'mailto:info@trioptimo.com',
                    label: "Email",
                }].map((social, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.2 }}>
                        <IconButton
                            component="a"
                            href={social.href}
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener"
                            sx={{
                                width: 50,
                                height: 50,
                                backgroundColor: 'colors.tertiary',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: 'colors.tertiary',
                                    boxShadow: '0 4px 12px rgba(20, 33, 61, 0.2)',
                                    opacity: 0.8
                                },
                            }}
                        >
                            {social.icon}
                        </IconButton>
                    </motion.div>
                ))}
            </Stack>
        </>
    );
}
