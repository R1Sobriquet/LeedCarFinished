// File: src/components/booking/BookingForm.tsx
import React, { useState } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper, 
  Alert,
  CircularProgress 
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { bookingService } from '../../services/bookingService';

export const BookingForm: React.FC = () => {
  const { vehicleId } = useParams<{ vehicleId: string }>();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [availability, setAvailability] = useState<boolean | null>(null);

  const handleCheckAvailability = async () => {
    if (!startDate || !endDate) {
      setError('Veuillez sélectionner les deux dates');
      return;
    }

    setLoading(true);
    try {
      const available = await bookingService.checkAvailability(
        parseInt(vehicleId!),
        startDate,
        endDate
      );
      setAvailability(available);
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erreur lors de la vérification');
      setAvailability(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate || !endDate) {
      setError('Veuillez sélectionner les deux dates');
      return;
    }

    setLoading(true);
    try {
      await bookingService.makeReservation({
        vehicle_id: parseInt(vehicleId!),
        start_date: startDate,
        end_date: endDate,
      });
      navigate('/profile'); // Redirect to profile where they can see their bookings
      setError(null);
    } catch (err: any) {
      setError(err.response?.data?.message || 'La réservation a échoué');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 3, maxWidth: 500, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Réserver ce véhicule
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {availability && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Le véhicule est disponible pour ces dates!
        </Alert>
      )}

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Date de début"
          type="date"
          fullWidth
          margin="normal"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          label="Date de fin"
          type="date"
          fullWidth
          margin="normal"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            onClick={handleCheckAvailability}
            disabled={loading}
            fullWidth
          >
            Vérifier la disponibilité
          </Button>

          <Button
            type="submit"
            variant="contained"
            disabled={loading || !availability}
            fullWidth
          >
            {loading ? <CircularProgress size={24} /> : 'Réserver'}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};