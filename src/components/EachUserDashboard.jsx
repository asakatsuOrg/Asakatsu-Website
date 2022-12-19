import { motion } from "framer-motion";

import { FaTwitter, FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";

const EachUserDashboard = ({ userData, currentUser }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      layout="position"
      key={userData.uid}
      className={`grid grid-cols-3 items-center border-b-2 py-3 px-4 border-white border-opacity-40 dark:border-black dark:border-opacity-25 ${
        currentUser.uid == userData.uid
          ? "border-twitter border-opacity-100"
          : ""
      }`}>
      <img
        className="w-[40px] rounded-full"
        src={userData.photoURL}
        referrerPolicy="no-referrer"
        alt=""
      />

      <p className="text-center">{userData.displayName}</p>

      <div className="flex justify-end gap-4 text-xl">
        {userData.twitter.length != 0 && (
          <a
            className="text-twitter"
            href={`https://twitter.com/${userData.twitter}`}
            target={"_blank"}
            rel="noreferrer">
            <FaTwitter />
          </a>
        )}
        {userData.github.length != 0 && (
          <a
            href={`https://github.com/${userData.github}`}
            target={"_blank"}
            rel="noreferrer">
            <FaGithub />
          </a>
        )}
        {userData.youtube.length != 0 && (
          <a
            className="text-youtube"
            href={`https://www.youtube.com/@${userData.youtube}`}
            target={"_blank"}
            rel="noreferrer">
            <FaYoutube />
          </a>
        )}
        {userData.linkedin.length != 0 && (
          <a
            className="text-linkedin"
            href={`https://www.linkedin.com/in/${userData.linkedin}/`}
            target={"_blank"}
            rel="noreferrer">
            <FaLinkedin />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default EachUserDashboard;
