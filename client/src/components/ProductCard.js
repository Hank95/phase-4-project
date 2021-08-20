import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductCard = ({ product, handleAddCart }) => {
  const [bought, setBought] = useState(false);

  const handleInfo = (id) => {
    console.log(id);
  };

  const src = `/products/${product.id}`;

  const handleClick = (id) => {
    console.log(id);
    if (!bought) {
      handleAddCart(id);
      setBought(true);
    } else {
      return;
    }
  };
  return (
    <Card key={product.id}>
      <MoreInfo as={Link} to={src} onClick={() => handleInfo(product.id)}>
        <Image src={product.images[0].image_url} alt="Product" />
        <h2>{product.title}</h2>
        <p>{product.sub_title}</p>
        <p>{product.price / 100.0}</p>
      </MoreInfo>
      <Button onClick={() => handleClick(product.id)}>
        {bought ? "Added!" : "Add to Cart"}
      </Button>
    </Card>
  );
};

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Card = styled.div`
  height: auto;
  width: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid black;
    border-radius: 6px;
  }
`;
const MoreInfo = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  width: 65%;
  display: flex;
  justify-content: center;
  align-self: center;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default ProductCard;
