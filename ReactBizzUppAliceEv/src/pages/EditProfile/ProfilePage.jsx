import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { normalizeUpdatedData } from "../Sandbox/normalizeUpdatedData";
import ROUTES from "../../routes/ROUTES";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import TextInputComponent from "../../components/TextInputComponent";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import LoginContext from "../../store/loginContext";
import { useContext } from "react";
import { normalizeEditFrom } from "./normalizeEditFrom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputsValue, setInputsValue] = useState({
    first: "",
    middle: "",
    last: "",
    phone: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
    isBusiness: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    subtitle: "",
    description: "",
    phone: "",
    email: "",
    image: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
  });

  const { login } = useContext(LoginContext);
  let keysArray = Object.keys(inputsValue);

  useEffect(() => {
    axios
      .get("/users/" + login._id)
      .then(({ data }) => {
        if (data && typeof data === "object") {
          setInputsValue(normalizeEditFrom(data));
          setErrors({});
        } else {
          setErrors({ server: "Try again Later" });
          toast.error("You Dont Have a Permission", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => {
        navigate(ROUTES.HOME);
      });
  }, [id, login._id]);

  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleInputsChangeCheck = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.checked,
    }));
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let request = normalizeUpdatedData(inputsValue);
      await axios.put("/users/" + login._id, request);
      toast("User Updated successfully 👌", {
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
    } catch (err) {}
  };

  return (
    <Box
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        PROFILE
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {keysArray.map((keyName) => (
            <TextInputComponent
              key={"inputs" + keyName}
              id={keyName}
              label={keyName}
              value={inputsValue[keyName]}
              onChange={handleInputsChange}
              errors={errors[keyName]}
              required={errors[keyName] === "" ? true : false}
            />
          ))}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                onChange={handleInputsChangeCheck}
                id="isBusiness"
              />
            }
            label="Business Account"
          />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default ProfilePage;
