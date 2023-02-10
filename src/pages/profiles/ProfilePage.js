import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import MostFollowedProfiles from "./MostFollowedProfiles";
import styles from "../../styles/Profile.module.css";

function ProfilePage() {
  const [profileLoaded, setProfileLoaded] = useState(false);
  const currentUser = useCurrentUser();
  const { id } = useParams();
  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;

  useEffect(() => {
    const getData = async () => {
      try {
        const [{ data: pageProfile }] = await Promise.all([
          axiosReq.get(`/profiles/${id}`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id, setProfileData]);

  const profileContent = (
    <>
      <Row className="px-3 text-center">
        <Col lg={4}>
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.profile_image}
          />
          <div className="mt-3">
            <strong>{profile?.owner}</strong>
          </div>
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
