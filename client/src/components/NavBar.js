import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import laurel from "./assets/laurellogo.svg";
const NavBar = ({ user, setUser, cart }) => {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  console.log(cart);
  return (
    <div>
      <Logo>
        <Link to="/">
          <img src={laurel} alt="logo" />
        </Link>
      </Logo>
      <Container>
        <Nav>
          <NavButton as={Link} to="/products">
            Products
          </NavButton>
          <NavButton as={Link} to="/cart">
            Cart
          </NavButton>
          {cart > 0 ? <Icon>{cart}</Icon> : null}
          <NavButton onClick={handleLogoutClick}>Log Out</NavButton>
        </Nav>
      </Container>
    </div>
  );
};
const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  position: relative;
  top: 0;
  left: 0;
  font-family: "hevetica";
  font-size: 3rem;
  color: orangered;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  top: 10vh;
  right: 10px;
`;

const NavButton = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Icon = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: orangered;
  color: white;
  text-align: center;
`;

export default NavBar;
