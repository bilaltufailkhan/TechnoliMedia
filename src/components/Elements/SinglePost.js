import React from "react";
import { Col, Container, Row } from "reactstrap";

const SinglePost = (props) => {
  return (
    <>
      <Container className="py-5 my-5">
        <Row className="justify-content-center align-items-center p-5">
          <Col xs="12">
            <img src={props.url} width="100%" height="auto" />
          </Col>
          <Col xs="12">
            <p className="date my-5">{props.date}</p>
            <h1 className="my-5">{props.heading}</h1>
            <p className="post__content my-5">{props.content}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SinglePost;
