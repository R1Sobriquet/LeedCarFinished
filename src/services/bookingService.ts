import api from './api';

export interface Reservation {
  vehicle_id: number;
  start_date: string;
  end_date: string;
}

export const bookingService = {
  makeReservation: async (reservationData: Reservation) => {
    const response = await api.post('/reservations/make', reservationData);
    return response.data;
  },

  checkAvailability: async (vehicle_id: number, start_date: string, end_date: string) => {
    const response = await api.post('/reservations/available-hours', {
      vehicle_id,
      start_date,
      end_date
    });
    return response.data;
  },

  getUserReservations: async (email: string) => {
    const response = await api.get(`/user/${email}/reservations`);
    return response.data;
  }
};