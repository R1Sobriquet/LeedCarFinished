// services/adminAPI.ts
import api from "./api";

export const adminAPI = {
  // Users/Drivers
  getChauffeurs: () => api.get("/chauffeurs"),

  // Reservations
  assignChauffeur: (reservationId: number, data: any) =>
    api.post(`/reservations/${reservationId}/assign`, data),

  // Positions
  getPositions: () => api.get("/positions"),

  getFilteredPositions: () => api.get("/filtered-positions"),

  addPosition: (positionData: any) => api.post("/positions", positionData),
};
// Add to your existing API service
export const userAPI = {
  getAllUsers: () => api.get("/users"),

  deleteUser: (id: number) => api.delete(`/users/${id}`),
};

export default adminAPI;
