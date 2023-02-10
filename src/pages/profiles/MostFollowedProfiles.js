import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Asset";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Profile from "./Profile";
import styles from "../../styles/Profile.module.css";

const MostFollowedProfiles = ({ mobile }) => {
  const [profileData, setProfileData] = useState({
    mostFollowedProfiles: { results: [] },
  });
  const { mostFollowedProfiles } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-num_of_followers"
        );
        setProfileData((prevState) => ({
          ...prevState,
          mostFollowedProfiles: data,
        }));
      } catch (error) {
        console.log(error);
      }
    };
    handleMount();
  }, [currentUser]);

  return (
    <Container
      className={`${styles.Container} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {mostFollowedProfiles.results.length ? (
        <>
          <p
            className={`${styles.Heading} ${
              mobile && "d-none d-lg-block p-0 p-lg-2"
            }`}
          >
            Popular Profiles
          </p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {mostFollowedProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            mostFollowedProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default MostFollowedProfiles;
