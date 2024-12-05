import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  TextField,
  Tab,
  Tabs,
  IconButton,
  CircularProgress,
  Alert,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { vehicleAPI, reservationAPI, userAPI } from "../services/apiService";

export const AdminDashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Data states
  const [vehicles, setVehicles] = useState([]);
  const [users, setUsers] = useState<User[]>([]);
 
  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    setError(null);
    try {
      const vehiclesRes = await vehicleAPI.getAllVehicles();
      setVehicles(vehiclesRes.data || []);

      try {
        const usersRes = await userAPI.getAllUsers();
        setUsers(usersRes.data || []);
      } catch (err) {
        console.error("Error fetching users:", err);
        setUsers([]);
      }
    } catch (err) {
      console.error("Error details:", err);
      setError("Erreur lors du chargement des données");
    } finally {
      setLoading(false);
    }
  };

  const handleDeactivateUser = async (id: number) => {
    try {
      await userAPI.deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError("Erreur lors de la désactivation de l'utilisateur");
    }
  };

  const handleDeleteVehicle = async (id: number) => {
    try {
      await vehicleAPI.deleteVehicle(id);
      fetchDashboardData();
    } catch (err) {
      setError(`Erreur lors de la suppression`);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress sx={{ color: "#e0a31b" }} />
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", mt: 8 }}>
      <Container maxWidth="xl" sx={{ pt: 4, pb: 8 }}>
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            fontFamily: "Playfair Display",
            color: "#000",
            textAlign: "center",
          }}
        >
          Dashboard Administrateur
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 4 }}>
            {error}
          </Alert>
        )}

        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          sx={{
            mb: 3,
            "& .MuiTab-root": {
              color: "#000",
              "&.Mui-selected": {
                color: "#e0a31b",
              },
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#e0a31b",
            },
          }}
        >
          <Tab label="UTILISATEURS" />
          <Tab label="VÉHICULES" />
          <Tab label="RÉSERVATIONS" />
          <Tab label="CHAUFFEURS" />
        </Tabs>

        {/* Global Search Bar */}
        <Box sx={{ mb: 3 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#e0a31b",
                },
              },
            }}
          />
        </Box>

        {/* Users Tab */}
        {tabValue === 0 && (
          <Box>
            {users
              .filter((user: any) =>
                Object.values(user).some((val) =>
                  val
                    ?.toString()
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()),
                ),
              )
              .map((user: any) => (
                <Paper key={user.id} sx={{ p: 3, mb: 2 }}>
                  <Box>
                    <Typography variant="subtitle1">
                      <strong>Prénom:</strong> {user.prenom}
                    </Typography>
                    <Typography variant="subtitle1">
                      <strong>Nom:</strong> {user.nom}
                    </Typography>
                    <Typography variant="subtitle1">
                      <strong>Email:</strong> {user.email}
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => handleDeactivateUser(user.id)}
                      sx={{
                        mt: 2,
                        bgcolor: "#e0a31b",
                        "&:hover": { bgcolor: "#c88f18" },
                      }}
                    >
                      Désactiver
                    </Button>
                  </Box>
                </Paper>
              ))}
          </Box>
        )}

        {/* Vehicles Tab */}
        {tabValue === 1 && (
          <>
            <Box sx={{ mb: 3, display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                sx={{
                  bgcolor: "#e0a31b",
                  "&:hover": {
                    bgcolor: "#c88f18",
                  },
                }}
              >
                Ajouter un véhicule
              </Button>
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Marque</TableCell>
                    <TableCell>Modèle</TableCell>
                    <TableCell>Couleur</TableCell>
                    <TableCell>Places</TableCell>
                    <TableCell>Tarif/km</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {vehicles
                    .filter((vehicle) =>
                      Object.values(vehicle).some((val) =>
                        val
                          ?.toString()
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()),
                      ),
                    )
                    .map((vehicle: any) => (
                      <TableRow key={vehicle.id}>
                        <TableCell>{vehicle.marque}</TableCell>
                        <TableCell>{vehicle.modele}</TableCell>
                        <TableCell>{vehicle.couleur}</TableCell>
                        <TableCell>{vehicle.places}</TableCell>
                        <TableCell>{vehicle.tarif_km}€</TableCell>
                        <TableCell>
                          <IconButton sx={{ color: "#e0a31b" }}>
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Container>
    </Box>
  );
};

export default AdminDashboard;
