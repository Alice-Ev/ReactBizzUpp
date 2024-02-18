import { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Grid, Button } from "@mui/material";
import axios from "axios";
import TextInputComponent from "../../components/TextInputComponent";
import validateSchema from "../../validation/cardValidation";
import LoginContext from "../../store/loginContext";
import ROUTES from "../../routes/ROUTES";
import PageHeader from "../../components/PageHeader";
import { useNavigate } from "react-router-dom";
import { fromServer } from "./normalizeEdit";
import { toServer } from "./normalizeTo";
import { toast } from "react-toastify";

const EditCardPage = () => {
  const [inputsValue, setInputsValue] = useState({
    title: "",
    subtitle: "",
    description: "",
    phone: "",
    email: "",
    web: "",
    image: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
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

  const navigate = useNavigate();
  let { id: _id } = useParams();
  let keysArray = Object.keys(inputsValue);
  const { login } = useContext(LoginContext);

  useEffect(() => {
    if (!_id || !login) {
      return;
    }
    axios
      .get("/cards/" + _id)
      .then(({ data }) => {
        if (data.user_id === login._id || login.isAdmin) {
          setInputsValue(fromServer(data));
          setErrors({});
        } else {
          navigate(ROUTES.HOME);
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
      .catch((err) => {});
  }, [_id, login]);

  const handleInputsChange = (e) => {
    setInputsValue((cInputsValue) => ({
      ...cInputsValue,
      [e.target.id]: e.target.value,
    }));
  };

  const handleInputsBlur = (e) => {
    const { error } = validateSchema[e.target.id]({
      [e.target.id]: inputsValue[e.target.id],
    });
    if (error) {
      setErrors((cErrors) => ({
        ...cErrors,
        [e.target.id]: error.details[0].message,
      }));
    } else {
      setErrors((cErrors) => {
        delete cErrors[e.target.id];
        return { ...cErrors };
      });
    }
  };

  const handleUpdateChanges = async () => {
    try {
      await axios.put("/cards/" + _id, toServer(inputsValue));
      navigate(ROUTES.HOME);
    } catch (error) {}
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
      <PageHeader
        title="Edit Your Card"
        subtitle="On this page you can edit all yours cards"
      />
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {keysArray.map((keyName) => (
            <TextInputComponent
              key={"inputs" + keyName}
              id={keyName}
              label={keyName}
              value={inputsValue[keyName]}
              onChange={handleInputsChange}
              onBlur={handleInputsBlur}
              errors={errors[keyName]}
            />
          ))}
        </Grid>
      </Box>
      <Grid container spacing={2}>
        <Grid item lg={8} md={8} sm={8} xs>
          <Button
            variant="outlined"
            sx={{ mt: 2, width: "100%", ml: "0%", bgcolor: "lightskyblue" }}
            disabled={Object.keys(errors).length > 0}
            onClick={handleUpdateChanges}
          >
            Update Changes
          </Button>
        </Grid>
        <Grid item xs>
          <Link to={ROUTES.HOME}>
            <Button
              variant="outlined"
              sx={{
                mt: 2,
                width: "100%",
                ml: "0%",
                bgcolor: "navy",
                color: "gray",
              }}
            >
              Back Home
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
export default EditCardPage;
