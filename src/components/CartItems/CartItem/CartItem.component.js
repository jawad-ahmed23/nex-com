import React, { useContext } from "react";

// Context
import { CartContext } from "../../../providers/cart/cart.provider";

import {
  IconButton,
  TableCell,
  TableRow as MuiTableRow,
} from "@material-ui/core";

import {
  ArrowBackIos as ArrowBackIosIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  Delete as DeleteIcon,
} from "@material-ui/icons";

export default function CartItem({ item }) {
  const { increItemQty, decreaseQuantity, removeItem } = useContext(
    CartContext
  );
  return (
    // CartItem
    <MuiTableRow>
      <TableCell align="center" component="th" scope="row">
        <img src={item.imageUrl} alt="images" width="100px" />
      </TableCell>
      <TableCell align="center">{item.name}</TableCell>
      <TableCell align="center">
        <h3>Rs. {item.price}</h3>
      </TableCell>
      <TableCell align="center">
        <IconButton onClick={() => decreaseQuantity(item)}>
          <ArrowBackIosIcon />
        </IconButton>
        {item.quantity}
        <IconButton onClick={() => increItemQty(item)}>
          <ArrowForwardIosIcon />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton onClick={() => removeItem(item)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <h3 style={{ color: "red", fontWeight: "300" }}>
          Rs. {item.price * item.quantity}
        </h3>
      </TableCell>
    </MuiTableRow>
  );
}
