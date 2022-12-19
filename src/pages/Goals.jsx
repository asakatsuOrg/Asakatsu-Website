import { useContext, useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  doc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { motion } from "framer-motion";

import { db } from "../utils/Firestore";
import { UserContext } from "../context/User";

const Goals = () => {
  const { currentUser } = useContext(UserContext);
  const colRef = collection(db, `users/${currentUser.uid}/Goals`);
  const q = query(colRef, orderBy("targetDate"));
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setGoals(
        snapshot.docs.map((goals) => ({
          ...goals.data(),
          id: goals.id,
        }))
      );
    });
  }, []);

  const deletingGoal = async (e) => {
    const { value } = e.target;
    const docRef = doc(db, `users/${currentUser.uid}/Goals/${value}`);

    deleteDoc(docRef);
  };

  console.log(goals);

  return (
    <motion.div
      layout
      className="mt-[80px] px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {goals.map((goal) => {
        return (
          <motion.div
            layout="position"
            key={goal.id}
            className="bg-[#2F2F2F] dark:bg-[#f2f2f2] rounded-lg font-medium group">
            <div className="relative flex items-center justify-between p-4">
              <div className="w-[5px] group-hover:w-[7px] h-[20px] bg-red-500 rounded-r-lg absolute top-1/2 left-0 -translate-y-1/2 duration-200"></div>
              <h2 className="text-2xl">{goal.goal}</h2>
              <small className="text-white text-opacity-60 dark:text-black dark:text-opacity-50">
                {goal.targetDate}
              </small>
            </div>
            <ul className="relative list-disc p-4">
              <div className="w-[5px] h-[20px] group-hover:w-[7px] bg-green-500 rounded-r-lg absolute top-1/2 left-0 -translate-y-1/2 duration-200"></div>
              <h2 className="text-lg">Steps to achieve the goal</h2>
              <li className="ml-6">{goal.step1}</li>
              <li className="ml-6">{goal.step2}</li>
            </ul>
            <p className="relative p-4">
              <div className="w-[5px] h-[20px] group-hover:w-[7px] bg-orange-600 rounded-r-lg absolute top-1/2 left-0 -translate-y-1/2 duration-200"></div>
              {goal.achievement}
            </p>
            <button
              value={goal.id}
              onClick={deletingGoal}
              className="text-white mx-4 mb-4 bg-green-600 px-6 py-2 rounded-md">
              Done
            </button>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Goals;
