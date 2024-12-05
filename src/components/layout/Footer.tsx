// File: src/components/layout/Footer.tsx
import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link as MuiLink,
  Divider,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (

    <div style={{ background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(30,30,30,1) 41%, rgba(57,56,56,1) 67%, rgba(131,119,92,1) 100%, rgba(212,169,74,1) 100%, rgba(225,164,26,1) 100%)' }}>
    <Box
      sx={{
        color: '#fff',
        pt: 6,
        pb: 3,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src="leedlogo.png"
              alt="Logo"
              sx={{
                height: '60px',
                width: 'auto',
                mb: 2
              }}
            />
            <Typography variant="body2" sx={{ mb: 2 }}>
              Service de location de voiture avec chauffeur. Professionnel et particulier, nous nous adaptons à vos besoins.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
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
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#e0a31b', mb: 2, fontFamily: 'Playfair Display' }}>
              Liens Rapides
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { name: 'Accueil', path: '/' },
                { name: 'Nos Véhicules', path: '/vehicles' },
                { name: 'Contact', path: '/contact' },
                { name: 'À Propos', path: '/about' }
              ].map((link) => (
                <MuiLink
                  key={link.name}
                  component={Link}
                  to={link.path}
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    '&:hover': {
                      color: '#e0a31b',
                      paddingLeft: '8px',
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  {link.name}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#e0a31b', mb: 2, fontFamily: 'Playfair Display' }}>
              Trouvez-nous
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ color: '#e0a31b' }} />
                <Typography color='white'>06 13 76 96 05 </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ color: '#e0a31b' }} />
                <Box>
                  <Typography color='white'>Lieu-dit Arnoche</Typography>
                  <Typography color='white'>47390 Layrac</Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                onClick={() => window.location.href = '/vehicles'}
                sx={{
                  bgcolor: '#e0a31b',
                  color: '#000',
                  mt: 2,
                  '&:hover': {
                    bgcolor: '#f1c40f',
                  }
                }}
              >
                Réserver Maintenant
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 4, mb: 3, bgcolor: 'rgba(224, 163, 27, 0.2)' }} />

        {/* Copyright */}
        <Typography 
          variant="body2" 
          align="center"
          sx={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.875rem'
          }}
        >
          © {currentYear}- Création et réalisation <img loading="lazy" decoding="async" src="https://leed-events.fr/wp-content/uploads/2024/04/D2COM-LOGO-VNB.webp" width="70" height="15" alt="D2COM LOGO VNB" className="wp-image-1778 alignnone size-full"></img> -Crédits photos LEED et Shutterstock
        </Typography>
      </Container>
    </Box>   
  </div>
  );
};

export default Footer;