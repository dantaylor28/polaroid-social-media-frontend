import React from "react";
import { Col, Container, Row, Form, Button, Image } from "react-bootstrap";
import styles from "../../styles/CreateAccountForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Link } from "react-router-dom";
import signup from "../../assets/signup.png";

const CreateAccountForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto" md={6}>
        <Container className={styles.Form}>
          <h1 className={styles.Heading}>create an account</h1>
          <Form>
            <Form.Group className={styles.FormFields} controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={styles.FormTextBox}
                type="email"
                placeholder="Enter Username"
              />
            </Form.Group>
            <Form.Group
              className={styles.FormFields}
              controlId="formBasicPassword"
            >
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.FormTextBox}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group
              className={styles.FormFields}
              controlId="formBasicPassword"
            >
              <Form.Label className="d-none">Confirm Password</Form.Label>
              <Form.Control
                className={styles.FormTextBox}
                type="password"
                placeholder="Confirm Password"
              />
            </Form.Group>
            <Button
              className={btnStyles.Button}
              variant="primary"
              type="submit"
            >
              Join
            </Button>
          </Form>
          <div className={`${styles.SignUpText} text-muted`}>
            Already a member?
            <span>
              <Link className={styles.Link} to="/signin">
                {" "}
                Sign In here
              </Link>
            </span>
          </div>
        </Container>
      </Col>
      <Col
        className={`${styles.SignUpImgCol} my-auto d-none d-md-block`}
        md={6}
      >
        <Image className={styles.FormImage} src={signup} />
        <Container className={styles.SignUpIntroCon} md={12}>
          <div className={styles.SignUpIntroText}>come and join the community!</div>
        </Container>
      </Col>
    </Row>
  );
};

export default CreateAccountForm;
