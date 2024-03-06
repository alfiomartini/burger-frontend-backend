import { Link } from "react-router-dom";
import styled from "styled-components";

export function Header() {
  return (
    <Navbar>
      <Logo to="/">Burger World</Logo>
      <NavbarItems>
        <Link to="/burgers">Burgers</Link>
        <Link to="/ingredients">Ingredients</Link>
        <Link to="/orders">Orders</Link>
      </NavbarItems>
    </Navbar>
  );
}

const Navbar = styled.nav`
  display: flex;
  gap: 50px;
  align-items: center;
  background-color: #000033;
  color: whitesmoke;
  padding: 20px 20px;
`;

const NavbarItems = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  background-color: inherit;
  color: inherit;
`;

const Logo = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: lightsteelblue;
`;
