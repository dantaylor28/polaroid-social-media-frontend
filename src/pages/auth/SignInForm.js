import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../styles/SignInForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import signin from "../../assets/signin.png"

const SignInForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto" md={6}>
        <Container className={styles.Form}>
          <h1 className={styles.Heading}>sign in to your account</h1>
          <Form>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={styles.FormFields}
                type="username"
                placeholder="Username"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.FormFields}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button
              className={btnStyles.Button}
              variant="primary"
              type="submit"
            >
              Sign In
            </Button>
          </Form>
          <div className={`${styles.SignInText} text-muted`}>
            Not signed up yet?
            <span>
              <Link className={styles.Link} to="/create/account">
                {" "}
                Create an account here
              </Link>
            </span>
          </div>
        </Container>
      </Col>
      <Col className={`${styles.SignInImageCol} my-auto d-none d-md-block`} md={6}>
        <Image className={styles.FormImage} src={signin}/>
      </Col>
    </Row>
  );
};

export default SignInForm;
