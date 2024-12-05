import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  CircularProgress, 
  Alert, 
  Box, 
  Grid2
} from '@mui/material';
import { vehicleService, Vehicle } from '../../services/vehicleService';
import VehicleCard from './VehicleCard';

export const VehiclesPage: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        setIsLoading(true);
        const fetchedVehicles = await vehicleService.getAllVehicles();
        setVehicles(fetchedVehicles);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message || 'Failed to load vehicles');
        setIsLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  if (isLoading) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
      Véhicules disponibles
      </Typography>
      <Grid2 container spacing={3}>
        {vehicles.map((vehicle) => (
          <Grid item xs={12} sm={6} md={4} key={vehicle.id}>
            <VehicleCard vehicle={vehicle} />
          </Grid>
        ))}
      </Grid2>
    </Container>
  );
};