import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const MostActiveProfiles = () => {
  const [profileData, setProfileData] = useState({
    MostActiveProfiles: { results: [] },
  });
  const { MostActiveProfiles } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get("/profiles/?ordering=num_of_posts");
        setProfileData((prevState) => ({
          ...prevState,
          MostActiveProfiles: data,
        }));
      } catch (error) {
        console.log(error);
      }
    };
    handleMount();
  }, [currentUser]);
  
  return <div>MostActiveProfiles</div>;
};

export default MostActiveProfiles;
