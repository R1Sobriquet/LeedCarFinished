// File: src/hooks/useAuth.ts
import { useState } from 'react';
import { authService } from '../services/auth';
import { useNavigate } from 'react-router-dom';

interface AuthError {
  message?: string;
  response?: {
    data?: {
      message?: string;
    };
    status?: number;
  };
}

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const extractErrorMessage = (err: AuthError) => {
    return err.response?.data?.message || err.message || 'Une erreur est survenue.';
  };

  const login = async (email: string, mot_de_passe: string) => {
    setIsLoading(true);
    setError(null);

    if (!email || !mot_de_passe) {
      setError('Email et mot de passe sont requis.');
      setIsLoading(false);
      return;
    }

    try {
      console.log('Attempting login with:', { email, mot_de_passe });
      await authService.login({ email, mot_de_passe, captcha: '4' });
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Login error details:', err.response?.data || err.message);
      setError(extractErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (prenom: string, nom: string, email: string, mot_de_passe: string) => {
    setIsLoading(true);
    setError(null);

    if (!prenom || !nom || !email || !mot_de_passe) {
      setError('Prénom, nom, email et mot de passe sont requis.');
      setIsLoading(false);
      return;
    }

    try {
      console.log('Attempting registration with:', { prenom, nom, email, mot_de_passe });
      await authService.register({ prenom, nom, email, mot_de_passe, captcha: '4' });
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Register error details:', err.response?.data || err.message);
      setError(extractErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await authService.logout();
      navigate('/login');
    } catch (err: any) {
      console.error('Logout error details:', err.response?.data || err.message);
      setError(extractErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    register,
    logout,
    isLoading,
    error,
    isAuthenticated: authService.isAuthenticated(),
    currentUser: authService.getCurrentUser(),
  };
};
