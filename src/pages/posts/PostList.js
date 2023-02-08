import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import CompressedPost from "./CompressedPost";
import Asset from "../../components/Asset";
import styles from "../../styles/PostList.module.css";

function PostList({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] });
  const [postLoaded, setPostLoaded] = useState(false);
  const { pathname } = useLocation();

  const [searchQuery, setSearchQuery] = useState("");

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
        {postLoaded ? (
          <>
            {posts.results.length ? (
              posts.results.map((post) => (
                <CompressedPost key={post.id} {...post} setPosts={setPosts} />
              ))
            ) : (
              <Container>
                <p>Nothing to show :/</p>
              </Container>
            )}
          </>
        ) : (
          <Container>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col className="d-none d-lg-block p-0 p-lg-2" md={3}>
        <i className={`${styles.Icon} fa-solid fa-magnifying-glass`}></i>
        <Form
          className={styles.Search}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            type="text"
            placeholder="Search Posts"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          ></Form.Control>
        </Form>
        <p>My following profiles - desktop</p>
      </Col>
    </Row>
  );
}

export default PostList;
