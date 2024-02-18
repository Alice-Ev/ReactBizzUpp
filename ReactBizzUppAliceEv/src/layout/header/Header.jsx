import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Switch } from "@mui/material";
import Links from "./ui/Links";
import LeftDrawerComponent from "./ui/LeftDrawerComponent";
import FilterComponent from "./ui/FilterComponent";
import useHeader from "../../hooks/useHeader";
import LoginContext from "../../store/loginContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { toast } from "react-toastify";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = ({ isDarkTheme, onThemeChange }) => {
  const {
    handleProfileMenuOpen,
    handleMobileMenuOpen,
    handleThemeChange,
    handleOpenDrawerClick,
    handleCloseDrawerClick,
    menuId,
    mobileMenuId,
    renderMobileMenu,
    renderMenu,
    isOpen,
  } = useHeader({ isDarkTheme, onThemeChange });

  const navigate = useNavigate();
  const { setLogin } = useContext(LoginContext);
  const { login } = useContext(LoginContext);
  const loggedIn = login;

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogin(false);
    toast("You logged out successfully 👌", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate(ROUTES.HOME);
  };

  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static" sx={{ backgroundColor: "#d5d7fe" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleOpenDrawerClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 4, display: { xs: "none", sm: "block" } }}
          >
            ALICE EV
          </Typography>
          <Links />
          <Box
            sx={{
              my: 2,
              p: 1,
              display: { xs: "flex" },
              marginLeft: "10vw",
            }}
          >
            <FilterComponent />
            <Switch checked={isDarkTheme} onChange={handleThemeChange} />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {loggedIn && (
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle sx={{ marginRight: "2vw" }} />
              </IconButton>
            )}
          </Box>
          {loggedIn && (
            <IconButton size="large" color="inherit" onClick={handleLogout}>
              <LogoutIcon sx={{ mr: 1 }} />
              <Typography variant="body1" sx={{ mr: 17 }}>
                LOGOUT
              </Typography>
            </IconButton>
          )}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <LeftDrawerComponent
        isOpen={isOpen}
        onCloseDrawer={handleCloseDrawerClick}
      />
    </Box>
  );
};
export default Header;
