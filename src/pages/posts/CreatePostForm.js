import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import styles from "../../styles/CreateEditPostForm.module.css";

function CreatePostForm() {
  return (
    <Form>
      <Row>
        <Col>
          <Container>Upload post form here..</Container>
        </Col>
        <Col>
          <Container className={`${styles.ImagePreview} d-flex flex-column justify-content-center`}>
            <Form.Group className="text-center">
                <Form.Label className="d-flex justify-content-center">
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
