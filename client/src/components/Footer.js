import styled from "styled-components";

import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";
import linkedin from "./assets/linkedin.svg";

const Footer = () => {
  return (
    <Content>
      <Info>
        <h1>The Laurel Bike Shop</h1>
        <h5>Sign up for our email</h5>
        <h5>Send us feedback</h5>
        <h5>Order status</h5>
      </Info>
      <Social>
        <SocialImage src={facebook} alt="facebook" />
        <a href="https://www.instagram.com/henry_pendleton/">
          <SocialImage src={instagram} alt="instagram" />
        </a>
        <SocialImage src={twitter} alt="twitter" />
        <a href="https://www.linkedin.com/in/henry-pendleton-25255243/">
          <SocialImage src={linkedin} alt="linkedin" />
        </a>
      </Social>
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: rgb(47, 98, 104);
  color: white;
`;

const Info = styled.div`
  margin-left: 30px;
`;
const SocialImage = styled.img`
  cursor: pointer;
  height: 50px;
  width: 50px;
  margin: 20px;
  &:hover {
    color: white;
  }
`;
const Social = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;

export default Footer;
