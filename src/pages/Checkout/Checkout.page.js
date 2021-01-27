import React from "react";
import { Typography } from "@material-ui/core";
import { CheckoutForm } from "../../components";
import useStyles from "./Checkout.styles";

const Checkout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
