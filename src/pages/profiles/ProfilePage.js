import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MostFollowedProfiles from "./MostFollowedProfiles";

function ProfilePage() {
  const profileContent = (
    <>
      <Row>
        <Col lg={4}>
            <p>Image here</p>
            <p>username here</p>
        </Col>
        <Col lg={8}>
            <p>User stats here</p>
            <p>follow button here</p>
        </Col>
        <Col className="p-3 text-center">bio here</Col>
      </Row>
    </>
  );

  return (
    <Row>
      <Col lg={9}>
        <MostFollowedProfiles mobile />
        <Container>
            {profileContent}
        </Container>
      </Col>
      <Col lg={3} className="d-none d-lg-block p-0 p-lg-2">
        <MostFollowedProfiles />
      </Col>
    </Row>
  );
}

export default ProfilePage;
