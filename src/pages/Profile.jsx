import { useContext, useEffect, useState } from "react";

// Firebase
import { onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/Firestore";

// Context
import { UserContext } from "../context/User";

// Icons
import { FaTwitter, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

// Components
import SocialMediaInputs from "../components/SocialMediaInputs";
import PrivateAndDarkMode from "../components/PrivateAndDarkMode";

const Profile = () => {
  const { currentUser } = useContext(UserContext);
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
      twitter: e.target.value,
    });
  };

  const githubChangeHandler = (e) => {
    updateDoc(docRef, {
      github: e.target.value,
    });
  };

  const youtubeChangeHandler = (e) => {
    updateDoc(docRef, {
      youtube: e.target.value,
    });
  };

  const linkedinChangeHandler = (e) => {
    updateDoc(docRef, {
      linkedin: e.target.value,
    });
  };

  return (
    <div className="mt-[100px] flex flex-col items-center p-4">
      {/* User's Info --- Image, Name, Email */}
      <div className="flex flex-col items-center">
        <img className="rounded-full" src={userData.photoURL} alt="" />
        <h2 className="text-2xl font-medium">{userData.displayName}</h2>
        <small className="text-white text-opacity-70">{userData.email}</small>
      </div>

      {/* Checkbox Toggling for Private and DarkMode */}
      <PrivateAndDarkMode
        selectChangeHandler={selectChangeHandler} // For Private's checkbox
        checked={userData.private} // For Private's checkbox
      />

      {/* Social Media --- Twitter, Github, YouTube, LinkedIn */}
      <div className="w-full max-w-[600px] mt-8 flex flex-col gap-4">
        <SocialMediaInputs
          icon={<FaTwitter />}
          socialMedia="twitter"
          SocialMedia="Twitter"
          socialMediaValue={userData.twitter}
          changeHandler={twitterChangeHandler}
        />

        <SocialMediaInputs
          icon={<FaGithub />}
          socialMedia="github"
          SocialMedia="Github"
          socialMediaValue={userData.github}
          changeHandler={githubChangeHandler}
        />

        <SocialMediaInputs
          icon={<FaYoutube />}
          socialMedia="youtube"
          SocialMedia="Youtube"
          socialMediaValue={userData.youtube}
          changeHandler={youtubeChangeHandler}
        />

        <SocialMediaInputs
          icon={<FaLinkedin />}
          socialMedia="linkedin"
          SocialMedia="Linkedin"
          socialMediaValue={userData.linkedin}
          changeHandler={linkedinChangeHandler}
        />
      </div>
    </div>
  );
};

export default Profile;
