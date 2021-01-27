import React, { useState } from "react";
import { Grid, Button } from "@material-ui/core";
import useStyles from "./CheckoutForm.styles";
import AddressForm from "../AddressForm/AddressForm.component";
import PaymentForm from "../PaymentForm/PaymentForm.component";

const CheckoutForm = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    isAddressBilling: false,
    cvc: "",
    cardName: "",
    cardNumber: "",
  });

  const {
    firstName,
    lastName,
    email,
    address,
    city,
    state,
    zipCode,
    isAddressBilling,
    cvc,
    cardName,
    cardNumber,
  } = userInfo;

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  console.log(userInfo);
  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container justify="space-around" alignItems="flex-start">
          <Grid item xs={12} sm={7}>
            <AddressForm
              firstName={firstName}
              lastName={lastName}
              email={email}
              address={address}
              city={city}
              state={state}
              zipCode={zipCode}
              isAddressBilling={isAddressBilling}
              onChange={handleInput}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PaymentForm
              cvc={cvc}
              cardName={cardName}
              cardNumber={cardNumber}
              onChange={handleInput}
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CheckoutForm;
