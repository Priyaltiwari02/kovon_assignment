'use client';
import React from 'react';
import { Box, Button, Container, Typography, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Services } from '@/components/services/Services';


export const HeroSection = () => {
  return (
    <Box
      id="home"
      sx={{
        pt: { xs: 10, md: 15 },
        pb: { xs: 8, md: 12 },
        background: '#0f172a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Blob */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">

          <Typography
            variant="h1"
            sx={{
              maxWidth: 900,
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 800,
              background: 'linear-gradient(90deg, #1e293b 0%, #2563eb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Your Passport to Global Work
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, fontSize: '1.25rem' }}
          >
            Kovon opens doors for millions of skilled workers to pursue meaningful careers across the world.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
            >
              Register with us
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}
            >
              How it Works
            </Button>
          </Stack>

          <Services />
        </Stack>
      </Container>
    </Box>
  );
};
