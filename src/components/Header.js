import React from "react";
import { Col, Container, Row } from "reactstrap";

const Header = () => {
  return (
    <div className="vh-100 header">
      <Container>
        <Row>
          <Col>
            <h1>Header</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
