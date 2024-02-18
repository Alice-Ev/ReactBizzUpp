import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

const HaveAccount = () => {
  return (
    <Box>
      <Grid container justifyContent="center">
        <Grid item>
          <Link to={ROUTES.LOGIN}>{"Already have an account? Sign in"}</Link>
        </Grid>
      </Grid>
    </Box>
  );
};
export default HaveAccount;
