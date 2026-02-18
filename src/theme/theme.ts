'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#3b82f6', // slightly brighter blue for dark mode
      light: '#60a5fa',
      dark: '#2563eb',
    },

    secondary: {
      main: '#a78bfa', // soft violet
    },

    background: {
      default: '#0f172a', // dark navy/black
      paper: '#1e293b',   // card background
    },

    text: {
      primary: '#ffffff',
      secondary: '#94a3b8', // gray-400 style
    },

    divider: 'rgba(255,255,255,0.08)',
  },

  typography: {
    fontFamily: 'inherit',

    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      color: '#ffffff',
    },

    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      color: '#ffffff',
    },

    body1: {
      fontSize: '1.125rem',
      color: '#cbd5e1', // light gray
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 10,
          padding: '10px 24px',
          fontWeight: 600,
        },
        containedPrimary: {
          backgroundColor: '#3b82f6',
          '&:hover': {
            backgroundColor: '#2563eb',
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e293b',
          border: '1px solid rgba(255,255,255,0.05)',
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0f172a',
        },
      },
    },
  },
});

export default theme;
