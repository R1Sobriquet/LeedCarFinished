import { createTheme } from '@mui/material/styles';
import '@fontsource/playfair-display';
import '@fontsource/playfair-display/700.css';
import '@fontsource/roboto';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/100.css';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#e0a31b',
      light: '#f5c842',
      dark: '#b47f12',
    },
    secondary: {
      main: '#fff',
      light: '#f0f0f0',
      dark: '#ccc',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['Playfair Display', 'Roboto', 'Arial', 'sans-serif'].join(','),
    h1: { fontWeight: 700, fontSize: '2.5rem', color: '#e0a31b' },
    h2: { fontWeight: 600, fontSize: '2rem', color: '#e0a31b' },
    body1: { fontWeight: 400, fontSize: '1rem', color: '#000' },
    body2: { fontWeight: 400, fontSize: '0.875rem', color: '#aaa' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          background: 'linear-gradient(90deg, #e0a31b, #f1c40f)',
          color: '#000',
          '&:hover': {
            boxShadow: '0 0 10px #e0a31b',
            background: 'linear-gradient(90deg, #f1c40f, #e0a31b)',
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardError: {
          backgroundColor: '#e0a31b',
          color: '#000',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(30,30,30,1) 41%, rgba(57,56,56,1) 67%, rgba(131,119,92,0.3) 100%)',
        },
      },
    },
  },
});

export default theme;
