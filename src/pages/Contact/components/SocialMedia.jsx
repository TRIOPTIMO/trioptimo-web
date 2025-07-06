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
                    href: 'https://www.linkedin.com/company/tuempresa'
                }, {
                    icon: <InstagramIcon />,
                    href: 'https://www.instagram.com/tuempresa'
                }, {
                    icon: <TwitterIcon />,
                    href: 'https://twitter.com/tuempresa'
                }, {
                    icon: <EmailIcon />,
                    href: 'mailto:info@trioptimo.com'
                }].map((social, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.2 }}>
                        <IconButton
                            component="a"
                            href={social.href}
                            target="_blank"
                            rel="noopener"
                            sx={{
                                width: 50,
                                height: 50,
                                background: 'linear-gradient(135deg, #00bfff, #6a5acd)',
                                color: '#fff',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #6a5acd, #00bfff)',
                                    boxShadow: '0 4px 12px rgba(0,191,255,0.4)',
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
