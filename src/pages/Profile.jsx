import { useContext, useEffect, useState } from "react";

import { onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/Firestore";

import { UserContext } from "../context/User";
import { ThemeContext } from "../context/Theme";

import { FaTwitter } from "react-icons/fa";

const Profile = () => {
  const { currentUser } = useContext(UserContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const docRef = doc(db, "users", currentUser.uid);

  const [userData, setUserData] = useState({});

  useEffect(() => {
    onSnapshot(docRef, (snapshot) => {
      setUserData(snapshot.data());
    });
  }, []);

  const selectChangeHandler = () => {
    updateDoc(docRef, {
      private: !userData.private,
    });
  };

  const twitterChangeHandler = (e) => {
    updateDoc(docRef, {
      twitter: e.target.value.length == 0 ? null : e.target.value,
    });
  };

  return (
    <div className="mt-[100px] flex flex-col items-center p-4">
      <div className="flex flex-col items-center">
        <img className="rounded-full" src={userData.photoURL} alt="" />
        <h2 className="text-2xl font-medium">{userData.displayName}</h2>
        <small className="text-white text-opacity-70">{userData.email}</small>
      </div>
      <form action="" className="w-full flex flex-col items-center">
        <label
          htmlFor="private"
          className="flex items-center justify-between mt-8 w-full max-w-[600px] border-b-2 border-white border-opacity-50 px-8 py-3">
          Private
          <label className="toggler-wrapper style-12">
            <input
              type="checkbox"
              id="private"
              onClick={selectChangeHandler}
              defaultChecked={userData.private}
            />
            <div className="toggler-slider">
              <div className="toggler-knob"></div>
            </div>
          </label>
        </label>

        <label
          htmlFor="darkMode"
          className="flex items-center justify-between mt-4 w-full max-w-[600px] border-b-2 border-white border-opacity-50 px-8 py-3">
          Dark Mode
          <label className="toggler-wrapper style-12">
            <input
              type="checkbox"
              id="darkMode"
              onClick={() => setDarkMode(!darkMode)}
              defaultChecked={darkMode}
            />
            <div className="toggler-slider">
              <div className="toggler-knob"></div>
            </div>
          </label>
        </label>

        <label
          htmlFor="twitter"
          className="w-full max-w-[600px] flex gap-4 items-center mt-8">
          <FaTwitter />
          <input
            type="text"
            placeholder="Twitter Handle"
            name="twitter"
            value={userData.twitter}
            className="py-2 px-4 w-full bg-transparent border-2 border-white rounded-md outline-none"
            onChange={twitterChangeHandler}
            id="twitter"
          />
        </label>
        <input type="text" placeholder="github Handle" name="github" />
        <input type="text" placeholder="youtube Handle" name="youtube" />
        <input type="text" placeholder="linkedin Handle" name="linkedin" />
      </form>
    </div>
  );
};

export default Profile;
