import { Box, Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import PageHeader from "../components/PageHeader";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        textAlign: "center",
        marginTop: "3vh",
        marginBottom: "7vh",
      }}
    >
      <Container maxWidth="md">
        <PageHeader title="Eror 404" subtitle="Page not found" />
        <Grid container spacing={2}>
          <Grid xs={12}>
            <img
              src="..//assets/imgs/404.jpg"
              alt="broken robot"
              width="50%"
              height="100%"
              justifyContent="center"
              alignItem="center"
            />
          </Grid>
          <Grid xs={12}>
            <Button variant="contained">Back Home</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default ErrorPage;
