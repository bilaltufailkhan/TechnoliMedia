import React from "react";
import { Col, Container, Row } from "reactstrap";

const About = () => {
  return (
    <div className="about">
      <Container className="py-5">
        <Row>
          <Col xs="12" className="text-center">
            <h5>Who We Are</h5>
            <h1>Work with Us, Not for Us</h1>
            <p>
              There are more than 100 definitions of marketing. But we
              understand that marketing is what happens in every company here
              and now: finding new solutions and launching new products.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
