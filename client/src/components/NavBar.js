import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import laurel from "./assets/laurellogo.svg";
const NavBar = ({ user, setUser }) => {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <Container>
      <Logo>
        <Link to="/">
          <img src={laurel} alt="logo" />
        </Link>
      </Logo>
      <Nav>
        <NavButton as={Link} to="/products">
          Products
        </NavButton>
        <NavButton as={Link} to="/cart">
          Cart
        </NavButton>
        <NavButton onClick={handleLogoutClick}>Log Out</NavButton>
      </Nav>
    </Container>
  );
};
const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
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
  right: 8px;
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

export default NavBar;
