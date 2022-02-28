import React from "react";
import { Col, Container, Row } from "reactstrap";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Grow from "../components/Grow";
import Header from "../components/Header";
import MainNav from "../components/MainNav";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const AdminView = (props) => {
  return (
    <>
      <Container fluid className="p-0">
        <Row>
          <Col xs="12">
            <MainNav />
          </Col>
          <Col xs="12">
            <Header />
          </Col>
          <Col xs="12">
            <About />
          </Col>
          <Col xs="12">
            <Services />
          </Col>
          <Col xs="12">
            <Grow />
          </Col>
          <Col xs="12">
            <Portfolio />
          </Col>
          <Col xs="12">
            <Contact />
          </Col>
          <Col xs="12">
            <Testimonials />
          </Col>
          <Col xs="12">
            <Blog />
          </Col>
          <Col xs="12">
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminView;
