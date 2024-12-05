// File: src/services/auth.ts
import api from './api';

export interface LoginCredentials {
  email: string;
  mot_de_passe: string; 
  captcha: string; 
}

export interface RegisterCredentials {
  prenom: string;
  nom: string;
  email: string;
  mot_de_passe: string;
  captcha: string;
}

export interface User {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  admin?: number;
  statut?: number;
}

export const authService = {
  async login(credentials: LoginCredentials) {
    const response = await api.post('/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  async register(credentials: RegisterCredentials) {
    const response = await api.post('/register', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
  },

  async logout() {
    try {
      await api.post('/logout');
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  },

  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('user');
    if (!userStr) return null;
    return JSON.parse(userStr);
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  },
};
