import api from "./api";

// Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface Vehicle {
  id: number;
  marque: string;
  modele: string;
  couleur: string;
  places: number;
  disponible: boolean;
  description: string;
  image_path: string;
  tarif_km: number;
}

export interface Reservation {
  id?: number;
  vehicle_id: number;
  start_date: string;
  end_date: string;
}

export interface User {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  admin: boolean;
}

// Auth endpoints
export const authAPI = {
  login: (credentials: LoginCredentials) => api.post("/login", credentials),

  register: (credentials: RegisterCredentials) =>
    api.post("/register", credentials),

  logout: () => api.post("/logout"),

  getCurrentUser: () => api.get("/user"),
};

// Vehicle endpoints
export const vehicleAPI = {
  getAllVehicles: () => api.get("/vehicules"),

  getVehicle: (id: number) => api.get(`/vehicules/${id}`),

  addVehicle: (vehicleData: Partial<Vehicle>) =>
    api.post("/ajoutvehicule", vehicleData),

  updateVehicle: (id: number, vehicleData: Partial<Vehicle>) =>
    api.put(`/modifvehicules/${id}`, vehicleData),

  deleteVehicle: (id: number) => api.delete(`/vehicules/${id}`),
};

// User endpoints
export const userAPI = {
  getUsers: () => api.get("/user"), // Gets current user
  updateUserStatus: (userId: number, status: "enable" | "disable") =>
    api.put(`/user/${userId}/status`, { action: status }),
};
// Reservation endpoints
export const reservationAPI = {
  makeReservation: (reservationData: Reservation) =>
    api.post("/reservations/make", reservationData),

  checkAvailability: (vehicleId: number, startDate: string, endDate: string) =>
    api.post("/reservations/available-hours", {
      vehicle_id: vehicleId,
      start_date: startDate,
      end_date: endDate,
    }),

  getUserReservations: (email: string) =>
    email === "all"
      ? api.get("/reservations")
      : api.get(`/user/${email}/reservations`),

  getVehicleReservations: (vehicleId: number) =>
    api.get(`/vehicules/${vehicleId}/reservations`),
};

// Payment endpoints
export const paymentAPI = {
  createStripeSession: (data: any) => api.post("/stripe/create-session", data),

  checkPaymentStatus: () => api.get("/stripe/check-payment-status"),
};
