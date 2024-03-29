import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

// Redux
import { userSelector } from "../redux/User/User-Selector";

// Firebase
import { onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/Firestore";

// Icons
import { FaTwitter, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

// Components
import SocialMediaInputs from "../components/SocialMediaInputs";
import PrivateAndDarkMode from "../components/PrivateAndDarkMode";
import DeleteUser from "../components/DeleteUser";

const Profile = () => {
  const currentUser = useSelector(userSelector);
  const [userData, setUserData] = useState({});
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const docRef = doc(db, "users", currentUser.uid);

  useEffect(() => {
    onSnapshot(docRef, (snapshot) => {
      setUserData(snapshot.data());
    });
  }, []);

  const selectChangeHandler = () => {
    updateDoc(docRef, {
      private: !userData.private,
    }).then(() => toast("file saved!"));
  };

  const twitterChangeHandler = (e) => {
    updateDoc(docRef, {
      twitter: e.target.value,
    }).then(() => toast("file saved!"));
  };

  const githubChangeHandler = (e) => {
    updateDoc(docRef, {
      github: e.target.value,
    }).then(() => toast("file saved!"));
  };

  const youtubeChangeHandler = (e) => {
    updateDoc(docRef, {
      youtube: e.target.value,
    }).then(() => toast("file saved!"));
  };

  const linkedinChangeHandler = (e) => {
    updateDoc(docRef, {
      linkedin: e.target.value,
    }).then(() => toast("file saved!"));
  };

  return (
    <div className="mt-[100px] pb-[70px] md:mb-0 flex flex-col items-center p-4">
      {/* User's Info --- Image, Name, Email */}
      <div className="flex flex-col items-center">
        <img
          className="rounded-full"
          src={userData && userData.photoURL}
          alt=""
        />
        <h2 className="text-2xl font-medium">
          {userData && userData.displayName}
        </h2>
        <small className="text-white text-opacity-70 dark:text-black">
          {userData && userData.email}
        </small>
      </div>

      {/* Checkbox Toggling for Private and DarkMode */}
      <PrivateAndDarkMode
        selectChangeHandler={selectChangeHandler} // For Private's checkbox
        checked={userData && userData.private} // For Private's checkbox
      />

      {/* Social Media --- Twitter, Github, YouTube, LinkedIn */}
      <div className="w-full max-w-[600px] mt-8 flex flex-col gap-4">
        <SocialMediaInputs
          icon={<FaTwitter />}
          socialMedia="twitter"
          SocialMedia="Twitter"
          socialMediaValue={userData && userData.twitter}
          changeHandler={twitterChangeHandler}
        />

        <SocialMediaInputs
          icon={<FaGithub />}
          socialMedia="github"
          SocialMedia="Github"
          socialMediaValue={userData && userData.github}
          changeHandler={githubChangeHandler}
        />

        <SocialMediaInputs
          icon={<FaYoutube />}
          socialMedia="youtube"
          SocialMedia="Youtube"
          socialMediaValue={userData && userData.youtube}
          changeHandler={youtubeChangeHandler}
        />

        <SocialMediaInputs
          icon={<FaLinkedin />}
          socialMedia="linkedin"
          SocialMedia="Linkedin"
          socialMediaValue={userData && userData.linkedin}
          changeHandler={linkedinChangeHandler}
        />
      </div>

      <Toaster
        position="top right"
        toastOptions={{
          className: "",
          style: {
            border: "1px solid green",
            color: "green",
          },
        }}
        containerStyle={{
          top: 100,
        }}
      />

      <button
        onClick={() => setIsDeleteOpen(true)}
        className="bg-red-800 text-white flex gap-2 items-center mt-8 px-5 py-2 rounded-lg">
        <AiFillDelete />
        Delete
      </button>

      {isDeleteOpen && <DeleteUser onClick={() => setIsDeleteOpen(false)} />}
    </div>
  );
};

export default Profile;
