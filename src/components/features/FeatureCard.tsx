'use client';
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Feature } from '@/types';

export const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <Card
      sx={{
        height: '100%',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.08)',
        },
        border: '1px solid #f1f5f9',
        borderRadius: 4,
      }}
      elevation={0}
    >
      <CardContent sx={{ p: 4 }}>
        <Box
          sx={{
            mb: 3,
            p: 1.5,
            width: 'fit-content',
            borderRadius: 2,
            bgcolor: 'primary.light',
            opacity: 0.9,
          }}
        >
          {feature.icon}
        </Box>
        <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 700 }}>
          {feature.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {feature.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
