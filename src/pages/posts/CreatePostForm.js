import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import styles from "../../styles/CreateEditPostForm.module.css";

function CreatePostForm() {
  return (
    <Form>
      <Row>
        <Col md={5} lg={5}>
          <Container className={styles.CreatePostForm}>Upload post form here..</Container>
        </Col>
        <Col md={7} lg={7}>
          <Container
            className={`${styles.ImagePreview} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload"
              >
                Image preview here..
              </Form.Label>
            </Form.Group>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default CreatePostForm;
