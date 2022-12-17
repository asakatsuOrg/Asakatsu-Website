import { useContext, useEffect, useState } from "react";

import { onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/Firestore";

import { UserContext } from "../context/User";

const Profile = () => {
  const { currentUser } = useContext(UserContext);
  const docRef = doc(db, "users", currentUser.uid);

  const [userData, setUserData] = useState({});

  useEffect(() => {
    onSnapshot(docRef, (snapshot) => {
      setUserData(snapshot.data());
    });
  }, []);

  console.log(userData);

  const selectChangeHandler = (e) => {
    console.dir(e);
    updateDoc(docRef, {
      private: !userData.private,
    });
  };

  return (
    <div className="mt-[100px] flex flex-col items-center">
      <div className="flex flex-col items-center">
        <img className="rounded-full" src={userData.photoURL} alt="" />
        <h2 className="text-2xl font-medium">{userData.displayName}</h2>
        <small className="text-white text-opacity-70">{userData.email}</small>
      </div>
      <form action="" className="text-black">
        <div>
          <label htmlFor="private">Private</label>
          <input
            type="checkbox"
            id="private"
            onClick={selectChangeHandler}
            defaultChecked={userData.private}
          />
        </div>
      </form>
    </div>
  );
};

export default Profile;
