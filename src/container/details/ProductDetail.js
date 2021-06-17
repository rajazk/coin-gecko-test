import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "../../components/product/product.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    margin: '50px 100px',
  },
}));

function ProductDetail() {
  const classes = useStyles();
  const params = useParams();
  const { id } = params;
  const [detail, setDetail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((response) => {
        setDetail(response.data);
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
    <Paper className={classes.root} >
      <div className="product-detail">
        <div>
          Name : <span>{detail?.name}</span>{" "}
        </div>
        <div>
          Symbol : <span>{detail?.symbol}</span>{" "}
        </div>
        <div>
          Hashing Algorithm : <span>{detail?.hashing_algorithm}</span>{" "}
        </div>
        <div>
          Description :
          <span dangerouslySetInnerHTML={{ __html: detail?.description?.en }} />
          {/* <span> {detail?.description?.en}</span> */}
        </div>
        <div>
          Market cap in Euro :{" "}
          <span>{detail?.market_data?.market_cap?.eur}</span>{" "}
        </div>
        <div>
          Genesis Date : <span>{detail?.genesis_date}</span>{" "}
        </div>
      </div>
      <div className="product-detail-image">
        <img
          src={detail?.image ? detail?.image?.large : detail?.image?.small}
          alt="image-detail"
        />
      </div>
    </Paper>
  );
}

export default ProductDetail;
