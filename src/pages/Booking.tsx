import React, { useEffect, useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios'; // Import axios for API requests
import { useNavigate } from 'react-router-dom';

const Booking: React.FC = () => {
    const [vehicleId, setVehicleId] = useState<number | string>(''); // Vehicle ID selection
    const [pickupDate, setPickupDate] = useState<string>('');
    const [pickupTime, setPickupTime] = useState<string>('');
    const [availableHours, setAvailableHours] = useState<string[]>([]); // Available hours for the selected vehicle
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    // Fetch available hours for a vehicle
    const fetchAvailableHours = async (vehicleId: number | string) => {
        try {
            const response = await axios.post(
                'https://lorieau.alwaysdata.net/leedcar/api/reservations/available-hours',
                { vehicleId }
            );
            setAvailableHours(response.data); // Set available hours from the API response
        } catch (err) {
            setError('Erreur lors de la récupération des heures disponibles.');
        }
    };

    // Handle form submission for booking
    const handleBookingSubmit = async () => {
        try {
            const response = await axios.post('https://lorieau.alwaysdata.net/leedcar/api/reservations/make', {
                vehicleId,
                pickupDate,
                pickupTime
            });
            navigate('/home'); // Redirect to home page after booking
        } catch (err) {
            setError('Erreur lors de la réservation. Essayez à nouveau.');
        }
    };

    return (
        <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
            <Typography variant="h4" color="text.primary" gutterBottom>
                Réservez votre voiture
            </Typography>
            {error && <Typography color="error" gutterBottom>{error}</Typography>}
            
            <TextField
                label="ID du véhicule"
                type="number"
                fullWidth
                value={vehicleId}
                onChange={(e) => setVehicleId(e.target.value)}
                sx={{ marginBottom: 2 }}
            />

            <Button onClick={() => fetchAvailableHours(vehicleId)} variant="outlined" sx={{ marginBottom: 2 }}>
                Obtenir les heures disponibles
            </Button>

            <TextField
                label="Date de pickup"
                type="date"
                fullWidth
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                sx={{ marginBottom: 2 }}
            />

            {availableHours.length > 0 && (
                <TextField
                    label="Heure de pickup"
                    select
                    fullWidth
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    sx={{ marginBottom: 2 }}
                    SelectProps={{
                        native: true,
                    }}
                >
                    {availableHours.map((hour, index) => (
                        <option key={index} value={hour}>
                            {hour}
                        </option>
                    ))}
                </TextField>
            )}

            <Button onClick={handleBookingSubmit} variant="contained" color="primary">
                Confirmer la réservation
            </Button>
        </Box>
    );
};

export default Booking;
