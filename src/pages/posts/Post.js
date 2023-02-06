import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Post = (props) => {
  const {
    id,
    caption,
    category,
    num_of_comments,
    num_of_pins,
    owner,
    pinned_id,
    post_image,
    profile_id,
    profile_image,
    title,
    updated_at,
    uploaded_at,
  } = props;

  const currentUser = useCurrentUser()
  const is_post_owner = currentUser?.username === owner

  return <Card>
    <Card.Body>
      <Link to={`/profiles/${profile_id}`}>
        profile image pic here
        {owner}
      </Link>
      <div>{updated_at}</div>
    </Card.Body>
  </Card>
};

export default Post;
