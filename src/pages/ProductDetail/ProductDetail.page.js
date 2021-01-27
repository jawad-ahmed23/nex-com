import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../providers/cart/cart.provider";
import ProductsContext from "../../contexts/products/products.context";
import { Product } from "../../components";

const ProductDetail = () => {
  const { id } = useParams();
  const products = useContext(ProductsContext);

  const findProduct = products.find((product) => Number(id) === product.id);

  return (
    <div>
      <Product />
    </div>
  );
};

export default ProductDetail;
