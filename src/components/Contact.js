import React from "react";
import { Col, Container, Row, Form } from "reactstrap";

const Contact = () => {
  return (
    <div className="contact py-5">
      <Container className="py-5">
        <Row className="justify-content-center align-items-center">
          <Col md="4">
            <h1>Got A Project Or A Partnership In Mind?</h1>
            <Row className="py-5">
              <Col xs="6">
                <i class="fa-solid fa-phone"></i>
                <p>Phone</p>
                <p>+92-300-0000000</p>
                <p>+92-300-0000000</p>
              </Col>
              <Col xs="6">
                <i class="fa-solid fa-at"></i>
                <p>Email</p>
                <p>info@technolimedia.com</p>
                <p>info@technolimedia.com</p>
              </Col>
            </Row>
          </Col>
          <Col md="7" className="offset-md-1">
            <Form>
              <Row>
                <Col md="6" sm="12">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Enter Your Name"
                    />
                    <label for="floatingInput">Enter Your Name</label>
                  </div>
                </Col>
                <Col md="6" sm="12">
                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Your Email Address"
                    />
                    <label for="floatingPassword">Your Email Address</label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="Your Phone Number"
                    />
                    <label for="floatingPassword">Your Phone Number</label>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <div class="form-floating mb-3">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea2"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label for="floatingTextarea2">
                      Tell About Your Project
                    </label>
                  </div>
                </Col>
              </Row>
              <Row className="">
                <Col xs="12" className="text-end">
                  <button type="submit" className="get__started">
                    Send Message
                    <i className="fa-solid fa-arrow-right send__icon"></i>
                  </button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
