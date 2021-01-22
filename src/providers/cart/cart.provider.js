import React, { createContext, useState, useEffect } from "react";
import { cartProducts } from "../../data/cartProducts";
import {
  increaseItemQty,
  decreaseQty,
  deleteItem,
  addItemToCart,
} from "./cart.utils";

export const CartContext = createContext({
  cartItems: cartProducts,
  increaseItemQty: () => {},
  addItemToCart: () => {},
  getTotalPrice: () => {},
  decreaseQty: () => {},
  deleteItem: () => {},
});

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(cartProducts);

  const increItemQty = (item) => setCartItems(increaseItemQty(cartItems, item));
  const decreaseQuantity = (item) => setCartItems(decreaseQty(cartItems, item));
  const removeItem = (item) => setCartItems(deleteItem(cartItems, item));
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));

  const TotalCartItems = cartItems.length;

  const getTotalCartPrice = cartItems.reduce((acc, { price, quantity }) => {
    return acc + price * quantity;
  }, 0);

  const values = {
    cartItems,
    increItemQty,
    decreaseQuantity,
    removeItem,
    getTotalCartPrice,
    addItem,
    TotalCartItems,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
}
