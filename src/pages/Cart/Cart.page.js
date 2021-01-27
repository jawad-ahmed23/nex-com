import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Grid } from "@material-ui/core";
import { CartContext } from "../../providers/cart/cart.provider";
import { CartItems, OrderSummary } from "../../components";
import useStyles from "./Cart.styles";

export default function Cart() {
  const { cartItems, clearItems } = useContext(CartContext);
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      {cartItems.length ? (
        <>
          <Button
            className={classes.clearBtn}
            color="primary"
            onClick={clearItems}
          >
            Clear All Items
          </Button>

          <Grid container justify="space-between">
            <Grid item xs={12} sm={8}>
              <CartItems />
            </Grid>
            <Grid item xs={12} sm={4}>
              <OrderSummary />
            </Grid>
          </Grid>

          <Link className={classes.btn} to="/">
            <Button
              classes={{ root: classes.btn }}
              variant="contained"
              color="primary"
            >
              Continue Shopping
            </Button>
          </Link>
        </>
      ) : (
        <>
          <h1 className={classes.emtyText}>Cart is empty</h1>
          <Link className={classes.btn} to="/">
            <Button
              classes={{ root: classes.btn }}
              variant="contained"
              color="primary"
            >
              Continue Shopping
            </Button>
          </Link>
        </>
      )}
    </Container>
  );
}
