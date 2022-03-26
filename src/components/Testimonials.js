import React from "react";
import { Col, Container, Row } from "reactstrap";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import userImg from "../assets/img/user.png";
import blockQuote from "../assets/img/real/blockquote.png";

const Testimonials = () => {
  return (
    <div className="testimonials py-5">
      <Container className="py-5">
        <Row className="justify-content-center align-items-center py-4 mb-4">
          <Col xs="10">
            <h1>Client Reviews</h1>
            <span>Providing you Higly Reviewed Technoli Media.</span>
          </Col>
          <Col xs="2">
            <img
              className="block__quote"
              src={blockQuote}
              height="100px"
              width="auto"
            />
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
                  <img alt="" src={userImg} />
                  <div className="customer__creds">
                    <p>Jon Doe</p>
                    <span>Web Dev</span>
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
                  <img alt="" src={userImg} />
                  <div className="customer__creds">
                    <p>Jon Doe</p>
                    <span>Web Dev</span>
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
                  <img alt="" src={userImg} />
                  <div className="customer__creds">
                    <p>Jon Doe</p>
                    <span>Web Dev</span>
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
                  <img alt="" src={userImg} />
                  <div className="customer__creds">
                    <p>Jon Doe</p>
                    <span>Web Dev</span>
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
