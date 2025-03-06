import React from "react";
import { ContainerProductCard } from "./style";

const ProductCardComponent = ({ product }) => {
  return <ContainerProductCard>{product.name}</ContainerProductCard>;
};

export default ProductCardComponent;
