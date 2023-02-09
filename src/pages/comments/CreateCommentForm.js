import React from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";

function CreateCommentForm(props) {
  const { post, setPost, setComments, profile_id, profileImage } = props;
  return (
    <Form>
      <Form.Group>
        <InputGroup>
          <FormControl
            placeholder="comment here"
            as="text-area"
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
