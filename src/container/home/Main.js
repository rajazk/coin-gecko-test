import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/product/ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import "../../components/product//product.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

function Main() {
  const classes = useStyles();
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: { vs_currency: "eur" },
      })
      .then((response) => {
        setCoins(response.data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={classes.root}>
      {coins.length > 0
        ? coins
            .slice(0, 10)
            .map((coin, index) => <ProductCard coin={coin} key={index} />)
        : "Coins not Found"}
    </div>
  );
}

export default Main;
