import React from "react";
import { Grid, Typography, Button, ButtonGroup } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating'
import useStyles from "./Product.styles";

const Product = () => {
  const classes = useStyles();
  return (
    <div className={classes.productRoot}>
      <Grid container>
        <Grid className={classes.productImg} item xs={12} sm={4}>
          <div>
            <img src="/images/products/1.png" alt="product-img" width="100%" />
          </div>
        </Grid>
        <Grid className={classes.productDetail} item xs={12} sm={4}>
          <Typography variant="h4" component="h4" gutterBottom>
            French Fries
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            French fies for family friends
          </Typography>

          <Typography variant="h5" color="primary" gutterBottom>
            Rs. 457
          </Typography>

          <div className={classes.productRating}>
            <Typography className={classes.ratingText} variant='subtitle2' >1 rating</Typography>
            <Rating
              
            />
          </div>
          
          <Button variant="contained" color="primary">
            Add To Cart
          </Button>
          <Button variant="contained" color="primary">
            Buy Now
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
      </Grid>
    </div>
  );
};

export default Product;
