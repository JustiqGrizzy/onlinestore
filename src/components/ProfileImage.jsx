import React from "react";

const ProfileImage = ({ name }) => {
  //   const nameParts = name.split(" ");
  const username = name[0] ? name[0][0] : "";
  //   const lastNameInitial = nameParts[1] ? nameParts[1][0] : "";

  return (
    <span className="user-profile-image">
      {username}
      {/* {lastNameInitial} */}
    </span>
  );
};
export default ProfileImage;
