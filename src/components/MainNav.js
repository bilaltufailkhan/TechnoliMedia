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

import { Link } from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  if (windowWidth > 992) {
    return (
      <>
        <Navbar color="light" light expand="md" className="main__nav fixed-top">
          <Container>
            <Link className="nav-brand" to="/" onClick={scrollToTop}>
              <img src={logo} width="auto" height="40px" />
              {/* Technoli Media */}
            </Link>
            <Nav className="ml-auto" navbar>
              <NavItem className="mx-3">
                <Link to="/" className="nav-link" onClick={scrollToTop}>
                  Home
                </Link>
              </NavItem>
              <NavItem className="mx-3">
                <ScrollLink
                  className="nav-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={100}
                  style={{ cursor: "pointer" }}
                >
                  About Us
                </ScrollLink>
              </NavItem>
              <NavItem className="mx-3">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </NavItem>
              <NavItem className="mx-3">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </NavItem>
              <NavItem className="mx-3">
                <Link className="nav-link" to="/careers">
                  Careers
                </Link>
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
                <li className="drawer__item text-end nav-item">
                  <Link to="/" className="nav-link" onClick={scrollToTop}>
                    Home
                  </Link>
                </li>
                <li className="drawer__item">
                  <ScrollLink
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={100}
                    className="nav-link"
                  >
                    About Us
                  </ScrollLink>
                </li>
                <li className="drawer__item">
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className="drawer__item">
                  <Link to="/blog" className="nav-link">
                    Blog
                  </Link>
                </li>
                <li className="drawer__item">
                  <Link to="/careers" className="nav-link">
                    Careers
                  </Link>
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
