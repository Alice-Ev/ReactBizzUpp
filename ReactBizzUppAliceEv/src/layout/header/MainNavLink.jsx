import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { node } from "prop-types";

const MainNavLink = ({ to, children }) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Typography
          color={isActive ? "text.headerActive" : "text.headerColor"}
          sx={{ p: 1.5, textAlign: "center" }}
          variant="subtitle1"
        >
          {children}
        </Typography>
      )}
    </NavLink>
  );
};

MainNavLink.propTypes = {
  children: node.isRequired,
  to: node.isRequired,
};

export default MainNavLink;
