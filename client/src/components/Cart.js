import styled from "styled-components";
import LineItemCard from "./LineItemCard";

const Cart = ({
  shoppingCart,
  products,
  updateLineItemQuantity,
  removeFromCart,
}) => {
  console.log(shoppingCart);
  if (shoppingCart.length === 0) {
    return <EmptyCart>Shopping Cart is empty!</EmptyCart>;
  }
  return (
    <Container>
      <CartContainer>
        {shoppingCart.map((lineItem) => (
          <LineItemCard
            key={lineItem.id}
            lineItem={lineItem}
            products={products}
            updateLineItemQuantity={updateLineItemQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </CartContainer>
      <div>summary</div>
    </Container>
  );
};

const EmptyCart = styled.h2`
  display: flex;
  margin-top: 20vh;
  margin-left: 43%;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  width: 100%;
  height: auto;
`;

const CartContainer = styled.div`
  padding: 10px;
  margin: 10px;
`;
export default Cart;
