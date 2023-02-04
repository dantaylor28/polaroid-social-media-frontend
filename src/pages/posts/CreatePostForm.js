import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import styles from "../../styles/CreateEditPostForm.module.css";

function CreatePostForm() {
  return (
    <Form>
      <Row>
        <Col md={5} lg={5}>
          <Container className={styles.CreatePostForm}>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Caption</Form.Label>
                    <Form.Control as="textarea" name="caption" rows={6} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Category</Form.Label>
                    <Form.Control as="select" custom name="category">
                        <option value="general">general</option>
                        <option value="landscapes">landscapes</option>
                        <option value="portraits">portraits</option>
                    </Form.Control>
            </Form.Group>
          </Container>
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
