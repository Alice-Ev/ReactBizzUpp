import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import * as React from "react";
import AdminPanel from "./AdminPanel";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { toast } from "react-toastify";

const SandBox = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/users")
      .then(({ data }) => {
        console.log("Userssss", data);
        setDataFromServer(data);
      })
      .catch((err) => {});
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("users/" + id);
      const updatedUsers = dataFromServer.filter((user) => user._id !== id);
      setDataFromServer(updatedUsers);

      toast("User Deleted successfully 👌", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {}
  };

  const handleEditUser = (id) => {
    navigate(`${ROUTES.UPDATE}/${id}`);
  };

  return dataFromServer.map((user) => (
    <Box key={user._id}>
      <AdminPanel
        id={user._id}
        image={user.image.url}
        admin={user.isAdmin}
        biz={user.isBusiness}
        first={user.name.first}
        last={user.name.last}
        country={user.address.country}
        city={user.address.city}
        onDelete={handleDelete}
        onEdit={handleEditUser}
      />
    </Box>
  ));
};
export default SandBox;
