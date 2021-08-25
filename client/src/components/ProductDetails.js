import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import leftArrow from "./assets/left-arrow.svg";
import rightArrow from "./assets/right-arrow.svg";

const ProductDetails = ({ handleAddCart }) => {
  const [productDetails, setProductDetails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [bought, setBought] = useState(false);
  const [images, setImages] = useState([
    "https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg",
  ]);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Pull ID of appropriate project from URL (:id)
  // using useParams Hook
  const id = useParams().id;

  // Pull history object using useHistory Hook
  let history = useHistory();

  // Create Callback Function to handle "Back" Button
  function handleBack() {
    history.goBack();
  }

  useEffect(() => {
    fetch(`/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
        setIsLoaded(true);
        setImages(data.images);
      });
  }, [id]);

  const handleClick = (id) => {
    if (!bought) {
      handleAddCart(id, quantity);
      setBought(true);
    } else {
      return;
    }
  };

  //   Handle change of quantity selectedPage
  const handleChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleImageClick = (right) => {
    const maxImage = images.length - 1;
    if (right) {
      if (activeImage === maxImage) {
        setActiveImage(0);
      } else {
        setActiveImage(() => activeImage + 1);
      }
    } else {
      console.log(right);
      if (activeImage === 0) {
        setActiveImage(maxImage);
      } else {
        setActiveImage(activeImage - 1);
      }
    }
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (!isLoaded) return <h2>Loading...</h2>;

  const price = numberWithCommas(productDetails.price / 100);

  return (
    <Container>
      <Card>
        <Wrapper>
          <Image src={images[activeImage].image_url} alt="product image" />
          <NextLeft onClick={() => handleImageClick(false)}>
            <img src={leftArrow} alt="left arrow" />
          </NextLeft>
          <NextRight onClick={() => handleImageClick(true)}>
            <img src={rightArrow} alt="right arrow" />
          </NextRight>
        </Wrapper>
        <h1>{productDetails.title}</h1>
        <p>
          {productDetails.description} / ${price}
        </p>

        <label for="quant">Quantity</label>
        <select name="quant" onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <Button onClick={() => handleClick(productDetails.id)}>
          {bought ? "Added!" : "Add to Cart"}
        </Button>
      </Card>
      <button onClick={handleBack}>Back</button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* max-width: 965px; */
`;

const Card = styled.div`
  max-width: 965px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;
const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
const NextLeft = styled.div`
  position: absolute;
  background-color: grey;
  cursor: pointer;
  width: 60px;
  top: 45%;
  left: 0;
  opacity: 50%;
  &:hover {
    opacity: 1;
  }
`;
const NextRight = styled.div`
  position: absolute;
  cursor: pointer;
  background-color: grey;
  width: 60px;
  top: 45%;
  right: 0%;
  opacity: 50%;
  &:hover {
    opacity: 1;
  }
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

export default ProductDetails;
