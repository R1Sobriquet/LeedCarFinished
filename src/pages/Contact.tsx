// File: src/pages/Contact.tsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Alert,
  Snackbar
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import { Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 


function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Here you would add your API call to send the email
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setOpenSnackbar(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(30,30,30,1) 41%, rgba(57,56,56,1) 67%, rgba(131,119,92,1) 100%, rgba(212,169,74,1) 100%, rgba(225,164,26,1) 100%)',
        pt: 12,
        pb: 6
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                background: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: 'Playfair Display',
                  color: '#000',
                  mb: 4
                }}
              >
                Contactez-nous
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <LocationOnIcon sx={{ color: '#e0a31b', mr: 2 }} />
                  <Box>
                    <Typography variant="body1" fontWeight="bold">Adresse</Typography>
                    <Typography variant="body2">Lieu-dit Arnoche</Typography>
                    <Typography variant="body2">47390 Layrac</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PhoneIcon sx={{ color: '#e0a31b', mr: 2 }} />
                  <Box>
                    <Typography variant="body1" fontWeight="bold">Téléphone</Typography>
                    <Typography variant="body2">06 13 76 96 05</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ color: '#e0a31b', mr: 2 }} />
                  <Box>
                    <Typography variant="body1" fontWeight="bold">Email</Typography>
                    <Typography variant="body2">contact@leedcar.com</Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                background: 'rgba(255, 255, 255, 0.9)'
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontFamily: 'Playfair Display',
                  color: '#000',
                  mb: 4
                }}
              >
                Envoyez-nous un message
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nom"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: '#e0a31b',
                          },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#e0a31b',
                        }
                      }} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: '#e0a31b',
                          },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#e0a31b',
                        }
                      }} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Sujet"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: '#e0a31b',
                          },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#e0a31b',
                        }
                      }} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&.Mui-focused fieldset': {
                            borderColor: '#e0a31b',
                          },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: '#e0a31b',
                        }
                      }} />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    mt: 3,
                    background: 'linear-gradient(90deg, #e0a31b, #f1c40f)',
                    color: '#000',
                    fontWeight: 500,
                    '&:hover': {
                      background: 'linear-gradient(90deg, #f1c40f, #e0a31b)',
                      boxShadow: '0 0 10px #e0a31b',
                    },
                  }}
                >
                  Envoyer le message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Message envoyé avec succès!
        </Alert>
      </Snackbar>
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
}

export default ContactPage;