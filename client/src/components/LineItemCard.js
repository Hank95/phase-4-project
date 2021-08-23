const LineItemCard = ({ lineItem }) => {
  return (
    <div>
      <h3>{lineItem.product.title}</h3>
    </div>
  );
};

export default LineItemCard;
