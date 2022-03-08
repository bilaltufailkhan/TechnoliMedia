import React from "react";
import { Col, Container, Row } from "reactstrap";

import { Link } from "react-router-dom";

const PostTwo = (props) => {
  return (
    <>
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col sm="6">
            <img
              src={props.url}
              width="100%"
              height="auto"
              style={{ marginBottom: "1rem" }}
            />
          </Col>
          <Col sm="6" className="">
            <p className="date">{props.date}</p>
            <Link to="/singlepost" className="post__heading">
              <h6>{props.heading}</h6>
            </Link>
            <p className="post__content">{props.content}</p>
            <Link to="/singlepost" className="readMore__post">
              Read More&nbsp;&nbsp; <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PostTwo;
