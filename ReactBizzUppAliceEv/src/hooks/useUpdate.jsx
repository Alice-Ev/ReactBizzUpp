import { useState } from "react";
import axios from "axios";
import { normalizeUpdatedData } from "../pages/Sandbox/normalizeUpdatedData";
import ROUTES from "../routes/ROUTES";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import LoginContext from "../store/loginContext";
import { normalizeEditFrom } from "../pages/EditProfile/normalizeEditFrom";

const UseUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputsValue, setInputsValue] = useState({
    first: "",
    middle: "",
    last: "",
    email: "",
    password: "",
    phone: "",
    url: "",
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

  const { login } = useContext(LoginContext);

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

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let request = normalizeUpdatedData(inputsValue);
      await axios.put("/users/" + id, request);
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
      navigate(ROUTES.SANDBOX);
    } catch (err) {}
  };

  return {
    inputsValue,
    errors,
    handleInputsChange,
    handleInputsChangeCheck,
    handleSubmit,
  };
};

export default UseUpdate;
