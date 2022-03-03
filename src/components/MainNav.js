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

import logo from "../assets/img/real/logo-white.svg";

const MainNav = () => {
  const [isOpen, setIsOpen] = React.useState(true);

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const handleResize = (e) => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  React.useEffect(() => {
    return () => {
      window.addEventListener("resize", handleResize);
    };
  });

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  if (windowWidth > 992) {
    return (
      <>
        <Navbar color="light" light expand="md" className="main__nav fixed-top">
          <Container>
            <NavbarBrand href="/">
              <img src={logo} width="auto" height="40px" />
              {/* Technoli Media */}
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem className="mx-3">
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem className="mx-3">
                <NavLink href="/components/">About Us</NavLink>
              </NavItem>
              <NavItem className="mx-3">
                <NavLink href="/components/">Services</NavLink>
              </NavItem>
              <NavItem className="mx-3">
                <NavLink href="/components/">Blog</NavLink>
              </NavItem>
              <NavItem className="mx-3">
                <NavLink href="/components/">Careers</NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  } else {
    return (
      <>
        <Container fluid className="drawerNav">
          <div className="drawer__nav py-4 container">
            <div className="logo">
              <img src={logo} height="30px" width="auto" />
            </div>

            <div className="bread__crumb">
              <button className="btn__drawer" onClick={handleDrawer}>
                <i class="fa-solid fa-bars"></i>
              </button>
            </div>
            <div className={!isOpen ? "drawer" : "drawer__off"}>
              <ul className="drawer__list">
                <li className="drawer__item">
                  <button onClick={handleDrawer} id="btn__xmark">
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                </li>
                <li className="drawer__item text-end">
                  <NavLink to="seller" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="drawer__item">
                  <NavLink to="buyer__section" className="nav-link">
                    About Us
                  </NavLink>
                </li>
                <li className="drawer__item">
                  <NavLink to="market__place" className="nav-link">
                    Services
                  </NavLink>
                </li>
                <li className="drawer__item">
                  <NavLink to="tokenDist" className="nav-link">
                    Blog
                  </NavLink>
                </li>
                <li className="drawer__item">
                  <NavLink to="tokenDist" className="nav-link">
                    Careers
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </>
    );
  }
};

export default MainNav;
