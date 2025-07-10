import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

// Styled Components
const Nav = styled.nav`
  background-color: #06d6a0;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Logo = styled.h1`
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    background-color: #06d6a0;
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    padding: 20px;
  }
`;

const NavLink = styled(Link)`
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px;
    transition: 0.3s;
  }
`;

// Main Component
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <Logo>Covid ID</Logo>

      <Burger onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </Burger>

      <NavLinks open={menuOpen}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Global</NavLink>
        <NavLink to="/indonesia" onClick={() => setMenuOpen(false)}>Indonesia</NavLink>
        <NavLink to="/provinsi" onClick={() => setMenuOpen(false)}>Provinsi</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
