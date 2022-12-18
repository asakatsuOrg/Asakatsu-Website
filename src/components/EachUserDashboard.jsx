import { motion } from "framer-motion";

const EachUserDashboard = ({ userData, currentUser }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      layout="position"
      key={userData.uid}
      className={`grid grid-cols-3 items-center border-b-2 py-3 px-4 border-white border-opacity-40 ${
        currentUser.displayName == userData.displayName
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
      <div></div>
    </motion.div>
  );
};

export default EachUserDashboard;
