import { useState } from 'react';
import { bookingService, Reservation } from '../services/bookingService';
import { useNavigate } from 'react-router-dom';

export const useBooking = (vehicleId: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [availability, setAvailability] = useState<boolean | null>(null);
  const navigate = useNavigate();

  const checkAvailability = async (startDate: string, endDate: string) => {
    try {
      const isAvailable = await bookingService.checkAvailability(vehicleId, startDate, endDate);
      setAvailability(isAvailable);
      return isAvailable;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Erreur de vérification de disponibilité');
      return false;
    }
  };

  const createBooking = async (bookingData: Reservation) => {
    setIsLoading(true);
    setError(null);
    try {
      const booking = await bookingService.makeReservation(bookingData);  // Changed to match bookingService
      navigate('/profile');  // Changed to match our flow
      return booking;
    } catch (err: any) {
      setError(err.response?.data?.message || 'La réservation a échoué');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createBooking,
    checkAvailability,
    isLoading,
    error,
    availability
  };
};