import React from "react";
import { Col, Container, Row } from "reactstrap";

import footerLogo from "../assets/img/real/logo-2.svg";
import facebook from "../assets/img/real/facebook.svg";
import linkedin from "../assets/img/real/linkedin.svg";
import twitter from "../assets/img/real/twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };
  return (
    <div className="footer py-5 mt-5">
      <Container>
        <Row>
          <Col md="4" sm="12" className="my-4">
            <img src={footerLogo} height="auto" width="auto" />
          </Col>
          <Col md="4" sm="12" className="my-4">
            <h5>About Us</h5>
            <p>
              Welcome to Technoli Media. Technoli Media: A platform of most
              creative and highly passionate professionals generating highly
              converting traffic by making use of advanced online marketing
              methods and strategies. Good Marketing makes the company look
              smart. Great Marketing makes the customer feel smart.
            </p>
          </Col>
          <Col md="4" sm="12" className="my-4">
            <h5>hr@technolimedia.com</h5>
            <p>
              Send an email to Book a Free Meeting with Technoli Media Heroes
            </p>
            <div className="footer__icons">
              <a href="#" target="_blank">
                <img src={twitter} width="50px" height="auto" alt="twitter" />
              </a>
              <a href="#" target="_blank">
                <img src={facebook} width="50px" height="auto" alt="facebook" />
              </a>
              <a href="#" target="_blank">
                <img src={linkedin} width="50px" height="auto" alt="linkedin" />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-space-around align-items-center my-5 links__disp">
          <Col md="12" className="d-block footer__links">
            <Link to="/" onClick={scrollToTop}>
              Home
            </Link>
            <Link to="/" onClick={scrollToTop}>
              About Us
            </Link>
            <Link to="/services">Services</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/">Let's Talk</Link>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p>Technoli Media &copy; 2021. All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
