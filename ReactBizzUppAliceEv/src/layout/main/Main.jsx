import { node } from "prop-types";
import { Container } from "@mui/material";

const Main = ({ children }) => {
  return <Container>{children}</Container>;
};

Main.propTypes = {
  children: node.isRequired,
};

export default Main;
