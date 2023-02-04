import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import styles from "../../styles/CreateEditPostForm.module.css";
import formStyles from "../../styles/CreateAccountForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import upload from "../../assets/upload.png"

function CreatePostForm() {
  
  return (
    <Form>
      <Row>
        <Col md={5} lg={5}>
          <Container className={styles.CreatePostForm}>
            <h1 className={styles.Heading}>upload a post</h1>
            <Form.Group className={formStyles.FormFields}>
              <Form.Label className="d-none">Title</Form.Label>
              <Form.Control
                className={formStyles.FormTextBox}
                type="text"
                name="title"
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group className={formStyles.FormFields}>
              <Form.Label className="d-none">Caption</Form.Label>
              <Form.Control
                className={formStyles.FormTextBox}
                as="textarea"
                name="caption"
                rows={6}
                placeholder="Caption"
              />
            </Form.Group>
            <Form.Group className={formStyles.FormTextBox}>
              <Form.Label>Category</Form.Label>
              <Form.Control
                className={formStyles.FormFields}
                as="select"
                custom
                name="category"
              >
                <option value="general">general</option>
                <option value="landscapes">landscapes</option>
                <option value="portraits">portraits</option>
              </Form.Control>
            </Form.Group>
            <div className={btnStyles.BtnDiv}>
              <Button className={btnStyles.PostButton}>Cancel</Button>
              <Button className={btnStyles.PostButton}>Upload</Button>
            </div>
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
                <Asset src={upload} message="Click or tap to choose an image"/>
              </Form.Label>
            </Form.Group>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default CreatePostForm;
