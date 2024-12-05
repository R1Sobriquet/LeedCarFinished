// File: src/services/userService.ts
import api from './api';

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  driver_license?: string;
}

export interface UpdateProfileData {
  name?: string;
  phone?: string;
  address?: string;
  driver_license?: string;
}

export const userService = {
  async getUserProfile(): Promise<UserProfile> {
    try {
      const response = await api.get('/user');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch user profile', error);
      throw error;
    }
  },

  async updateProfile(data: UpdateProfileData): Promise<UserProfile> {
    try {
      const response = await api.put('/user/profile', data);
      return response.data;
    } catch (error) {
      console.error('Failed to update profile', error);
      throw error;
    }
  },

  async getUserBookings(): Promise<any[]> {
    try {
      const response = await api.get('/user/reservations');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch user bookings', error);
      throw error;
    }
  }
};