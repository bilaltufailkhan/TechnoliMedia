import React from "react";
import { Col, Container, Row } from "reactstrap";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import imgPlaceholder from "../assets/img/imgplaceholder.png";
import portfolioOne from "../assets/img/real/portfolio1.png";
import portfolioTwo from "../assets/img/real/portfolio2.png";
import portfolioThree from "../assets/img/real/portfolio3.png";

const Portfolio = () => {
  const responsiveClass = {
    0: {
      items: 1,
      nav: false,
    },
    992: {
      items: 2,
      nav: false,
    },
    768: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
      nav: false,
      loop: true,
    },
  };
  return (
    <>
      <Container className="portfolio py-5">
        <Row className="justify-content-center align-items-center">
          <Col md="4" sm="12" className="py-5">
            <h1>Our Portfolio</h1>
          </Col>
          <Col md="8" sm="12" className="py-5">
            <p className="mt-4">
              Our biggest accomplishments inlcude taking part in numerous
              projects and working with a number of clients from highly esteemed
              industries. We take pride in our consistency and in always
              building a satisfied customer.
            </p>
          </Col>
        </Row>
        <Row className="py-5">
          <Col xs="12">
            <OwlCarousel
              className="owl-theme"
              loop={true}
              margin={20}
              nav={false}
              touchDrag
              items={2}
              dots={false}
              autoPlay
              responsive={responsiveClass}
            >
              <div class="item">
                <img src={portfolioOne} width="100%" height="auto" />
              </div>
              <div class="item">
                <img src={portfolioTwo} width="100%" height="auto" />
              </div>
              <div class="item">
                <img src={portfolioThree} width="100%" height="auto" />
              </div>
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
