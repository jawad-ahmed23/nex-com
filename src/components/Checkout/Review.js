import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import OrderSummary from "./OrderSummary";

// const addresses = [
//   "1 Material-UI Drive",
//   "Reactville",
//   "Anytown",
//   "99999",
//   "USA",
// ];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

// function Payments({ payment }) {
//   console.log(payment);
//   return (
//     <React.Fragment key={payment.name}>
//       <Grid item xs={6}>
//         <Typography gutterBottom>{payment.name}</Typography>
//       </Grid>
//       <Grid item xs={6}>
//         <Typography gutterBottom>{payment.detail}</Typography>
//       </Grid>
//     </React.Fragment>
//   );
// }

export default function Review({ shippingDetails, paymentDetails }) {
  const classes = useStyles();

  const { firstName, lastName, address1, address2 } = shippingDetails;

  const { cardNumber, expDate } = paymentDetails;

  // const payments = [
  //   { name: "Card type", detail: "Visa" },
  //   { name: "Card holder", detail: `${firstName} ${lastName}` },
  //   { name: "Card number", detail: { cardNumber } },
  //   { name: "Expiry date", detail: { expDate } },
  // ];

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>

      <OrderSummary />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{firstName + " " + lastName}</Typography>
          <Typography gutterBottom>{address1 + " " + address2}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <Typography gutterBottom>Card type:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>Visa</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography gutterBottom>Card holder:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{`${firstName} ${lastName}`}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography gutterBottom>Card number:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{cardNumber}</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography gutterBottom>Expiry date:</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography gutterBottom>{expDate}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
