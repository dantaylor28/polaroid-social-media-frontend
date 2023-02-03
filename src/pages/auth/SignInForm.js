import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/SignInForm.module.css"

const SignInForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto" md={6}>
        <Container className={styles.Form}>
          <h1 className={styles.Heading}>sign into your account</h1>
          form here
        </Container>
      </Col>
      <Col>image here</Col>
    </Row>
  );
};

export default SignInForm;
