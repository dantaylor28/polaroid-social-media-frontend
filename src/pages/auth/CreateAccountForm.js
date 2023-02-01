import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import styles from "../../styles/CreateAccountForm.module.css";

const CreateAccountForm = () => {
  return (
    <Row className={styles.Row}>
      <Col md={6}>
        <Container className={styles.Form}>
          <h1 className={styles.Heading}>create an account</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </Col>
      <Col md={6}>
        <h1>Image here? maybe 2</h1>
      </Col>
    </Row>
  );
};

export default CreateAccountForm;
