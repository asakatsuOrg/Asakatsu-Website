// Packages
import {
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

// Redux
import { userSelector } from "../redux/User/User-Selector";

// Context & Utils
import { db } from "../utils/Firestore";

// Component
import EachUserDashboard from "../components/EachUserDashboard";

const Dashboard = () => {
  const [usersData, setUsersData] = useState([]);
  const currentUser = useSelector(userSelector);

  const colRef = collection(db, "users");
  const q = query(colRef, where("private", "==", false), orderBy("createdAt"));

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setUsersData(snapshot.docs.map((data) => ({ ...data.data() })));
    });
  }, []);

  return (
    <div className="mt-24 w-full flex justify-center p-4">
      <motion.div
        id="scrollBar"
        layout
        className="bg-[#2F2F2F] dark:bg-[#f2f2f2] w-full max-w-[700px] h-[75vh] flex flex-col rounded-lg overflow-x-hidden">
        <AnimatePresence>
          {usersData.map((userData) => {
            return (
              <EachUserDashboard
                key={userData.uid}
                userData={userData}
                currentUser={currentUser}
              />
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Dashboard;
