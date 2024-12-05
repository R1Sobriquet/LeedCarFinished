import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
  Button,
  Fab
} from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import StarIcon from '@mui/icons-material/Star';
import GroupsIcon from '@mui/icons-material/Groups';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from 'react-router-dom'; 
import HomeIcon from '@mui/icons-material/Home'

const AboutPage = () => {
  const navigate = useNavigate();

  const values = [
    {
        icon: <HomeIcon sx={{ fontSize: 40, color: '#e0a31b' }} />,
        title: "Sécurité",
        description: "Votre sécurité est notre priorité absolue. Tous nos chauffeurs sont hautement qualifiés et nos véhicules régulièrement entretenus."
      },
      {
        icon: <HomeIcon sx={{ fontSize: 40, color: '#e0a31b' }} />,
        title: "Excellence",
        description: "Nous nous engageons à fournir un service d'exception, répondant aux plus hauts standards de qualité."
      },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#e0a31b' }} />,
      title: "Sécurité",
      description: "Votre sécurité est notre priorité absolue. Tous nos chauffeurs sont hautement qualifiés et nos véhicules régulièrement entretenus."
    },
    {
      icon: <StarIcon sx={{ fontSize: 40, color: '#e0a31b' }} />,
      title: "Excellence",
      description: "Nous nous engageons à fournir un service d'exception, répondant aux plus hauts standards de qualité."
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40, color: '#e0a31b' }} />,
      title: "Service Personnalisé",
      description: "Chaque client est unique, c'est pourquoi nous adaptons nos services à vos besoins spécifiques."
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 40, color: '#e0a31b' }} />,
      title: "Ponctualité",
      description: "La ponctualité est la politesse des rois. Nous nous engageons à respecter scrupuleusement les horaires."
    }
  ];

  return (
    <Box 
      sx={{ 
        backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(30,30,30,1) 41%, rgba(57,56,56,1) 67%, rgba(131,119,92,1) 100%, rgba(212,169,74,1) 100%, rgba(225,164,26,1) 100%)',
        minHeight: '100vh',
        color: 'white',
        pt: 12,
        pb: 6
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h1"
            sx={{ 
              mb: 3,
              fontFamily: 'Playfair Display',
              color: '#e0a31b'
            }}
          >
            À Propos de LeedCar
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
            Un service de transport haut de gamme alliant luxe, confort et professionnalisme
          </Typography>
          <Divider sx={{ 
            my: 4, 
            borderColor: 'rgba(224, 163, 27, 0.3)',
            width: '200px',
            mx: 'auto'
          }} />
        </Box>

        {/* History Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              mb: 4,
              fontFamily: 'Playfair Display',
              color: '#e0a31b',
              textAlign: 'center'
            }}
          >
            Notre Histoire
          </Typography>
          <Typography variant="body1" sx={{color: 'white', mb: 3, textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            Fondée avec la vision d'offrir un service de transport d'exception, LeedCar s'est établie comme une référence dans le secteur du transport VIP et particulier. Notre engagement envers l'excellence et la satisfaction client nous a permis de développer une clientèle fidèle et exigeante.
          </Typography>
          <Typography variant="body1" sx={{color:'white', textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            Aujourd'hui, notre flotte de véhicules haut de gamme et nos chauffeurs professionnels sont à votre disposition pour tous vos déplacements, qu'ils soient professionnels ou personnels.
          </Typography>
        </Box>

        {/* Values Section */}
        <Box sx={{ mb: 8}}>
          <Typography 
            variant="h3" 
            sx={{ 
              mb: 6,
              fontFamily: 'Playfair Display',
              color: '#e0a31b',
              textAlign: 'center'
            }}
          >
            Nos Valeurs
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    background: '#dddddd',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)'
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box sx={{ mb: 2, color: 'white'}}>
                      {value.icon}
                    </Box>
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        mb: 2,
                        color: '#e0a31b',
                        fontFamily: 'Playfair Display'
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'black' }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        {/* Mission Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              mb: 4,
              fontFamily: 'Playfair Display',
              color: '#e0a31b',
              textAlign: 'center'
            }}
          >
            Notre Mission
          </Typography>
          <Card 
            sx={{ 
              background: '#dddddd',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              p: 4
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="body1" paragraph>
                Notre mission est de redéfinir les standards du transport de luxe en offrant un service personnalisé et irréprochable. Nous nous engageons à :
              </Typography>
              <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" sx={{ color: '#e0a31b', mb: 1 }}>
                    Innovation
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'black', mb: 1 }}>
                    Adopter les dernières technologies pour améliorer constamment notre service
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" sx={{ color: '#e0a31b', mb: 1 }}>
                    Excellence
                  </Typography>
                  <Typography variant="body2"sx={{ color: 'black', mb: 1 }}>
                    Maintenir les plus hauts standards de qualité dans tous nos services
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="h6" sx={{ color: '#e0a31b', mb: 1 }}>
                    Satisfaction
                  </Typography>
                  <Typography variant="body2"sx={{ color: 'black', mb: 1 }}>
                    Dépasser les attentes de nos clients à chaque trajet
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <Fab
        onClick={() => navigate('/')}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          background: 'linear-gradient(90deg, #e0a31b, #f1c40f)',
          color: '#000',
          '&:hover': {
            background: 'linear-gradient(90deg, #f1c40f, #e0a31b)',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <HomeIcon />
      </Fab>
    </Box>
  );
};

export default AboutPage;
