import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Image } from "react-bootstrap";
import styles from "../../styles/CreateAccountForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Link } from "react-router-dom";
import signup from "../../assets/signup.png";

const CreateAccountForm = () => {
  const [createProfileData, setCreateProfileData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = createProfileData;

  const handleChange = (event) => {
    setCreateProfileData({
      ...createProfileData,
      [event.target.name]: event.target.value,
    });
  };

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
                type="text"
                placeholder="Enter Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className={styles.FormFields} controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.FormTextBox}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className={styles.FormFields} controlId="password2">
              <Form.Label className="d-none">Confirm Password</Form.Label>
              <Form.Control
                className={styles.FormTextBox}
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            <Button className={btnStyles.Button} type="submit">
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
        {/* <Container className={styles.SignUpIntroCon} md={12}>
          <div className={styles.SignUpIntroText}>
            come and join the community!
          </div>
        </Container> */}
      </Col>
    </Row>
  );
};

export default CreateAccountForm;
