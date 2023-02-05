import React, { useState } from "react";
import { useParams } from "react-router";

function PostDetail() {
  const { id } = useParams;
  const [post, setPost] = useState({ results: [] });

  return <div>PostDetail page to display a specified user post!</div>;
}

export default PostDetail;
