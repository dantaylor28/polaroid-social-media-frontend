import React from "react";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileAvatar from "../../components/ProfileAvatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Post.module.css";

const Post = (props) => {
  const {
    id,
    caption,
    category,
    num_of_comments,
    num_of_pins,
    owner,
    pinned_id,
    post_image,
    profile_id,
    profile_image,
    title,
    updated_at,
    uploaded_at,
  } = props;

  const currentUser = useCurrentUser();
  const is_post_owner = currentUser?.username === owner;

  return (
    <Card>
      <Card.Body>
        <Media>
          <Link className={styles.Owner} to={`/profiles/${profile_id}`}>
            <ProfileAvatar src={profile_image} size={55} />
            {owner}
          </Link>
        </Media>
        <div className={`${styles.TimeStamp} text-muted`}>{updated_at}</div>
      </Card.Body>
      <Card.Body>
        {title && <Card.Title className={styles.Title}>{title}</Card.Title>}
        {caption && <Card.Text>{caption}</Card.Text>}
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={post_image} alt={title} />
      </Link>
      <Card.Body>
        <div className={styles.StatsDiv}>
          <span className={`${styles.PinSpan}`}>
            <i class="fa-solid fa-map-pin"></i>
            {num_of_pins}
          </span>
          <span className={styles.CommentSpan}>
            <i class="fa-solid fa-comments"></i>
            {num_of_comments}
          </span>
        </div>
        <div>
          { pinned_id ? (
            <span onClick={() => {}}>
              <i class="fa-solid fa-heart"></i>
            </span>
          ) : currentUser ? (
            <span onClick={() => {}}>
              <i class="fa-regular fa-heart"></i>
            </span>
          ) : (
            <OverlayTrigger placement="top" overlay={<Tooltip>Log in to like posts</Tooltip>}>
              <i class="fa-regular fa-heart"></i>
            </OverlayTrigger>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
