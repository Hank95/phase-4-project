import styled from "styled-components";
import { Link } from "react-router-dom";

const AddedToCartModal = ({ product, toggleModal }) => {
  console.log(product);
  return (
    <Card>
      <ContentContainer>
        <h2>Added to Cart!</h2>
      </ContentContainer>
      <CloseButton onClick={() => toggleModal(false)}>x</CloseButton>

      <ContentContainer>
        {/* <Image src={product.image_url[0]} /> */}
        <Image src={product.images[0].image_url} alt="Mini Image" />
        <Copy>
          <h4>{product.title}</h4>
          <p>{product.sub_title}</p>
        </Copy>
      </ContentContainer>

      <ContentContainer>
        <Button onClick={() => toggleModal(false)}>Continue Shopping</Button>
        <Button as={Link} to="/cart">
          Cart and Checkout
        </Button>
      </ContentContainer>
    </Card>
  );
};

const Card = styled.div`
  width: 30vw;
  /* margin: 30vh auto; */
  top: 50px;
  right: 50px;
  position: fixed;
  border: 1px solid black;
  border-radius: 0.5em;
  z-index: 10;
  background-color: white;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  margin-left: 10px;
  margin-right: 10px;
`;
const Image = styled.img`
  margin-top: 25px;
  width: 150px;
  height: 100px;
`;
const CloseButton = styled.div`
  cursor: pointer;
  height: 20px;
  width: 20px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 5px;
  right: 5px;
  color: inherit;
  text-decoration: none;
  text-align: center;
  border: 1px solid black;
  border-radius: 50%;
`;

const Copy = styled.div`
  margin-left: 10px;
`;
const Button = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px;
  text-decoration: none;
  width: 200px;
  display: flex;
  justify-content: center;
  align-self: center;
  margin: 8px;
  background-color: rgba(0, 57, 7, 0.5);
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default AddedToCartModal;
