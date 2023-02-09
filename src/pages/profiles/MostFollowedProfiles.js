import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const MostFollowedProfiles = () => {
  const [profileData, setProfileData] = useState({
    mostFollowedProfiles: { results: [] },
  });
  const { mostFollowedProfiles } = profileData;
  const currentUser = useCurrentUser();

  return (
    <Container>
      <p>Check out the most followed profiles!</p>
    </Container>
  );
};

export default MostFollowedProfiles;
