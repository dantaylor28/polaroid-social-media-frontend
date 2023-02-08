import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

function PostList({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [postLoaded, setPostLoaded] = useState(false);
  const [pathname] = useLocation();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}`);
        setPosts(data);
        setPostLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    setPostLoaded(false);
    getPosts();
  }, [filter, pathname]);

  return (
    <Row>
      <Col className="d-none d-lg-block p-0 p-lg-2" md={3}>
        <p>Most followed profiles - desktop</p>
      </Col>
      <Col className="py-2 p-0 p-lg-2" lg={6}>
        <p>My following profiles - mobile</p>
        <Container>Post component here</Container>
      </Col>
      <Col className="d-none d-lg-block p-0 p-lg-2" md={3}>
        <p>My following profiles - desktop</p>
      </Col>
    </Row>
  );
}

export default PostList;
