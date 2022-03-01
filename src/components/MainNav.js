import React from "react";
import {
  Col,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Row,
  NavLink,
} from "reactstrap";

// import logo from "../assets/img/logo.png";

const MainNav = () => {
  return (
    <>
      <Navbar color="light" light expand="md" className="main__nav fixed-top">
        <Container>
          <NavbarBrand href="/">
            {/* <img src={logo} width="40px" height="auto" /> */}
            Technoli Media
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">All Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Get a Quote
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNav;
