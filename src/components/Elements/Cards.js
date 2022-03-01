import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import cardImg from "../../assets/img/card.png";

const Cards = (props) => {
  return (
    <>
      <Container className="service__card">
        <Row>
          <Col xs="12">
            <img src={cardImg} width="70px" height="auto" />
            <h6>{props.title}</h6>
            <p>{props.content}</p>
            <Link to="/">
              Read More<i class="fa-solid fa-arrow-right"></i>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cards;
