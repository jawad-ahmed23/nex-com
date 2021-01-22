import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

// Context
import { CartContext } from "../providers/cart/cart.provider";

// CartProduct Component
import { CartItems } from "../components";

import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "100px",
  },

  totalPriceText: {
    textAlign: "right",
    margin: theme.spacing(5),
    marginRight: 0,
    fontWeight: "400",
  },
  btnGroup: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& button": {
      borderRadius: 0,
    },
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    textDecoration: "none",
    color: "#fff",
    padding: "10px 20px",
  },
}));

export default function Cart() {
  const { cartItems, getTotalCartPrice, clearItems } = useContext(CartContext);
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      {cartItems.length ? (
        <>
          <CartItems />
          <Button
            className={classes.btn}
            variant="contained"
            color="secondary"
            onClick={clearItems}
          >
            Clear All Items
          </Button>
          <h3 className={classes.totalPriceText}>
            <span
              style={{ color: "#333", fontWeight: "400", marginRight: "20px" }}
            >
              Total Price:
            </span>
            Rs. {getTotalCartPrice}
          </h3>

          <div className={classes.btnGroup}>
            <Link
              className={classes.btn}
              to="/"
              variant="contained"
              color="primary"
            >
              Continue Shopping
            </Link>
            <Link
              className={classes.btn}
              to="/checkout"
              variant="contained"
              color="primary"
            >
              Checkout
            </Link>
          </div>
        </>
      ) : (
        <>
          <h1>Cart is empty</h1>
          <Link
            className={classes.btn}
            to="/"
            variant="contained"
            color="primary"
          >
            Continue Shopping
          </Link>
        </>
      )}
    </Container>
  );
}
