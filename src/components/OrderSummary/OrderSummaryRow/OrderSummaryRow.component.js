import React from "react";
import { Grid, Typography } from "@material-ui/core";

const OrderSummaryContent = ({ title, price }) => {
  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <Typography
          variant={title === "GRAND TOTAL" ? "h6" : "subtitle1"}
          component="h6"
          gutterBottom
        >
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant={title === "GRAND TOTAL" ? "h6" : "subtitle1"}
          component="h6"
          gutterBottom
        >
          {price}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OrderSummaryContent;
