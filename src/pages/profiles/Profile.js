import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Profile = (props) => {
  const { mobile, profile, avatarSize = 55 } = props;
  const { id, following_id, profile_image, owner } = profile;
  const currentUser = useCurrentUser()
  const is_profile_owner = currentUser?.username === owner
  return <div>Profile</div>;
};

export default Profile;
