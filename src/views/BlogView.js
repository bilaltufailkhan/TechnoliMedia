import React from "react";
import { Container, Row, Col } from "reactstrap";
import BlogHeader from "../components/BlogHeader";
import PostTwo from "../components/Elements/PostTwo";
import Footer from "../components/Footer";
import MainNav from "../components/MainNav";

import img from "../assets/img/real/post1.png";
import Post from "../components/Elements/Post";

const BlogView = () => {
  return (
    <>
      <Container fluid className="p-0 blog__view">
        <Row>
          <Col xs="12">
            <MainNav />
          </Col>
          <Col xs="12">
            <BlogHeader
              title="The Blogs"
              subtitle="Read our Latest Blogs and News"
            />
          </Col>
          <Col xs="12" className="py-5">
            <PostTwo
              heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              content={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
              }
              url={img}
              date="June 12, 2021"
            />
          </Col>

          <Col xs="12">
            <Container>
              <Row className="my-5">
                <Col md="4">
                  <Post
                    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    content={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                    }
                    url={img}
                    date="June 12, 2021"
                  />
                </Col>
                <Col md="4">
                  <Post
                    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    content={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                    }
                    url={img}
                    date="June 12, 2021"
                  />
                </Col>
                <Col md="4">
                  <Post
                    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    content={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                    }
                    url={img}
                    date="June 12, 2021"
                  />
                </Col>
              </Row>
              <Row className="my-5">
                <Col md="4">
                  <Post
                    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    content={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                    }
                    url={img}
                    date="June 12, 2021"
                  />
                </Col>
                <Col md="4">
                  <Post
                    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    content={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                    }
                    url={img}
                    date="June 12, 2021"
                  />
                </Col>
                <Col md="4">
                  <Post
                    heading="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                    content={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                    }
                    url={img}
                    date="June 12, 2021"
                  />
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs="12">
            <Footer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogView;
