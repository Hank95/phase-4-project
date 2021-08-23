import LineItemCard from "./LineItemCard";

const Cart = ({ shoppingCart }) => {
  return (
    <div>
      {shoppingCart.map((lineItem) => (
        <LineItemCard lineItem={lineItem} />
      ))}
    </div>
  );
};

export default Cart;
