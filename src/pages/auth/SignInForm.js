import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../../styles/SignInForm.module.css";

const SignInForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto" md={6}>
        <Container className={styles.Form}>
          <h1 className={styles.Heading}>sign into your account</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Col>
      <Col>image here</Col>
    </Row>
  );
};

export default SignInForm;
