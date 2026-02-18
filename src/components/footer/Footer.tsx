'use client';
import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack, IconButton, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FOOTER_SECTIONS } from '@/constants/content';

export const Footer = () => {
  return (
    <Box id="contact" sx={{ bgcolor: '#1e293b', color: 'white', pt: 10, pb: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: 'primary.light' }}>
              Kovon
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 4, lineHeight: 1.8 }}>
              Making workflow automation accessible for everyone. 
              Our mission is to help companies scale their business 
              operations with minimal friction and maximum security.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}>
                <GitHubIcon />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: 'primary.light' } }}>
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </Grid>

          {FOOTER_SECTIONS.map((section) => (
            <Grid item xs={6} md={2.6} key={section.title}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 3 }}>
                {section.title}
              </Typography>
              <Stack spacing={2}>
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    underline="none"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: '0.9rem',
                      '&:hover': { color: 'primary.light' },
                      transition: 'color 0.2s',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 4 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            © {new Date().getFullYear()} Kovon Inc. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="#" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link href="#" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="#" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', textDecoration: 'none' }}>Cookies Settings</Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};
