'use client';
import React from 'react';
import { Container, Grid, Typography, Box, Stack } from '@mui/material';
import { FeatureCard } from './FeatureCard';
import { FEATURES } from '@/constants/content';

export const FeaturesSection = () => {
  return (
    <Box
      id="features"
      sx={{
        py: { xs: 8, md: 14 },
        background: '#0f172a',
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Stack
          spacing={3}
          alignItems="center"
          textAlign="center"
          sx={{ mb: { xs: 6, md: 10 } }}
        >

          {/* Main Heading */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '3rem' },
              background: '#cbd5e1',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
           About Kovon
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 700,
              fontSize: '1.1rem',
            }}
          >
            Kovon is redefining how the world discovers and hires talent.
            Our mission is to make overseas job opportunities accessible,
            transparent, and seamless for professionals everywhere.
          </Typography>
        </Stack>

        {/* Features Grid */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="stretch"
        >
          {FEATURES.map((feature) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={feature.id}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <FeatureCard feature={feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
