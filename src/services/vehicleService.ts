// File: src/services/vehicleService.ts
import api from './api';

export interface Vehicle {
  id: number;
  marque: string;
  modele: string;
  couleur: string;
  places: number;
  description: string;
  disponible: number;
  image_path: string;
}

export const vehicleService = {
  getAllVehicles: async () => {
    const response = await api.get<Vehicle[]>('/vehicules');
    return response.data;
  },

  getVehicleDetails: async (id: number) => {
    const response = await api.get<Vehicle>(`/vehicules/${id}`);
    return response.data;
  }
};