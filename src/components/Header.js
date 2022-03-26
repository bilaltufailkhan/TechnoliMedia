import React from "react";
import { Col, Container, Row } from "reactstrap";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="vh-100 header">
      <Container className="">
        <Row className="justify-content-center">
          <Col md="5" sm="12" className="align-items-center pr-5">
            <h1>Marketing Agency</h1>
            <p>
            Technoli Media has the exact expertise and tools to make sure you are making the right choice-always delivering more than expected.
              
            </p>
            <Link to="/" className="get__started btn btn-lg px-3">
              Get Started
              <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </Col>
          <Col md="7" sm="12" className="align-items-center"></Col>
        </Row>
        <div className="header__socials">
          <a href="#" target="_blank">
            <i class="fa-brands fa-dribbble"></i>Dribbble
          </a>
          <a href="#" target="_blank">
            <i class="fa-brands fa-behance"></i>Behance
          </a>
          <a href="#" target="_blank">
            <i class="fa-brands fa-instagram"></i>Instagram
          </a>
          <div className="headerSocials__line"></div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
