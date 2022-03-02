import React from "react";
import { Col, Container, Row } from "reactstrap";
import Cards from "./Elements/Cards";

const Services = (props) => {
  // const { title, content } = props;
  return (
    <>
      <Container className="py-5 services">
        <Row className="justify-content-center align-items-center">
          <Col md="4" sm="12" className="p-5">
            <h1>Our Services</h1>
          </Col>
          <Col md="8" sm="12" className="p-5">
            <p>
              A team of programming experts and designing professionals
              develops, designs, markets, runs tests, and/or manages software
              development for the below- written:
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="6" sm="12" className="p-5">
            <Cards
              title="Research and Discovery"
              content="We will analyze direct and indirect competitor research. Research your audience and their mindset, Audit your existing channels."
            />
          </Col>
          <Col md="6" sm="12" className="p-5">
            <Cards
              title="Marketing Strategy"
              content="Setting goals, and KPIs to be able to measure success and ROI. Marketing strategy using the findings from the digital audit."
            />
          </Col>
        </Row>
        <Row>
          <Col md="6" sm="12" className="p-5">
            <Cards
              title="Blockchain Development"
              content="A blockchain is a decentralized digital ledger that saves transactions on thousands of computers around the globe."
            />
          </Col>
          <Col md="6" sm="12" className="p-5">
            <Cards
              title="Design Management"
              content="Design management encompasses the ongoing processes, business decisions, and strategies that enable innovation."
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
