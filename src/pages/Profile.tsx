// File: src/pages/Profile.tsx
import React, { useEffect, useState } from 'react';
import { 
  Container, 
  Paper, 
  Typography, 
  Box, 
  Grid, 
  Avatar, 
  Divider,
  Tab,
  Tabs,
  Card,
  CardContent,
  Chip,
  CircularProgress
} from '@mui/material';
import { bookingService } from '../services/bookingService';
import { authService } from '../services/auth';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export const ProfilePage = () => {
  const [value, setValue] = useState(0);
  const [user, setUser] = useState<any>(null);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await authService.getCurrentUser();
        setUser(userData);
        if (userData) {
          const userReservations = await bookingService.getUserReservations(userData.email);
          setReservations(userReservations);
        }
//        setReservations(userReservations);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress sx={{ color: '#e0a31b' }} />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Profile Overview */}
        <Grid item xs={12}>
          <Paper 
            elevation={3}
            sx={{ 
              p: 3,
              background: 'linear-gradient(135deg, rgba(224,163,27,0.1), rgba(255,255,255,1))',
              borderRadius: 2
            }}
          >
            <Box display="flex" alignItems="center" gap={3}>
              <Avatar 
                sx={{ 
                  width: 100, 
                  height: 100,
                  bgcolor: '#e0a31b'
                }}
              >
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </Avatar>
              <Box>
                <Typography variant="h1" sx={{ fontSize: '2rem', mb: 1 }}>
                  {user?.name || 'Utilisateur'}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {user?.email}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>

        {/* Tabs Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ borderRadius: 2 }}>
            <Tabs 
              value={value} 
              onChange={(e, newValue) => setValue(newValue)}
              sx={{
                '& .MuiTab-root': {
                  fontFamily: 'Playfair Display',
                  color: '#000',
                  '&.Mui-selected': {
                    color: '#e0a31b',
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#e0a31b',
                },
              }}
            >
              <Tab label="Réservations" />
              <Tab label="Informations" />
            </Tabs>

            <TabPanel value={value} index={0}>
              <Grid container spacing={2}>
                {reservations.map((reservation: any) => (
                  <Grid item xs={12} key={reservation.id}>
                    <Card 
                      elevation={2}
                      sx={{ 
                        '&:hover': {
                          boxShadow: '0 0 10px rgba(224,163,27,0.3)',
                        },
                      }}
                    >
                      <CardContent>
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={12} sm={4}>
                            <Typography variant="h6" fontFamily="Playfair Display">
                              {reservation.vehicle?.marque} {reservation.vehicle?.modele}
                            </Typography>
                            <Typography color="text.secondary" variant="body2">
                              Réservation #{reservation.id}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={4}>
                            <Typography variant="body2">
                              Du: {new Date(reservation.start_date).toLocaleDateString()}
                            </Typography>
                            <Typography variant="body2">
                              Au: {new Date(reservation.end_date).toLocaleDateString()}
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={4} textAlign="right">
                            <Chip 
                              label={reservation.status} 
                              color={reservation.status === 'confirmed' ? 'success' : 'default'}
                              sx={{ 
                                bgcolor: reservation.status === 'confirmed' ? '#e0a31b' : undefined,
                                color: reservation.status === 'confirmed' ? 'white' : undefined,
                              }}
                            />
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" gutterBottom fontFamily="Playfair Display">
                    Informations Personnelles
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body1" gutterBottom>
                      <strong>Nom:</strong> {user?.name}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      <strong>Email:</strong> {user?.email}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      <strong>Membre depuis:</strong> {new Date(user?.created_at).toLocaleDateString()}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};