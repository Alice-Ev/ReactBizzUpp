import { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import CardComponent from "../../components/CardComponent";
import useCards from "../../hooks/useCards";
import PageHeader from "../../components/PageHeader";

const Read = () => {
  const [card, setCard] = useState(null);
  const {
    handleDeleteCard,
    handleEditCard,
    handlePhoneCard,
    handleLikeCard,
    handleMoveCard,
  } = useCards();

  let { id } = useParams();

  useEffect(() => {
    axios
      .get("/cards/" + id)
      .then(({ data }) => {
        console.log(data);
        setCard(data);
      })
      .catch((err) => {});
  }, [id]);

  if (card === null) {
    return <></>;
  }

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
        title="Business Information"
        subtitle="On this page you can fint information about this business card"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3} key={"carsCard"}>
          <CardComponent
            id={card._id}
            title={card.title}
            subtitle={card.subtitle}
            image={card.image.url}
            phone={card.phone}
            address={card.address}
            cardNumber={card.bizNumber}
            liked={card.liked}
            onDelete={handleDeleteCard}
            onEdit={handleEditCard}
            onCall={handlePhoneCard}
            onLike={handleLikeCard}
            onMove={handleMoveCard}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Read;
