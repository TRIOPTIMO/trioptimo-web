import { Stack, Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

export default function ServiceStack({ items = [] }) {
  return (
    <Stack
      spacing={4}
      sx={{
        mt: 6,
      }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <Paper
            elevation={8}
            sx={{
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #ffffff, #f0f4ff)',
              boxShadow: '0 8px 24px rgba(0,191,255,0.2)',
              border: '1px solid rgba(0,191,255,0.2)',
              color: 'text.primary',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              gap: 4,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 12px 30px rgba(0,191,255,0.4)',
              },
            }}
          >
            {/* Icono o imagen */}
            <Box
              sx={{
                flexShrink: 0,
                width: 100,
                height: 100,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00bfff, #6a5acd)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <Box sx={{ color: '#fff', fontSize: 40 }}>
                  {item.icon}
                </Box>
              )}
            </Box>

            {/* Texto */}
            <Box>
              <Typography
                variant="h6"
                sx={{
                  background: 'linear-gradient(90deg, #00bfff, #6a5acd)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.6 }}
              >
                {item.description}
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      ))}
    </Stack>
  );
}
