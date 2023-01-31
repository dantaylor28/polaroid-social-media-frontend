import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CreateAccountForm = () => {
  return (
    <Row>
      <Col md={6}>
        <Container>
          <h1>Sign up</h1>
          <p>Sign up form here</p>
        </Container>
      </Col>
      <Col md={6}>
        <h1>Image here? maybe 2</h1>
      </Col>
    </Row>
  );
};

export default CreateAccountForm;
