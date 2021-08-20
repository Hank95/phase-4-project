import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

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
      });
  }, [id]);

  if (!isLoaded) return <h2>Loading...</h2>;

  console.log(productDetails);

  return (
    <div>
      <h1>{productDetails.title}</h1>

      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default ProductDetails;
