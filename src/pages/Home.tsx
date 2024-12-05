// File: src/pages/Home.tsx
import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  IconButton
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Home = () => {
  const navigate = useNavigate();

//Statiqtiques leedcar
  const stats = [
    { number: "1000+", label: "Clients Satisfaits" },
    { number: "24/7", label: "Service Client" },
    { number: "50+", label: "Véhicules Premium" },
    { number: "100%", label: "Sécurité" }
  ];

// témoignage clients 
  const testimonials = [
    {
      name: "Sophie Martin",
      role: "Directrice Marketing",
      comment: "Service exceptionnel, chauffeurs professionnels. Parfait pour les déplacements d'affaires.",
      avatar: "happywaman.jpg"
    },
    {
      name: "Jean Dupont",
      role: "Entrepreneur",
      comment: "La meilleure expérience de service de chauffeur que j'ai jamais eue. Ponctuel et luxueux.",
      avatar: "happyman.jpg"
    },
    {
      name: "Damien Laurent",
      role: "Chef d'entreprise",
      comment: "Un service client impeccable et des véhicules haut de gamme. Très efficace ! Je recommande vivement.",
      avatar: "veryhappyman.jpg"
    }
  ];

  return (
    <Box>
      <Box
        sx={{
          height: '100vh',
          position: 'relative',
          backgroundImage:'url(/maincar.jpg)', //image centrale de la page d'accueil
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 800 }}>
            <Typography 
              variant="h1" 
              sx={{ 
                color: '#fff',
                fontFamily: 'Playfair Display',
                fontSize: { xs: '2.5rem', md: '4rem' },
                mb: 2,
                fontWeight: 'bold'
              }}
            >
              L'Excellence du Transport
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                color: '#e0a31b',
                fontFamily: 'Playfair Display',
                fontSize: { xs: '1.5rem', md: '2rem' },
                mb: 4
              }}
            >
              Besoin d'un vehicule avec chauffeur ?
            </Typography>
            <Grid container spacing={3} sx={{ mt: 4 }}>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => navigate('/vip')}
                  sx={{
                    background: 'linear-gradient(90deg, #e0a31b, #f1c40f)',
                    color: '#000',
                    py: 2,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #f1c40f, #e0a31b)',
                      transform: 'scale(1.02)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  PROFESSIONNEL / VIP
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => navigate('/particulier')}
                  sx={{
                    background: 'linear-gradient(90deg, #e0a31b, #f1c40f)',
                    color: '#000',
                    py: 2,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #f1c40f, #e0a31b)',
                      transform: 'scale(1.02)',
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  PARTICULIER
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ py: 8, backgroundImage: 'linear-gradient(90deg, #000000 0%, #2b2100 100%)' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box
                  sx={{
                    textAlign: 'center',
                    color: '#fff'
                  }}
                >
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      color: '#e0a31b',
                      fontWeight: 'bold',
                      mb: 1
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="h6">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              mb: 6,
              fontFamily: 'Playfair Display',
              color: '#000'
            }}
          >
            Nos Engagements
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Paper 
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)'
                  }
                }}
              >
                <StarIcon sx={{ fontSize: 40, color: '#e0a31b', mb: 2 }} />
                <Typography variant="h5" gutterBottom>Service Premium</Typography>
                <Typography>Une expérience de transport exceptionnelle</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper 
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)'
                  }
                }}
              >
                <SecurityIcon sx={{ fontSize: 40, color: '#e0a31b', mb: 2 }} />
                <Typography variant="h5" gutterBottom>Sécurité</Typography>
                <Typography>Votre sécurité est notre priorité</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper 
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)'
                  }
                }}
              >
                <SpeedIcon sx={{ fontSize: 40, color: '#e0a31b', mb: 2 }} />
                <Typography variant="h5" gutterBottom>Ponctualité</Typography>
                <Typography>Respect strict des horaires</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper 
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)'
                  }
                }}
              >
                <SupportAgentIcon sx={{ fontSize: 40, color: '#e0a31b', mb: 2 }} />
                <Typography variant="h5" gutterBottom>Support 24/7</Typography>
                <Typography>À votre service à tout moment</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 8, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              mb: 6,
              fontFamily: 'Playfair Display'
            }}
          >
            Ils nous font confiance
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      boxShadow: '0 8px 24px rgba(224,163,27,0.2)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography 
                      variant="body1" 
                      paragraph
                      sx={{ 
                        fontStyle: 'italic',
                        mb: 2
                      }}
                    >
                      "{testimonial.comment}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        component="img"
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: '30%',
                          mr: 3
                        }}
                      />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box 
        sx={{ 
          py: 8, 
          bgcolor: '#000',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(224,163,27,0.2), rgba(0,0,0,0.9))',
            zIndex: 1
          }
        }}
      >
        <Container 
          maxWidth="md" 
          sx={{ 
            position: 'relative',
            zIndex: 2,
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="h3" 
            sx={{ 
              color: '#fff',
              mb: 3,
              fontFamily: 'Playfair Display'
            }}
          >
            Prêt à vivre l'expérience LeedCar ?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#fff',
              mb: 4,
              opacity: 0.9
            }}
          >
            Réservez dès maintenant et découvrez l'excellence de notre service
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/vehicles')}
            sx={{
              background: 'linear-gradient(45deg, #e0a31b, #f1c40f)',
              color: '#000',
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              '&:hover': {
                background: 'linear-gradient(45deg, #f1c40f, #e0a31b)',
                transform: 'scale(1.05)'
              }
            }}
          >
            Réserver Maintenant
          </Button>
        </Container>
      </Box>

{/* Social Media Section */}
<Box sx={{ py: 4, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              gap: 2
            }}
          >
            <IconButton 
              href="https://www.facebook.com/p/Leed-Car-61557653964410/?_rdr"
              target="_blank"
              sx={{ 
                color: '#e0a31b',
                '&:hover': { transform: 'translateY(-3px)' }
              }}
            >
              <FacebookIcon />
            </IconButton>
            
            <IconButton 
              href="https://www.instagram.com/leed.car/"
              target="_blank"
              sx={{ 
                color: '#e0a31b',
                '&:hover': { transform: 'translateY(-3px)' }
              }}
            >
              <InstagramIcon />
            </IconButton>
            
            <IconButton 
              href="https://www.linkedin.com/company/leed-evenementiel/"
              target="_blank"
              sx={{ 
                color: '#e0a31b',
                '&:hover': { transform: 'translateY(-3px)' }
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;