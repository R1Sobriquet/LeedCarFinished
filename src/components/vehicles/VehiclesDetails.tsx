// File: src/components/vehicles/VehiclesDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Box, CircularProgress } from '@mui/material';
import { Vehicle, vehicleService } from '../../services/vehicleService';
import { Link } from 'react-router-dom';

const VehicleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        if (id) {
          const data = await vehicleService.getVehicleDetails(parseInt(id));
          setVehicle(data);
        }
      } catch (err) {
        setError('Failed to load vehicle details');
      } finally {
        setLoading(false);
      }
    };

    fetchVehicleDetails();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error || !vehicle) {
    return (
      <Box p={3}>
        <Typography color="error">{error || 'Vehicle not found'}</Typography>
        <Button component={Link} to="/vehicles" sx={{ mt: 2 }}>
          Back to Vehicles
        </Button>
      </Box>
    );
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {vehicle.marque} {vehicle.modele}
        </Typography>
        
        <Box 
          component="img"
          src="https://i.imgur.com/cXbloBJ.jpeg"  // Voir comment ca marche plsu tard
          alt={`${vehicle.marque} ${vehicle.modele}`}
          sx={{ 
            width: 'auto', 
            maxHeight: 'auto', 
            objectFit: 'cover',
            borderRadius: 1,
            mb: 2
          }}
        />

        <Typography variant="body1" paragraph>
          {vehicle.description}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Couleur: {vehicle.couleur}
          {vehicle.places && ` | Places: ${vehicle.places}`}
        </Typography>

        <Button
          component={Link}
          to={`/booking/${vehicle.id}`}
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          disabled={!vehicle.disponible}
        >
          {vehicle.disponible ? 'Book Now' : 'Not Available'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default VehicleDetails;