import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/CreateAccountForm.module.css"

const CreateAccountForm = () => {
  return (
    <Row className={styles.Row}>
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
