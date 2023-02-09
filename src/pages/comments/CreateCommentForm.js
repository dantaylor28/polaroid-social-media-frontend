import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileAvatar from "../../components/ProfileAvatar";
import styles from "../../styles/CreateEditCommentForm.module.css";

function CreateCommentForm(props) {
  const { post, setPost, setComments, profile_id, profileImage } = props;
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Form>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <ProfileAvatar src={profileImage} size={55} />
          </Link>
          <Form.Control
            className={styles.CommentForm}
            placeholder="Leave a comment.."
            as="textarea"
            rows={2}
            value={text}
            onChange={handleChange}
          />
        </InputGroup>
      </Form.Group>
      <div className={styles.BtnDiv}>
        <Button className={`${styles.Button}`} type="submit">
          Comment
        </Button>
      </div>
    </Form>
  );
}

export default CreateCommentForm;
