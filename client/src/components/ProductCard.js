import React from "react";
import styled from "styled-components";

const ProductCard = ({ product }) => {
  console.log(product.images[0]);
  return (
    <Card>
      <img src={product.images[0].image_url} alt="Product" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
    </Card>
  );
};

const Card = styled.div`
  height: 300px;
  width: 300px;
  border: 1px solid black;
  border-radius: 6px;
  overflow: hidden;
`;

export default ProductCard;
