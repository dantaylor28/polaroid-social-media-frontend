import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import styles from "../../styles/CreateAccountForm.module.css";

const CreateAccountForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto" md={6}>
        <Container className={styles.Form}>
          <h1 className={styles.Heading}>create an account</h1>
          <Form>
            <Form.Group className={styles.FormFields} controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control className={styles.FormTextBox} type="email" placeholder="Enter Username" />
            </Form.Group>
            <Form.Group className={styles.FormFields} controlId="formBasicPassword">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control className={styles.FormTextBox}  type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className={styles.FormFields} controlId="formBasicPassword">
              <Form.Label className="d-none">Confirm Password</Form.Label>
              <Form.Control className={styles.FormTextBox}  type="password" placeholder="Confirm Password" />
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
