import React, { useState } from "react";
import styled from "styled-components";
import hero from "./assets/heroTyler.png";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Image src={hero} alt="Landing Hero Wheel" />
      {/* <TagLine>
        "Grab a bunch of bikes and ride them around with your friends. It's the
        shit." - tyler the Creator
      </TagLine> */}
      <Content>
        <Copy>
          <h3> Speed, Design, Bespoke Quality</h3>
          <Divider />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Fermentum et sollicitudin ac orci phasellus. Tellus elementum
            sagittis vitae et leo duis. Eget sit amet tellus cras adipiscing
            enim. Enim praesent elementum facilisis leo.
          </p>
        </Copy>
        <Copy>
          <h3>Have a question?</h3>
          <h5>Reach out to our team of bike specialists!</h5>
          <Button onClick={() => alert("Thanks for reaching out!")}>
            Contact Us
          </Button>
          <Divider />
          <h3>Check out all our great bike in stock!</h3>
          <Button as={Link} to="/products" style={{ maxWidth: "300px" }}>
            Bikes!
          </Button>
        </Copy>
      </Content>
    </div>
  );
};

const Hero = styled.div`
  width: 100%;
  height: 65vh;
  position: relative;
`;
const Image = styled.img`
  /* object-fit: contain; */
  z-index: -1;
  position: relative;
  max-width: 100%;
  height: auto; /* height: 100vh; */
`;
// const TagLine = styled.div`
//   background-color: rgba(255, 255, 255, 0.5);
//   border-radius: 6px;
//   border: 1px solid black;
//   top: 20vh;
//   left: 20vw;
// `;
const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 6vw;
  position: relative;
  margin: 10px 30px 10px 30px;
`;

const Copy = styled.div`
  margin: 25px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;
const Button = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding-top: 8px;
  padding-bottom: 8px;
  /* padding: 8px 16px; */
  text-decoration: none;
  width: 100%;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-self: center;
  background-color: rgba(0, 57, 7, 0.5);
  /* a {
    color: inherit;
    text-decoration: none;
  } */
`;

export default Landing;
