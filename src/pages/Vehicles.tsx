import React, { useEffect, useState } from 'react';
import { 
  Grid, 
  Typography, 
  Box, 
  CircularProgress,
  Container,
  Fade,
  Paper
} from '@mui/material';
import VehicleCard from '../components/vehicles/VehicleCard';
import { Vehicle, vehicleService } from '../services/vehicleService';
import { useNavigate } from 'react-router-dom';

const Vehicles: React.FC = () => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const data = await vehicleService.getAllVehicles();
                setVehicles(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching vehicles:', err);
                setError('Erreur lors de la récupération des véhicules.');
                setLoading(false);
            }
        };

        fetchVehicles();
    }, []);

    if (loading) return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '80vh',
                gap: 2
            }}
        >
            <CircularProgress sx={{ color: '#e0a31b' }} />
            <Typography variant="h6" sx={{ color: '#666' }}>
                Chargement de nos véhicules...
            </Typography>
        </Box>
    );

    if (error) return (
        <Box 
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
                backgroundColor: 'rgba(255,0,0,0.1)',
                borderRadius: 2
            }}
        >
            <Typography variant="h6" color="error">{error}</Typography>
        </Box>
    );

    return (
        <Box 
            sx={{ 
                minHeight: '100vh',
                backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(30,30,30,1) 41%, rgba(57,56,56,1) 67%, rgba(131,119,92,1) 100%, rgba(212,169,74,1) 100%, rgba(225,164,26,1) 100%)',
                pt: 12,
                pb: 6
            }}
        >
            <Container maxWidth="xl">
                <Fade in timeout={1000}>
                    <Box>
                        <Typography 
                            variant="h2" 
                            textAlign="center" 
                            gutterBottom
                            sx={{ 
                                color: 'e0a31b',
                                fontFamily: 'Playfair Display',
                                mb: 5
                            }}
                        >
                            Nos Véhicules
                        </Typography>

                        {vehicles.length === 0 ? (
                            <Paper 
                                sx={{ 
                                    p: 4, 
                                    textAlign: 'center',
                                    backgroundColor: 'rgba(255,255,255,0.9)',
                                }}
                            >
                                <Typography variant="h6">
                                    Aucun véhicule disponible.
                                </Typography>
                            </Paper>
                        ) : (
                            <Fade in timeout={1000}>
                                <Grid 
                                    container 
                                    spacing={4}
                                    justifyContent={vehicles.length === 1 ? "center" : "flex-start"}
                                >
                                    {vehicles.map((vehicle) => (
                                        <Grid 
                                            item 
                                            xs={12} 
                                            sm={6} 
                                            md={vehicles.length === 1 ? 4 : 4} 
                                            key={vehicle.id}
                                        >
                                            <VehicleCard vehicle={vehicle} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Fade>
                        )}
                    </Box>
                </Fade>
            </Container>
        </Box>
    );
};

export default Vehicles;