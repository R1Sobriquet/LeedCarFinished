// File: src/pages/Vip.tsx
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
import StarIcon from '@mui/icons-material/Star';
import BusinessIcon from '@mui/icons-material/Business';
import SecurityIcon from '@mui/icons-material/Security';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TimelineIcon from '@mui/icons-material/Timeline';

export const VipPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const features = [
    {
      icon: <BusinessIcon sx={{ fontSize: 40, color: '#e0a31b' }} />,
      title: "Service Premium",
      description: "Une expérience de transport haut de gamme adaptée aux exigences professionnelles"
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#e0a31b' }} />,
      title: "Confidentialité Totale",
      description: "Discrétion absolue et respect de la confidentialité pour vos déplacements d'affaires"
    },
    {
      icon: <SupervisorAccountIcon sx={{ fontSize: 40, color: '#e0a31b' }} />,
      title: "Chauffeurs d'Excellence",
      description: "Chauffeurs multilingues formés aux standards internationaux"
    },
    {
      icon: <TimelineIcon sx={{ fontSize: 40, color: '#e0a31b' }} />,
      title: "Flexibilité Maximale",
      description: "Service sur mesure adapté à votre emploi du temps"
    },
    {
      icon: <StarIcon sx={{ fontSize: 40, color: '#e0a31b' }} />,
      title: "Confort Exceptionnel",
      description: "Flotte de véhicules luxueux équipés pour le travail mobile"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '70vh',
          position: 'relative',
          backgroundImage: 'url(/rangevip.jpg)', // Replace with luxury car image
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
              Excellence et Prestige
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
              Découvrez nos options
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
            Services VIP & Professionnels
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
                      boxShadow: '0 4px 20px rgba(224, 163, 27, 0.2)',
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

          {/* Additional Services Section */}
          <Box sx={{ mt: 8, mb: 4 }}>
            <Typography 
              variant="h3" 
              align="center" 
              sx={{ 
                mb: 4,
                color: '#000',
                fontFamily: 'Playfair Display'
              }}
            >
              Services Sur Mesure
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper 
                  elevation={3}
                  sx={{ 
                    p: 4,
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(224,163,27,0.1), rgba(255,255,255,1))'
                  }}
                >
                  <Typography variant="h5" gutterBottom fontFamily="Playfair Display">
                    Services Entreprise
                  </Typography>
                  <Typography paragraph>
                    • Transport d'affaires VIP<br />
                    • Événements corporate<br />
                    • Transferts aéroport prioritaires<br />
                    • Mise à disposition longue durée<br />
                    • Service de conciergerie
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper 
                  elevation={3}
                  sx={{ 
                    p: 4,
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(224,163,27,0.1), rgba(255,255,255,1))'
                  }}
                >
                  <Typography variant="h5" gutterBottom fontFamily="Playfair Display">
                    Avantages Premium
                  </Typography>
                  <Typography paragraph>
                    • Accueil personnalisé<br />
                    • Chauffeur personnel dédié<br />
                    • WiFi 4G embarqué<br />
                    • Rafraîchissements à bord<br />
                    • Service de majordome sur demande
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Box>

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
              Réserver un véhicule
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default VipPage;