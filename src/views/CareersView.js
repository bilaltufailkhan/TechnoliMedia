import React from "react";

import { Container, Row, Col } from "reactstrap";
import BlogHeader from "../components/BlogHeader";
import Cards from "../components/Elements/Cards";
import Footer from "../components/Footer";
import Grow from "../components/Grow";
import MainNav from "../components/MainNav";

const CareersView = () => {
  return (
    <>
      <Container fluid className="p-0 careers">
        <Row>
          <Col xs="12">
            <MainNav />
          </Col>
          <Col xs="12">
            <BlogHeader title="Work With Technoli Media" />
          </Col>
          <Col xs="12" className="">
            <Container className="py-5">
              <Row className="my-5 py-5">
                <Col xs="12">
                  <h6>Open Positions</h6>
                  <h1>Find Your Job and Apply</h1>
                </Col>
              </Row>
              <Row>
                <Col md="6" sm="12" className="my-4">
                  <Cards
                    title="Senior UX/Product Designer"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                  />
                </Col>
                <Col md="6" sm="12" className="my-4">
                  <Cards
                    title="Senior UX/Product Designer"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                  />
                </Col>
                <Col md="6" sm="12" className="my-4">
                  <Cards
                    title="Senior UX/Product Designer"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                  />
                </Col>
                <Col md="6" sm="12" className="my-4">
                  <Cards
                    title="Senior UX/Product Designer"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                  />
                </Col>
                <Col md="6" sm="12" className="my-4">
                  <Cards
                    title="Senior UX/Product Designer"
                    content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                  />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs="12">
            <Container className="py-5"></Container>
          </Col>
          <Col xs="12">
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CareersView;
