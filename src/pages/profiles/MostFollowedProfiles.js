import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const MostFollowedProfiles = () => {
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
    <Container>
      <p>Check out the most followed profiles!</p>
    </Container>
  );
};

export default MostFollowedProfiles;
