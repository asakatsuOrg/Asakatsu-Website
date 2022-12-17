import { useContext } from "react";

import { UserContext } from "../context/User";

const Profile = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="mt-[100px] flex flex-col items-center">
      <div className="flex flex-col items-center">
        <img className="rounded-full" src={currentUser.photoURL} alt="" />
        <h2 className="text-2xl font-medium">{currentUser.displayName}</h2>
        <small className="text-white text-opacity-70">
          {currentUser.email}
        </small>
      </div>
      <form action=""></form>
    </div>
  );
};

export default Profile;
