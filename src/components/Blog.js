import React from "react";
import { Col, Container, Row } from "reactstrap";
import Post from "./Elements/Post";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import img from "../assets/img/real/post3.png";

const Blog = (props) => {
  const responsiveClass = {
    0: {
      items: 1,
      nav: false,
    },
    992: {
      items: 2,
      nav: false,
    },
    768: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
      loop: true,
    },
  };
  return (
    <>
      <Container className="py-5 blogs">
        <Row>
          <Col md="6" xs="12">
            <h1>Our Blogs</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </Col>
        </Row>
        <Row className="py-5">
          <Col xs="12">
            <OwlCarousel
              className="owl-theme"
              loop={true}
              margin={60}
              nav={false}
              touchDrag
              items={3}
              dots={false}
              autoPlay
              responsive={responsiveClass}
            >
              <div class="item">
                <Post
                  heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
                  url={img}
                  date="June 12, 2021"
                />
              </div>
              <div class="item">
                <Post
                  heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
                  url={img}
                  date="June 12, 2021"
                />
              </div>
              <div class="item">
                <Post
                  heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
                  url={img}
                  date="June 12, 2021"
                />
              </div>
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
