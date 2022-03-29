import React from "react";
import { Col, Container, Row } from "reactstrap";
import Cards from "./Elements/Cards";
import researchImg from "../assets/img/real/research.png";
import marketingImg from "../assets/img/real/marketing.png";
import blockchainImg from "../assets/img/real/blockchain.png";
import designImg from "../assets/img/real/design.png";

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
              We are a team of programming experts and designing professionals
              ready to develop, design, market, run test, and to manage Software
              Development in the most effective ways. Our highly passionate
              professionals can take your business to the next level.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md="6" sm="12" className="p-5">
            <Cards
              title="Research and Discovery"
              content="We analyze direct and indirect competitor research on your behalf, making a ground for your audience and their mindsets, auditing your existing channels, and providing the highly diversified discovery."
              cardImg={researchImg}
            />
          </Col>
          <Col md="6" sm="12" className="p-5">
            <Cards
              title="Marketing Strategy"
              cardImg={marketingImg}
              content="Our marketing experts set goals and KPIs to measure success and ROI in order to evaluate the efficiency or profitability of an investment. Our marketing strategy involves the usage of our findings from the digital audit to grow your buisness digitally."
            />
          </Col>
        </Row>
        <Row>
          <Col md="6" sm="12" className="p-5">
            <Cards
              title="Blockchain Development"
              cardImg={blockchainImg}
              content="Our experts provide a decentralized digital ledger: Blockchain, that saves transactions on thousands of computers around the globe. It provides a transparent solution for digital proof of ownership, collectability, transfer of value, governance, and accessibility."
            />
          </Col>
          <Col md="6" sm="12" className="p-5">
            <Cards
              title="Design Management"
              cardImg={designImg}
              content="Our design management experts provide the best services in project management, design, strategy making and encompasses the on-going processes, business decisions to make your business innovative and sustainable."
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
