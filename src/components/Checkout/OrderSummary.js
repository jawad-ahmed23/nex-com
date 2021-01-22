import React, { useContext } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

import { CartContext } from "../../providers/cart/cart.provider";

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

export default function OrderSummary() {
  const { cartItems, getTotalCartPrice } = useContext(CartContext);
  const classes = useStyles();

  return (
    <List disablePadding>
      {cartItems.map((item) => (
        <ListItem className={classes.listItem} key={item.id}>
          <ListItemText primary={item.name} secondary={item.description} />
          <Typography variant="body2">
            $ {item.price * item.quantity}
          </Typography>
        </ListItem>
      ))}
      <ListItem className={classes.listItem}>
        <ListItemText primary="Total" />
        <Typography variant="subtitle1" className={classes.total}>
          Rs. {getTotalCartPrice}
        </Typography>
      </ListItem>
    </List>
  );
}
