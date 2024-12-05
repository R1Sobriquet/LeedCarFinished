import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button, 
  CardActions 
} from '@mui/material';
import { Vehicle } from '../../services/vehicleService';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'; // Import du hook useAuth

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // Vérifiez si l'utilisateur est authentifié

  const handleBookNow = () => {
    if (!isAuthenticated) {
      navigate('/login'); // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
      return;
    }
    navigate(`/booking/${vehicle.id}`);
  };

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 600,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        boxShadow: 3,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        border: '2px solid transparent',
        '&:hover': {
          transform: 'scale(1.05)', // Agrandissement léger
          boxShadow: '0 0 20px 5px rgba(224, 163, 27, 0.7)', // Ombre dorée
          borderColor: '#e0a31b', // Bordure dorée
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 300, objectFit: 'cover' }}
        image={`https://lorieau.alwaysdata.net/leedcar/storage/app/public/${vehicle.image_path}`}
        alt={`${vehicle.marque} ${vehicle.modele}`}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.src = 'https://i.imgur.com/cXbloBJ.jpeg';
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div">
          {vehicle.marque} {vehicle.modele}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {vehicle.places} places • {vehicle.couleur}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {vehicle.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={handleBookNow}
          fullWidth
          disabled={!vehicle.disponible}
        >
          {vehicle.disponible ? 'Réservez maintenant' : 'Non disponible pour le moment'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default VehicleCard;
