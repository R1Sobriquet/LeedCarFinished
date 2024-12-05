// File: src/components/profile/ProfileEditForm.tsx
import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Grid 
} from '@mui/material';
import { UserProfile, UpdateProfileData } from '../../services/userService';
import { userService } from '../../services/userService';

interface ProfileEditFormProps {
  initialProfile: UserProfile;
  onUpdate: (updatedProfile: UserProfile) => void;
}

export const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ 
  initialProfile, 
  onUpdate 
}) => {
  const [formData, setFormData] = useState<UpdateProfileData>({
    name: initialProfile.name,
    phone: initialProfile.phone,
    address: initialProfile.address,
    driver_license: initialProfile.driver_license
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updatedProfile = await userService.updateProfile(formData);
      onUpdate(updatedProfile);
    } catch (error) {
      console.error('Failed to update profile', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={formData.phone || ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            value={formData.address || ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Driver License"
            name="driver_license"
            value={formData.driver_license || ''}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
          >
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};