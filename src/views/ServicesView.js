import React from "react";

import { Container, Row, Col } from "reactstrap";
import BlogHeader from "../components/BlogHeader";
import Footer from "../components/Footer";
import Grow from "../components/Grow";
import MainNav from "../components/MainNav";
import Services from "../components/Services";

const ServicesView = () => {
  return (
    <>
      <Container fluid className="p-0">
        <Row>
          <Col xs="12">
            <MainNav />
          </Col>
          <Col xs="12">
            <BlogHeader title="Let's Start Something Big Together" />
          </Col>
          <Col xs="12">
            <Grow />
          </Col>
          <Col xs="12">
            <Services />
          </Col>
          <Col xs="12">
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ServicesView;
