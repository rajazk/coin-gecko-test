import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import "./product.css";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 345,
    margin: "20px",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  media: {
    height: 240,
  },
});

export default function ProductCard({ coin }) {
  const classes = useStyles();
  const history = useHistory();

  function handleDetail(id) {
    history.push(`/details/${id}`);
  }

  return (
    <Card className={classes.root} key={coin.id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={coin.image}
          title="Contemplative Reptile"
        />
        <CardContent className="product-card">
          <Typography gutterBottom variant="h5" component="h2">
            {coin.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Symbol : {coin.symbol}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Current Price : {coin.current_price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            High 24 hour Price : {coin.high_24h}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Low 24 hour Price : {coin.low_24h}
          </Typography>
          <CardActions className="product-card-btn">
            <Button
              size="small"
              color="primary"
              variant="outlined"
              onClick={() => handleDetail(coin.id)}
            >
              View Details
            </Button>
          </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
