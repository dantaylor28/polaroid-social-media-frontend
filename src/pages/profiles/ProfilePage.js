import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import MostFollowedProfiles from "./MostFollowedProfiles";

function ProfilePage() {
  const [profileLoaded, setProfileLoaded] = useState(false);
  const currentUser = useCurrentUser()

  useEffect(() => {
    setProfileLoaded(true)
  }, [])

  const profileContent = (
    <>
      <Row className="px-3 text-center">
        <Col lg={4} className="text-lg-left">
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
      <Col lg={8}>
        <MostFollowedProfiles mobile />
        <Container>
          {profileLoaded ? <>{profileContent}</> : <Asset spinner />}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <MostFollowedProfiles />
      </Col>
    </Row>
  );
}

export default ProfilePage;
