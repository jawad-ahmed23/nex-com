import React, { useContext } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import { CartContext } from "../../providers/cart/cart.provider";

import CartItem from "./CartItem/CartItem.component";

import useStyles from "./CartItems.styles";

const tableHeadings = [
  "IMAGE",
  "PRODUCT NAME",
  "PRICE",
  "QUANTITY",
  "ACTION",
  "TOTAL",
];

function CartItems(props) {
  const { cartItems } = useContext(CartContext);

  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {tableHeadings.map((heading, idx) => (
              <TableCell key={idx} align="center">
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartItems;
