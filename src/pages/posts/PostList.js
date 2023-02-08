import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function PostList() {
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
