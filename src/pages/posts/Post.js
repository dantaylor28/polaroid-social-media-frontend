import React from "react";
import { Card } from "react-bootstrap";
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
    Post details here
  </Card>
};

export default Post;
