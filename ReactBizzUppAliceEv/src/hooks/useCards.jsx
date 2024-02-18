import { useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import LoginContext from "../store/loginContext";
import normalizeHome from "../pages/HomePage/normalizeHome";
import useQueryParams from "../hooks/useQueryParams";
import { toast } from "react-toastify";

const useCards = () => {
  const [dataFromServer, setDataFromServer] = useState([]);
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);
  const [visibleItem, setVisibleItem] = useState(4);
  const query = useQueryParams();

  const handleLoadMore = () => {
    setVisibleItem((prev) => prev + 4);
  };

  useEffect(() => {
    axios
      .get("/cards")
      .then(({ data }) => {
        console.log(normalizeHome(data));
        setDataFromServer(normalizeHome(data));
      })
      .catch((err) => {});
  }, []);

  let dataFromServerFiltered = normalizeHome(
    dataFromServer,
    login ? login._id : undefined
  );

  const filteredCards = useMemo(() => {
    if (!dataFromServerFiltered.length) return [];
    const filter = query.filter ? query.filter : "";
    return dataFromServerFiltered.filter((item) =>
      item.title.startsWith(filter)
    );
  }, [query, dataFromServerFiltered]);

  const handleEditCard = (_id) => {
    navigate(`${ROUTES.EDITCARD}/${_id}`);
  };

  const handlePhoneCard = (_id) => {
    toast.success("Your Call Redirect Successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleLikeCard = async (id) => {
    try {
      let { data } = await axios.patch("/cards/" + id);
      setDataFromServer((cDataFromServer) => {
        let cardIndex = cDataFromServer.findIndex((card) => card._id === id);
        if (cardIndex >= 0) {
          cDataFromServer[cardIndex] = data;
        }
        return [...cDataFromServer];
      });
    } catch (err) {}
  };

  const handleDeleteCard = async (id) => {
    if (dataFromServer.user_id !== login._id) {
      toast.error("You Dont Have Permission To Delete", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const userConfirmed = window.confirm(
      "Are You Shure You Want To Delete This Card?"
    );

    if (userConfirmed) {
      try {
        let { data } = await axios.delete("/cards/" + id);
        setDataFromServer((cDataFromServer) =>
          cDataFromServer.filter((card) => card._id !== id)
        );
        toast.success("Your Card Deleted Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } catch (err) {
        toast.error("You cant Delete", {
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
    } else {
    }
  };

  const handleMoveCard = (_id) => {
    navigate(`${ROUTES.READ}/${_id}`);
  };

  return {
    handleDeleteCard,
    handleEditCard,
    handlePhoneCard,
    handleLikeCard,
    handleMoveCard,
    dataFromServerFiltered,
    visibleItem,
    handleLoadMore,
    filteredCards,
  };
};
export default useCards;
