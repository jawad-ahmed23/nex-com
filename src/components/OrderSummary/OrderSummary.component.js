import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Paper, Button } from "@material-ui/core";
import useStyles from "./OrderSummary.styles";
import OrderSummaryRow from "./OrderSummaryRow/OrderSummaryRow.component";
import { CartContext } from "../../providers/cart/cart.provider";

const OrderSummary = () => {
  const { getTotalCartPrice } = useContext(CartContext);
  // eslint-disable-next-line
  const [discount, setDiscount] = useState(0);
  // eslint-disable-next-line
  const [tax, setTax] = useState(0);
  const classes = useStyles();

  const grandTotal = getTotalCartPrice - discount + tax;

  return (
    <Paper className={classes.root}>
      {/* Order Summary Table */}
      <OrderSummaryRow title="SUBTOTAL" price={`Rs.${getTotalCartPrice}`} />
      <OrderSummaryRow title="DISCOUNT" price={`Rs. ${discount}`} />
      <OrderSummaryRow title="Tax" price={`Rs. ${tax}`} />
      <hr />
      <OrderSummaryRow title="GRAND TOTAL" price={`Rs. ${grandTotal}`} />
      {/*  */}

      <Link className={classes.checkoutBtn} to="/checkout">
        <Button variant="contained" color="primary">
          Proceed to Checkout
        </Button>
      </Link>
    </Paper>
  );
};

export default OrderSummary;
