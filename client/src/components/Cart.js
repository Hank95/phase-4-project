import styled from "styled-components";
import LineItemCard from "./LineItemCard";

const Cart = ({
  shoppingCart,
  products,
  updateLineItemQuantity,
  removeFromCart,
}) => {
  if (shoppingCart.length === 0) {
    return <EmptyCart>Shopping Cart is empty!</EmptyCart>;
  }
  let totals = shoppingCart.map(
    (item) => (item.quantity * item.product.price) / 100
  );
  const reducer = (accumulator, curr) => accumulator + curr;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const subTotal = totals.reduce(reducer);
  const tax = parseFloat((subTotal * 0.05).toFixed(2));
  const finalTotal = subTotal + tax;
  const handleClick = () => {
    alert("Thank you for your order!");
  };

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
      <Summary>
        <Table>
          <thead>
            <TableHeader>
              <th colspan="2">Order Summery</th>
            </TableHeader>
            <Break />
          </thead>
          <tbody>
            <tr>
              <Key>Sub Total:</Key>
              <Value>${numberWithCommas(subTotal)}</Value>
            </tr>
            <tr>
              <Key>Shipping</Key>
              <Value>-</Value>
            </tr>
            <tr>
              <Key>Tax</Key>
              <Value>${tax}</Value>
            </tr>
            <Divider />
            <tr>
              <Key>Total:</Key>
              <Value>${numberWithCommas(finalTotal)}</Value>
            </tr>
          </tbody>
        </Table>
        <Button onClick={handleClick}>CHECKOUT</Button>
      </Summary>
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

const Summary = styled.div`
  background-color: rgb(245, 245, 245);
  margin: 30px;
`;
const Table = styled.table`
  width: 100%;
  padding: 16px;
`;

const TableHeader = styled.tr`
  border: 15px transparent transparent;
`;

const Key = styled.td`
  margin-left: 5px;
`;
const Value = styled.td`
  text-align: right;
`;
const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;
const Break = styled.hr`
  border: none;
  border-bottom: 1px solid transparent;
  margin: 12px 0;
`;
const Button = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  background-color: rgba(0, 57, 7, 0.5);
  a {
    color: inherit;
    text-decoration: none;
  }
`;
export default Cart;
