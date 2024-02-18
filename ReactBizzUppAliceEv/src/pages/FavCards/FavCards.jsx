import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import CardComponent from "../../components/CardComponent";
import LoginContext from "../../store/loginContext";
import { toast } from "react-toastify";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ROUTES from "../../routes/ROUTES";

const FavCards = () => {
  const [cardData, setCardData] = useState([]);

  const { id } = useParams();
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .get("/cards")
        .then(({ data }) => {
          const likedCards = data.filter((card) =>
            card.likes.includes(login._id)
          );
          setCardData(likedCards);
        })
        .catch((err) => {});
    } catch (err) {}
  }, [login._id]);

  const handleRemoveLike = async (id) => {
    try {
      let { data } = await axios.patch("/cards/" + id, { removeLike: true });
      setCardData((prevCardData) =>
        prevCardData.filter((card) => card._id !== id)
      );
      toast.success("Removed like from card", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (err) {}
  };

  const handlePhoneCall = (_id) => {
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

  const handleMoveCard = (_id) => {
    navigate(`${ROUTES.READ}/${_id}`);
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
      <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
        FAVORIVE CARDS
      </Typography>
      <Grid container spacing={2} marginBottom={"3vw"}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={"cards" + index}>
            <CardComponent
              id={card._id}
              title={card.title}
              subtitle={card.subtitle}
              image={card.image.url}
              phone={card.phone}
              address={card.address}
              cardNumber={card.bizNumber}
              liked={true}
              onCall={handlePhoneCall}
              onLike={handleRemoveLike}
              onMove={handleMoveCard}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FavCards;
