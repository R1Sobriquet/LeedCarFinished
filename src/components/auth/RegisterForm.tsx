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
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    mot_de_passe: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { register, isLoading, error } = useAuth();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.prenom) newErrors.prenom = 'Le prénom est requis';
    if (!formData.nom) newErrors.nom = 'Le nom est requis';
    if (!formData.email) newErrors.email = "L'email est requis";
    if (!formData.mot_de_passe) newErrors.mot_de_passe = 'Le mot de passe est requis';
    if (formData.mot_de_passe !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      await register(
        formData.prenom,
        formData.nom,
        formData.email,
        formData.mot_de_passe
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
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
            <PersonAddIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              mb: 3,
              fontFamily: 'Playfair Display',
              fontSize: '2rem',
            }}
          >
            Créer un compte
          </Typography>
          {error && (
            <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
              {error}
            </Alert>
          )}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="prenom"
              label="Prénom"
              name="prenom"
              autoComplete="given-name"
              autoFocus
              value={formData.prenom}
              onChange={handleChange}
              error={!!errors.prenom}
              helperText={errors.prenom}
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
              id="nom"
              label="Nom"
              name="nom"
              autoComplete="family-name"
              value={formData.nom}
              onChange={handleChange}
              error={!!errors.nom}
              helperText={errors.nom}
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
              id="email"
              label="Adresse Email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
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
              name="mot_de_passe"
              label="Mot de passe"
              type="password"
              id="mot_de_passe"
              autoComplete="new-password"
              value={formData.mot_de_passe}
              onChange={handleChange}
              error={!!errors.mot_de_passe}
              helperText={errors.mot_de_passe}
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
              name="confirmPassword"
              label="Confirmer le mot de passe"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
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
                "S'inscrire"
              )}
            </Button>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <MuiLink
                component={Link}
                to="/login"
                variant="body2"
                sx={{
                  color: '#e0a31b',
                  fontFamily: 'Roboto',
                  '&:hover': {
                    color: '#b47f12',
                  },
                }}
              >
                Déjà un compte? Se connecter
              </MuiLink>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default RegisterForm;
