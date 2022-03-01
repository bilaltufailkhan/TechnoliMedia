import React from "react";
import { Col, Container, Row } from "reactstrap";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import userImg from "../assets/img/user.png";

const Testimonials = () => {
  return (
    <div className="testimonials py-5">
      <Container className="py-5">
        <Row>
          <Col>
            <h1>Testimonials</h1>
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
              items={1}
              dots={false}
              autoPlay
            >
              <div class="item">
                <p className="testimonial__text">
                  The entire staff at Technoli Media has been phenomenal. They
                  are quick with their replies and incredibly helpful. Thank you
                  Technoli Media.
                </p>
                <div className="customer__info">
                  <img alt="" src={userImg} width="10px" height="auto" />
                  <div className="customer__creds">
                    <p>Jon Doe</p>
                    <p>Web Dev</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <p className="testimonial__text">
                  The entire staff at Technoli Media has been phenomenal. They
                  are quick with their replies and incredibly helpful. Thank you
                  Technoli Media.
                </p>
                <div className="customer__info">
                  <img alt="" src={userImg} width="10px" height="auto" />
                  <div className="customer__creds">
                    <p>Jon Doe</p>
                    <p>Web Dev</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <p className="testimonial__text">
                  The entire staff at Technoli Media has been phenomenal. They
                  are quick with their replies and incredibly helpful. Thank you
                  Technoli Media.
                </p>
                <div className="customer__info">
                  <img alt="" src={userImg} width="10px" height="auto" />
                  <div className="customer__creds">
                    <p>Jon Doe</p>
                    <p>Web Dev</p>
                  </div>
                </div>
              </div>
              <div class="item">
                <p className="testimonial__text">
                  The entire staff at Technoli Media has been phenomenal. They
                  are quick with their replies and incredibly helpful. Thank you
                  Technoli Media.
                </p>
                <div className="customer__info">
                  <img alt="" src={userImg} width="auto" height="auto" />
                  <div className="customer__creds">
                    <p>Jon Doe</p>
                    <p>Web Dev</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
