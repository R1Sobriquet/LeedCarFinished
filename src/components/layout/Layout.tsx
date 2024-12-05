// File: src/components/layout/Layout.tsx
import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;