import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import { CartContext } from "../providers/cart/cart.provider";

import CartItem from "./CartItem";

// Custom Styles
const useStyles = makeStyles((theme) => ({
  root: {
    width: "800px",
    boxShadow: "0px 0px 0px",
    overflow: "auto",
    margin: "0 auto",
    height: "400px",
  },
  table: {
    minwidth: "700px",
  },
}));

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
