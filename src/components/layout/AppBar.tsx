import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const pages = [
  { name: "Accueil", path: "/" },
  { name: "Nos Véhicules", path: "/vehicles" },
  { name: "Contact", path: "/contact" },
];

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuClick = (path: string) => {
    navigate(path);
    handleCloseNavMenu();
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const buttonStyle = {
    FontFamily: "Inter",
    background: "none",
    color: "#e0a31b",
    px: 3,
    py: 1,
    borderRadius: "none",
    textTransform: "none",
    fontWeight: "bold",
    border: "none",
    "&:hover": {
      background: "#f1c40f",
      color: "#000",
      borderColor: "#f1c40f",
    },
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(30,30,30,1) 41%, rgba(57,56,56,1) 67%, rgba(131,119,92,1) 100%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: "64px" }}>
          {/* Logo */}
          <Box
            sx={{
              bgcolor: "#000",
              height: "64px",
              display: "flex",
              alignItems: "center",
              width: "64px",
              px: 2,
            }}
          >
            <Link to="/">
              <Box
                component="img"
                src="leedlogo.png"
                alt="Logo"
                sx={{
                  display: "flex",
                  height: "70px",
                  width: "70px",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Link>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              sx={{ color: "#e0a31b" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  bgcolor: "#000",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => handleMenuClick(page.path)}
                >
                  <Button sx={buttonStyle}>{page.name}</Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => handleMenuClick(page.path)}
                sx={buttonStyle}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Auth Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {isAuthenticated ? (
              <Button onClick={handleLogout} sx={buttonStyle}>
                Déconnexion
              </Button>
            ) : (
              <>
                <Button onClick={() => navigate("/login")} sx={buttonStyle}>
                  Connexion
                </Button>
                <Button
                  onClick={() => navigate("/register")}
                  sx={{
                    ...buttonStyle,
                    px: 4,
                  }}
                >
                  Inscription
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
