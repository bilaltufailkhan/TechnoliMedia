import React from "react";
import { Col, Container, Row } from "reactstrap";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import imgPlaceholder from "../assets/img/imgplaceholder.png";

const Portfolio = () => {
  return (
    <>
      <Container className="portfolio py-5">
        <Row className="justify-content-center">
          <Col md="4" sm="12" className="py-5">
            <h1>Our Portfolio</h1>
          </Col>
          <Col md="8" sm="12" className="py-5">
            <p className="mt-4">
              We had an opportunity to work with a number of clients from
              different industries and we are proud of taking part in their
              projects.
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
              items={3}
              dots={false}
              autoPlay
            >
              <div class="item">
                <img src={imgPlaceholder} width="100%" height="auto" />
              </div>
              <div class="item">
                <img src={imgPlaceholder} width="100%" height="auto" />
              </div>
              <div class="item">
                <img src={imgPlaceholder} width="100%" height="auto" />
              </div>
              <div class="item">
                <img src={imgPlaceholder} width="100%" height="auto" />
              </div>
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
