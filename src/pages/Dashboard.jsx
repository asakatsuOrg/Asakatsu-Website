import { onSnapshot, collection, query, where } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { db } from "../utils/Firestore";
import { UserContext } from "../context/User";
import EachUserDashboard from "../components/EachUserDashboard";

const Dashboard = () => {
  const [usersData, setUsersData] = useState([]);
  const { currentUser } = useContext(UserContext);
  const colRef = collection(db, "users");
  const q = query(colRef, where("private", "==", false));

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setUsersData(snapshot.docs.map((data) => ({ ...data.data() })));
    });
  }, []);

  return (
    <div className="mt-24 w-full flex justify-center p-4">
      <motion.div
        layout
        className="bg-[#2F2F2F] dark:bg-[#f2f2f2] w-full max-w-[700px] h-[400px] flex flex-col rounded-lg overflow-hidden">
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
