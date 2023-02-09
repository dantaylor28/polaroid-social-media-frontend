import React from "react";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import ProfileAvatar from "../../components/ProfileAvatar";
import { Button } from "react-bootstrap";

const Profile = (props) => {
  const { mobile, profile, avatarSize = 55 } = props;
  const { id, following_id, profile_image, owner } = profile;
  const currentUser = useCurrentUser();
  const is_profile_owner = currentUser?.username === owner;

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <ProfileAvatar src={profile_image} size={avatarSize} />
          <span>{owner}</span>
        </Link>
      </div>
      <div className={`text-right ${!mobile && "ml-auto"}`}>
        {!mobile &&
          currentUser &&
          !is_profile_owner &&
          (following_id ? (
            <Button onClick={() => {}}>unfollow</Button>
          ) : (
            <Button onClick={() => {}}>follow</Button>
          ))}
      </div>
    </div>
  );
};

export default Profile;
