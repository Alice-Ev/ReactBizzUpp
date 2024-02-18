import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import LoginContext from "../store/loginContext";
import { useContext } from "react";

const CardComponent = ({
  title,
  subtitle,
  image,
  phone,
  address,
  cardNumber,
  id,
  liked,
  onDelete,
  onEdit,
  onCall,
  onLike,
  onMove,
}) => {
  const { login } = useContext(LoginContext);
  const loggedIn = login;

  const handleDeleteClick = () => {
    onDelete(id);
  };
  const handleEditClick = () => {
    onEdit(id);
  };
  const handlePhoneClick = () => {
    onCall(id);
  };
  const handleLikeClick = () => {
    onLike(id);
  };
  const handleMoveClick = () => {
    onMove(id);
  };

  return (
    <Card square raised>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt="american massle car"
          height={200}
          onClick={handleMoveClick}
        />
      </CardActionArea>
      <CardHeader title={title} subheader={subtitle}></CardHeader>
      <Divider></Divider>
      <CardContent>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Phone:
          </Typography>
          {phone}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Address:
          </Typography>
          {address.city}
        </Typography>
        <Typography>
          <Typography component="span" fontWeight={700}>
            Card number:
          </Typography>
          {cardNumber}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            {loggedIn && loggedIn.isAdmin && (
              <IconButton onClick={handleDeleteClick}>
                <DeleteIcon />
              </IconButton>
            )}
            {loggedIn && loggedIn.isAdmin && (
              <IconButton onClick={handleEditClick}>
                <ModeIcon />
              </IconButton>
            )}
          </Box>
          <Box>
            <IconButton onClick={handlePhoneClick}>
              <LocalPhoneIcon />
            </IconButton>
            {loggedIn && (
              <IconButton onClick={handleLikeClick}>
                <FavoriteIcon color={liked ? "error" : "inherit"} />
              </IconButton>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    houseNumber: PropTypes.number.isRequired,
  }).isRequired,
  like: PropTypes.bool,
  cardNumber: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

CardComponent.defaultProps = {
  image: "/assets/imgs/default.jpg",
  alt: "Business Card Image",
};

export default CardComponent;
