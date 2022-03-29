import React from "react";
import { Col, Container, Row } from "reactstrap";

const About = () => {
  return (
    <div className="about">
      <Container className="py-5">
        <Row>
          <Col xs="12" className="text-center">
            <h5>Who We Are</h5>
            <h1>Managing your Business as if it's Ours</h1>
            <p>
              Welcome to Technoli Media! <br /> Technoli Media: A platform of
              most creative and highly passionate professionals generating
              highly converting traffic by making use of advanced online
              marketing methods and strategies. We strongly believe that "Good
              Marketing makes the company look smart but Great Marketing makes
              the customer feel smart."
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
