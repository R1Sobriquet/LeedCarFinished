import React, { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Alert,
  Paper,
  Avatar,
  Link as MuiLink,
  CircularProgress,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/auth';

interface LoginError {
  response?: {
    data?: {
      message?: string;
      status?: number;
    };
    status?: number;
  };
  message?: string;
}

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      const response = await authService.login({
        email,
        mot_de_passe: motDePasse, 
        captcha: '4', 
      });

      if (response && response.token) {
        navigate('/');
      } else {
        setErrorMessage('La connexion a échoué. Veuillez réessayer.');
      }
    } catch (error: unknown) {
      const loginError = error as LoginError;

      if (loginError.response?.status === 401) {
        setErrorMessage('Email ou mot de passe incorrect');
      } else if (loginError.response?.status === 429) {
        setErrorMessage('Trop de tentatives. Veuillez réessayer plus tard');
      } else if (loginError.response?.data?.message) {
        setErrorMessage(loginError.response.data.message);
      } else if (loginError.message) {
        setErrorMessage(loginError.message);
      } else {
        setErrorMessage('Une erreur est survenue. Veuillez réessayer.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundImage:
          'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(30,30,30,1) 41%, rgba(57,56,56,1) 67%, rgba(131,119,92,1) 100%, rgba(212,169,74,1) 100%, rgba(225,164,26,1) 100%)',
      }}
    >
      <Container component="main" maxWidth="xs">
        <Paper
          elevation={3}
          sx={{
            marginTop: 8,
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#e0a31b' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              mb: 3,
              fontFamily: 'Playfair Display',
              fontSize: '2rem',
            }}
          >
            Connexion
          </Typography>
          {/* Display error message */}
          {errorMessage && (
            <Alert
              severity="error"
              sx={{
                width: '100%',
                mb: 2,
                backgroundColor: '#e0a31b',
                color: '#000',
                '& .MuiAlert-icon': {
                  color: '#000',
                },
              }}
            >
              {errorMessage}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#e0a31b',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#e0a31b',
                },
                fontFamily: 'Roboto',
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="motDePasse" 
              label="Mot de passe"
              type="password"
              id="motDePasse"
              autoComplete="current-password"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#e0a31b',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#e0a31b',
                },
                fontFamily: 'Roboto',
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              sx={{
                mt: 3,
                mb: 2,
                background: 'linear-gradient(90deg, #e0a31b, #f1c40f)',
                color: '#000',
                fontFamily: 'Roboto',
                fontWeight: 500,
                '&:hover': {
                  background: 'linear-gradient(90deg, #f1c40f, #e0a31b)',
                  boxShadow: '0 0 10px #e0a31b',
                },
              }}
            >
              {isLoading ? (
                <CircularProgress size={24} sx={{ color: '#000' }} />
              ) : (
                'Se connecter'
              )}
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <MuiLink
                component={Link}
                to="/forgot-password"
                variant="body2"
                sx={{
                  color: '#e0a31b',
                  fontFamily: 'Roboto',
                  '&:hover': {
                    color: '#b47f12',
                  },
                }}
              >
                Mot de passe oublié?
              </MuiLink>
              <MuiLink
                component={Link}
                to="/register"
                variant="body2"
                sx={{
                  color: '#e0a31b',
                  fontFamily: 'Roboto',
                  '&:hover': {
                    color: '#b47f12',
                  },
                }}
              >
                Pas de compte? S'inscrire
              </MuiLink>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginForm;
