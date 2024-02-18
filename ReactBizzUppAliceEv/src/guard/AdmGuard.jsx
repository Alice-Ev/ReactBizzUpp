import { useContext } from "react";
import LoginContext from "../store/loginContext";
import { Navigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

const AdmGuard = ({ children }) => {
  const { login } = useContext(LoginContext);
  if (login && login.isAdmin) {
    return children;
  } else {
    return <Navigate to={ROUTES.HOME} />;
  }
};

export default AdmGuard;
