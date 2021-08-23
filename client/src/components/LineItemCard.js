import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LineItemCard = ({
  lineItem,
  products,
  updateLineItemQuantity,
  removeFromCart,
}) => {
  const [quantity, setQuantity] = useState(lineItem.quantity);
  //   const [price, setPrice] = useState(
  //     (lineItem.product.price * lineItem.quantity) / 100.0
  //   );
  const product = products.find(
    (product) => lineItem.product.id === product.id
  );
  const src = `/products/${product.id}`;

  let price = (lineItem.product.price * lineItem.quantity) / 100.0;

  const handleQantChange = (e) => {
    setQuantity(e.target.value);
    updateLineItemQuantity(lineItem.id, e.target.value);
  };

  return (
    <div>
      <ItemCard>
        <ImageContainer as={Link} to={src}>
          <Image src={product.images[0].image_url} alt="product" />
        </ImageContainer>
        <ContentContainer>
          <h3>{lineItem.product.title}</h3>
          <p>{lineItem.product.sub_title}</p>
        </ContentContainer>
        <PAndQ>
          <label for="quant">Quantity</label>
          <select name="quant" value={quantity} onChange={handleQantChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <h4>${price}</h4>

          <Button onClick={() => removeFromCart(lineItem.id)}>Remove X</Button>
        </PAndQ>
      </ItemCard>
      <Divider />
    </div>
  );
};

const ItemCard = styled.div`
  display: flex;
  position: relative;
  margin: 12px;
  padding: 12px;
  border-radius: 6px;
  &:hover {
    box-shadow: 0px 0px 15px 0px #848484;
  }
`;
const ImageContainer = styled.div`
  cursor: pointer;
  height: 100px;
  width: 150px;
  margin-right: 12px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;
const PAndQ = styled.div`
  position: absolute;
  right: 0;
`;
const ContentContainer = styled.div`
  width: 65%;
`;

const Button = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  &:hover {
    color: red;
  }
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default LineItemCard;
