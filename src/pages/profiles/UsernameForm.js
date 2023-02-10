import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";

const UsernameForm = () => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});

  const history = useHistory();
  const { id } = useParams();
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  return <div>UsernameForm</div>;
};

export default UsernameForm;
