import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const src = `/products/${product.id}`;

  return (
    <Card key={product.id}>
      <MoreInfo as={Link} to={src}>
        <Image src={product.images[0].image_url} alt="Product" />
        <h2>{product.title}</h2>
        <p>{product.sub_title}</p>
        <p>${product.price / 100.0}</p>
      </MoreInfo>
    </Card>
  );
};

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Card = styled.div`
  height: auto;
  width: 30vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  border: 1px solid transparent;

  &:hover {
    box-shadow: 0px 0px 15px 0px #848484;
  }
`;
const MoreInfo = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ProductCard;
