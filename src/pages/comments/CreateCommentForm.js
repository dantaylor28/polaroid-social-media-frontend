import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileAvatar from "../../components/ProfileAvatar";

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
      <button type="submit">Post Comment</button>
    </Form>
  );
}

export default CreateCommentForm;
