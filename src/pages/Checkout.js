import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "../components/Checkout/AddressForm";
import PaymentForm from "../components/Checkout/PaymentForm";
import Review from "../components/Checkout/Review";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Shipping address", "Payment details", "Review your order"];

const userShippingFields = {
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  saveAddress: true,
};

const paymentFields = {
  cardName: "",
  cardNumber: "",
  expDate: "",
  cvv: "",
  saveCard: false,
};

export default function Checkout() {
  const [shippingDetails, setShippingDetails] = useState(userShippingFields);
  const [paymentDetails, setPaymentDetails] = useState(paymentFields);

  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressForm
            shippingDetails={shippingDetails}
            setShippingDetails={setShippingDetails}
            steps={steps}
            activeStep={activeStep}
            handleNext={handleNext}
          />
        );
      case 1:
        return (
          <PaymentForm
            paymentDetails={paymentDetails}
            setPaymentDetails={setPaymentDetails}
          />
        );
      case 2:
        return (
          <Review
            shippingDetails={shippingDetails}
            paymentDetails={paymentDetails}
          />
        );
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <>
      <CssBaseline />

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>

          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div>
              </>
            )}
          </>
        </Paper>
      </main>
    </>
  );
}
