import Grid from "@mui/material/Grid";
import CardComponent from "../../components/CardComponent";
import PageHeader from "../../components/PageHeader";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useCards from "../../hooks/useCards";

const HomePage = () => {
  const {
    handleDeleteCard,
    handleEditCard,
    handlePhoneCard,
    handleLikeCard,
    handleMoveCard,
    dataFromServerFiltered,
    visibleItem,
    handleLoadMore,
    filteredCards,
  } = useCards();

  if (!dataFromServerFiltered || !dataFromServerFiltered.length) {
    return <Typography>Could not find any items</Typography>;
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
        title="Cards"
        subtitle="On this page you can find all business cards from all categories"
      />
      <Grid container spacing={2}>
        {filteredCards.slice(0, visibleItem).map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={"carsCard" + index}>
            <CardComponent
              id={item._id}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image.url}
              phone={item.phone}
              address={item.address}
              cardNumber={item.bizNumber}
              liked={item.liked}
              onDelete={handleDeleteCard}
              onEdit={handleEditCard}
              onCall={handlePhoneCard}
              onLike={handleLikeCard}
              onMove={handleMoveCard}
              //   user_Id={user.user_Id}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "4%",
          marginBottom: "2%",
        }}
      >
        <Button
          variant="contained"
          sx={{ backgroundColor: "#d5d7fe", color: "black" }}
          onClick={handleLoadMore}
        >
          Load More
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
