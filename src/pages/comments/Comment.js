import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileAvatar from "../../components/ProfileAvatar";
import styles from "../../styles/Comment.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { EditDeleteDropdown } from "../../components/EditDeleteDropdown";

const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    text,
    timestamp,
    owner,
    id,
    handleDelete,
    handleEdit,
  } = props;

  const currentUser = useCurrentUser();
  const is_comment_owner = currentUser?.username === owner;

  return (
    <div className={styles.Comment}>
      <Media className="align-items-center justify-content-between">
        <Link to={`/profiles/${profile_id}`}>
          <ProfileAvatar src={profile_image} size={55} />
        </Link>
        <Media.Body>
          <Link className={styles.OwnerLink} to={`/profiles/${profile_id}`}>
            <span className={styles.Owner}>{owner}</span>
          </Link>
          <span className={`${styles.Timestamp}`}>{timestamp}</span>
          <p className="mt-1">{text}</p>
        </Media.Body>
        {is_comment_owner && (
          <EditDeleteDropdown handleEdit={() => {}} handleDelete={() => {}} />
        )}
      </Media>
    </div>
  );
};

export default Comment;
