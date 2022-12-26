import { deleteDoc, doc } from "firebase/firestore";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { AiFillDelete } from "react-icons/ai";

import { UserContext } from "../context/User";
import { signingOut } from "../utils/Authentication";
import { db } from "../utils/Firestore";

const DeleteUser = ({ ...closing }) => {
  const { currentUser } = useContext(UserContext);
  const Navigation = useNavigate();

  const DeletingUserData = async () => {
    const docRef = doc(db, "users", currentUser && currentUser.uid);

    await signingOut();
    deleteDoc(docRef);
    Navigation("/");
  };

  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-50 dark:bg-white dark:bg-opacity-30 z-50 flex justify-center items-center p-4">
      <motion.div
        animate={{ opacity: [0, 1], y: [100, -10, 0] }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-[700px] h-auto bg-background bg-opacity-60 dark:bg-white dark:bg-opacity-5 p-4 rounded-lg backdrop-blur-md border-2 border-white border-opacity-60 dark:border-black dark:border-opacity-05">
        <h1 className="text-xl md:text-2xl text-red-600 mb-4">
          Are you sure You want to delete your account?
        </h1>
        <ul className="list-disc">
          <span className="text-orange-500 font-medium rounded-md inline-block">
            Before Deleting
          </span>
          <li className="ml-8 text-sm opacity-80 mt-2 mb-1">
            You'll be signed Out, but You can sign in with your Email again.
          </li>
          <li className="ml-8 text-sm opacity-80">
            Your data will be removed.
          </li>
        </ul>

        <div className="flex gap-4 justify-center text-sm md:text-base">
          <button
            {...closing}
            className="bg-[#272727] text-white flex gap-2 items-center mt-4 px-5 py-2 rounded-lg">
            Close
          </button>
          <button
            onClick={DeletingUserData}
            className="bg-red-800 text-white flex gap-2 items-center mt-4 px-5 py-2 rounded-lg">
            <AiFillDelete />
            Delete
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DeleteUser;
