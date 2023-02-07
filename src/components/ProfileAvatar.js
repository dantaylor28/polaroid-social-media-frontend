import React from "react";

const ProfileAvatar = ({ src, size = 50, text }) => {
  return (
    <span>
      <img src={src} height={size} width={size} alt="profile-avatar" />
      {text}
    </span>
  );
};

export default ProfileAvatar;
