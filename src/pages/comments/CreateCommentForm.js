import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileAvatar from "../../components/ProfileAvatar";
import btnStyles from "../../styles/Button.module.css";

function CreateCommentForm(props) {
  const { post, setPost, setComments, profile_id, profileImage } = props;

  return (
    <Form>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <ProfileAvatar src={profileImage} size={55} />
          </Link>
          <Form.Control
            placeholder="comment here"
            as="textarea"
            rows={3}
            onChange={() => {}}
          />
        </InputGroup>
      </Form.Group>
      <Button className={`${btnStyles.PostButton}`} type="submit">Post Comment</Button>
    </Form>
  );
}

export default CreateCommentForm;
