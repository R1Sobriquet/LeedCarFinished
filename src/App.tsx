// File: src/App.tsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme/theme";

// Components
import LoginForm from "./components/auth/LoginForm";
import { RegisterForm } from "./components/auth/RegisterForm";
import Layout from "./components/layout/Layout";
import { Home } from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import VehiclesDetails from "./components/vehicles/VehiclesDetails";
import { ProfilePage } from "./pages/Profile";
import { ParticulierPage } from "./pages/Particulier";
import { VipPage } from "./pages/Vip";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/vehicles/:id" element={<VehiclesDetails />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/particulier" element={<ParticulierPage />} />
              <Route path="/vip" element={<VipPage />} />
              <Route path="/contact" element={<div>Contact Page</div>} />
              <Route path="/AdminDashboard" element={<AdminDashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
