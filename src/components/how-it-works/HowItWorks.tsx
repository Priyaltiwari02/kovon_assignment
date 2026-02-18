'use client';
import React from 'react';
import { Box, Container, Grid, Typography, Stack, Paper } from '@mui/material';
import { STEPS } from '@/constants/content';

export const HowItWorks = () => {
  return (
    <Box id="how-it-works" sx={{ py: { xs: 10, md: 15 }, bgcolor: '#0f172a' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} textAlign="center" sx={{ mb: 10 }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
            Execution Flow
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800 }}>
            Get started in 4 simple steps
          </Typography>
        </Stack>

        <Grid container spacing={4} sx={{ position: 'relative' }}>
          {/* Connector Line for Desktop */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: '50%',
              left: '10%',
              right: '10%',
              height: '2px',
              bgcolor: 'primary.light',
              opacity: 0.3,
              zIndex: 0,
            }}
          />

          {STEPS.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={step.number}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: 'transparent',
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    mx: 'auto',
                    mb: 4,
                    boxShadow: '0 8px 16px rgba(37,99,235,0.2)',
                  }}
                >
                  {step.number}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {step.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
