// Packages
import { useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  doc,
  deleteDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

// Redux
import { userSelector } from "../redux/User/User-Selector";

// Utils & Context
import { db } from "../utils/Firestore";
import EachGoals from "../components/EachGoals";

const Goals = () => {
  const [goals, setGoals] = useState([]);

  const currentUser = useSelector(userSelector);

  const colRef = collection(db, `users/${currentUser.uid}/Goals`);
  const q = query(colRef, orderBy("targetDate"));

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

  return (
    <motion.div
      layout
      className="mt-[80px] px-4 md:px-8 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {goals.map((goal) => {
        return (
          <EachGoals key={goal.id} goal={goal} deletingGoal={deletingGoal} />
        );
      })}
      {goals.length == 0 && (
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl lg:text-8xl font-black animate-pulse">
          No Goals
        </h1>
      )}
    </motion.div>
  );
};

export default Goals;
