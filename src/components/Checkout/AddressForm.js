import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function AddressForm({ shippingDetails, setShippingDetails }) {
  const {
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zip,
    country,
    saveAddress,
  } = shippingDetails;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              value={firstName}
              onChange={handleInput}
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              value={lastName}
              onChange={handleInput}
              fullWidth
              autoComplete="family-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              value={address1}
              onChange={handleInput}
              fullWidth
              autoComplete="shipping address-line1"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              value={address2}
              onChange={handleInput}
              fullWidth
              autoComplete="shipping address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              value={city}
              onChange={handleInput}
              fullWidth
              autoComplete="shipping address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="State/Province/Region"
              value={state}
              onChange={handleInput}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              value={zip}
              onChange={handleInput}
              fullWidth
              autoComplete="shipping postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              value={country}
              onChange={handleInput}
              fullWidth
              autoComplete="shipping country"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  name="saveAddress"
                  value={saveAddress}
                  onChange={(e) =>
                    handleInput({
                      target: { name: e.target.name, value: e.target.checked },
                    })
                  }
                />
              }
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
}
