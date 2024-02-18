import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MainNavLink from "../header/MainNavLink";
import { alwaysLinks, loggedInLinks, bizLinks } from "../../layout/myLinks";
import HomeIcon from "@mui/icons-material/Home";
import { Box, List, ListItemIcon } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import StyleIcon from "@mui/icons-material/Style";
import LoginContext from "../../store/loginContext";
import { useContext } from "react";

const Footer = () => {
  const [value, setValue] = React.useState(0);
  const { login } = useContext(LoginContext);
  const loggedIn = login;

  return (
    <Box elevation={4} sx={{ width: "500", position: "sticky", mt: 2 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
        <List
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
          }}
        >
          {alwaysLinks.map((myItem, index) => (
            <MainNavLink to={myItem.to} key={"linksnav" + index}>
              <ListItemIcon
                sx={{
                  height: 30,
                  display: "flex",
                  justifyContent: "center",
                  mt: 1,
                }}
              >
                {index % 2 === 0 ? <HomeIcon sx={{}} /> : <InfoIcon />}
              </ListItemIcon>
              {myItem.children}
            </MainNavLink>
          ))}
          {loggedIn &&
            loggedInLinks.map((myItem, index) => (
              <MainNavLink to={myItem.to} key={"linksnav2" + index}>
                <ListItemIcon
                  sx={{
                    height: 30,
                    display: "flex",
                    justifyContent: "center",
                    mt: 1,
                  }}
                >
                  {index % 2 === 0 ? <FavoriteIcon /> : <AccountBoxIcon />}
                </ListItemIcon>
                {myItem.children}
              </MainNavLink>
            ))}
          {loggedIn &&
            loggedIn.isBusiness &&
            bizLinks.map((myItem, index) => (
              <MainNavLink to={myItem.to} key={"linksnav3" + index}>
                <ListItemIcon
                  sx={{
                    height: 30,
                    display: "flex",
                    justifyContent: "center",
                    mt: 1,
                  }}
                >
                  {index % 2 === 0 ? <AddPhotoAlternateIcon /> : <StyleIcon />}
                </ListItemIcon>
                {myItem.children}
              </MainNavLink>
            ))}
        </List>
      </BottomNavigation>
    </Box>
  );
};

export default Footer;
