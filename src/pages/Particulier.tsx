// File: src/pages/Particulier.tsx
import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button,
  Grid,
  Paper,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import EuroIcon from '@mui/icons-material/Euro';

export const ParticulierPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const features = [
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#e0a31b' }} />,
      title: "Chauffeurs professionnels",
      description: "Des chauffeurs expérimentés et formés pour assurer votre sécurité"
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40, color: '#e0a31b' }} />,
      title: "Disponibilité 24/7",
      description: "Service disponible à toute heure, tous les jours de la semaine"
    },
    {
      icon: <DirectionsCarIcon sx={{ fontSize: 40, color: '#e0a31b' }} />,
      title: "Véhicules haut de gamme",
      description: "Flotte de véhicules confortables et parfaitement entretenus"
    },
    {
      icon: <PrivacyTipIcon sx={{ fontSize: 40, color: '#e0a31b' }} />,
      title: "Confidentialité",
      description: "Service discret et confidentiel garanti"
    },
    {
      icon: <EuroIcon sx={{ fontSize: 40, color: '#e0a31b' }} />,
      title: "Tarifs transparents",
      description: "Prix compétitifs et sans surprises"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '70vh',
          position: 'relative',
          backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/11/22/21/36/audience-1850665_1280.jpg )', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 600 }}>
            <Typography 
              variant="h1" 
              sx={{ 
                color: '#fff',
                fontFamily: 'Playfair Display',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 3
              }}
            >
              Retours de soirée en toute sécurité
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/vehicles')}
              sx={{
                background: 'linear-gradient(45deg, #e0a31b, #f1c40f)',
                color: '#000',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  background: 'linear-gradient(45deg, #f1c40f, #e0a31b)',
                }
              }}
            >
              Réserver maintenant
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Info Section */}
      <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              mb: 6,
              color: '#000',
              fontFamily: 'Playfair Display'
            }}
          >
            Pourquoi choisir LeedCar pour vos retours de soirée ?
          </Typography>
          
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                  }}
                >
                  {feature.icon}
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom 
                    sx={{ 
                      mt: 2,
                      fontFamily: 'Playfair Display'
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/vehicles')}
              sx={{
                background: 'linear-gradient(45deg, #e0a31b, #f1c40f)',
                color: '#000',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  background: 'linear-gradient(45deg, #f1c40f, #e0a31b)',
                }
              }}
            >
              Voir nos véhicules
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ParticulierPage;