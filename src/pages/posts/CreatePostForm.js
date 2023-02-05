import React, { useRef, useState } from "react";
import { Container, Form, Row, Col, Button, Image } from "react-bootstrap";
import styles from "../../styles/CreateEditPostForm.module.css";
import formStyles from "../../styles/CreateAccountForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import upload from "../../assets/upload.png";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function CreatePostForm() {
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    title: "",
    caption: "",
    post_image: "",
    category: "",
  });
  const { title, caption, post_image, category } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(post_image);
      setPostData({
        ...postData,
        post_image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new formData();

    formData.append("title", title);
    formData.append("caption", caption);
    formData.append("category", category);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
    } catch (error) {
      console.log(error);
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
    }
  };

  const form = (
    <>
      <Form.Group>
        <Form.Label className="d-none">Title</Form.Label>
        <Form.Control
          className={formStyles.FormTextBox}
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="d-none">Caption</Form.Label>
        <Form.Control
          className={formStyles.FormTextBox}
          as="textarea"
          name="caption"
          rows={6}
          placeholder="Caption"
          value={caption}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className={formStyles.FormTextBox}>
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          custom
          name="category"
          value={category}
          onChange={handleChange}
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
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="d-none d-md-block p-0 p-md-2" md={5} lg={5}>
          <Container className={styles.CreatePostForm}>
            <h1 className={styles.Heading}>upload a post</h1>
            <Form.Group className={formStyles.FormFields}>
              <Form.Label className="d-none">Title</Form.Label>
              <Form.Control
                className={formStyles.FormTextBox}
                type="text"
                name="title"
                placeholder="Title"
                value={title}
                onChange={handleChange}
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
                value={caption}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className={formStyles.FormTextBox}>
              <Form.Label>Category</Form.Label>
              <Form.Control
                className={formStyles.FormFields}
                as="select"
                custom
                name="category"
                value={category}
                onChange={handleChange}
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
        <Col className="py-2 p-0 p-md-2" md={7} lg={7}>
          <Container
            className={`${styles.ImagePreview} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {post_image ? (
                <>
                  <figure>
                    <Image src={post_image} className={styles.Image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.PostButton} btn`}
                      htmlFor="image-upload"
                    >
                      Change Image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={upload}
                    message="Click or tap to choose an image"
                  />
                </Form.Label>
              )}
              <Form.File
                className="d-none"
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            <div className="d-md-none mt-5">{form}</div>
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default CreatePostForm;
