import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function PaymentForm({ paymentDetails, setPaymentDetails }) {
  const { cardName, cardNumber, expDate, cvv, saveCard } = paymentDetails;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            name="cardName"
            onChange={handleInput}
            value={cardName}
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            name="cardNumber"
            onChange={handleInput}
            value={cardNumber}
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            name="expDate"
            onChange={handleInput}
            value={expDate}
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            name="cvv"
            onChange={handleInput}
            value={cvv}
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="saveCard"
                value={saveCard}
                onChange={(e) =>
                  handleInput({
                    target: { name: e.target.name, value: e.target.checked },
                  })
                }
              />
            }
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </>
  );
}
