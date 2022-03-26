import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

import growImg1 from "../assets/img/real/about-img.png";
import growImg2 from "../assets/img/real/about-img-ii.png";

const Grow = () => {
  return (
    <div className="grow__section">
      <Container className="py-5">
        <Row>
          <Col md="7" sm="12">
            <h5>Grow Your Business</h5>
            <h1>
              Take your Business to another level of perfection with Technoli
              Media.
            </h1>
          </Col>
        </Row>
        <Row className="my-5 py-5 justify-content-end">
          <Col md="6" sm="12" className="my-4">
            <p>
              In this digi-modern world, our Digital Marketing Experts have put
              together thousands of successful digital marketing campaigns by
              increasing leads, phone calls, transactions, and making the
              traffic flow on the website. We create maximum brand awareness on
              Social Media Platforms to reach the maximum targeted audience.
              Don't delay any further, Request a Free Strategy Proposal and get
              a Gain Plan for elite revenue generation.
            </p>
            <Link to="/" className="readMore__post my-5">
              Learn More &nbsp;&nbsp;{" "}
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <img
              src={growImg1}
              width="100%"
              height="auto"
              className="py-5 my-5"
            />
          </Col>
          <Col md="6" sm="12" className="my-4 px-5">
            <img src={growImg2} width="100%" height="auto" />
          </Col>
        </Row>
        <Row className="my-1">
          <p className="growText__bottom">
            Growing your business digitally through our tech-enabled marketing
            services. <span>(Generating Leads, Calls and Revenue)</span>
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Grow;
