import React from "react";

import { Container, Row, Col } from "reactstrap";

const BlogHeader = (props) => {
  return (
    <>
      <div className="blog__header">
        <Container className="">
          <Row className="justify-content-center">
            <Col md="5" sm="12" className="align-items-center pr-5">
              <h1>{props.title}</h1>
              <p>{props.subtitle}</p>
            </Col>
            <Col md="7" sm="12" className="align-items-center"></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BlogHeader;
