import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { useContext, useState } from "react";

import { UserContext } from "../context/User";
import { db } from "../utils/Firestore";

const AddingGoals = () => {
  const { currentUser } = useContext(UserContext);
  const Navigate = useNavigate();
  const [isAdded, setIsAdded] = useState(false);

  const userName = currentUser && currentUser.displayName.split(" ").join("");

  const addingGoals = async (e) => {
    e.preventDefault();

    const colRef = collection(db, `users/${currentUser.uid}/Goals`);

    await addDoc(colRef, {
      goal: e.target.goal.value,
      step1: e.target.step1.value,
      step2: e.target.step2.value,
      targetDate: e.target.date.value,
      achievement: e.target.achieve.value,
      id: currentUser.uid,
    })
      .then(() => {
        setIsAdded(true);
      })
      .then(() => {
        setTimeout(() => {
          setIsAdded(false);
        }, 5000);
      })
      .then(() => {
        setTimeout(() => {
          Navigate(`/${userName}/goals`);
        }, 5000);
      });
  };

  return (
    <div className="mt-[100px] flex flex-col items-center p-4 overflow-x-hidden">
      {isAdded && (
        <>
          <div className="fixed top-0 left-0 w-full h-screen bg-[#0D180E] -z-50"></div>
          <motion.div
            animate={{ x: [100, -10, 0] }}
            className="fixed bottom-4 right-0 bg-primary px-8 py-2 rounded-l-xl">
            Good Luck, I'll take you to Goals Page in 5s...
          </motion.div>
        </>
      )}

      <h1 className="text-center text-4xl font-bold">
        Set your goal and break it into <br /> smaller chunks.
      </h1>

      <form
        onSubmit={addingGoals}
        className="w-full max-w-[677px] mt-8 flex flex-col gap-5 font-medium">
        <input
          type="text"
          placeholder="What is your goal?"
          className="w-full outline-none bg-transparent px-3 py-2 border-b-[1px]"
          name="goal"
          required
        />
        <div className="grid grid-cols-3 gap-4 px-4">
          <label htmlFor="">Steps to achieve the goal</label>
          <div className="col-span-2">
            <input
              type="text"
              placeholder="Step 1"
              className="w-full outline-none bg-transparent px-3 py-2 border-b-[1px]"
              name="step1"
              required
            />
            <input
              type="text"
              placeholder="Step 2"
              className="w-full outline-none bg-transparent px-3 py-2 border-b-[1px] mt-2"
              name="step2"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 items-center px-4">
          <label htmlFor="">Do you have a target date for this?</label>
          <div className="col-span-2">
            <input
              name="date"
              type="date"
              className="w-full outline-none bg-transparent px-3 py-2 border-b-[1px]"
              required
            />
          </div>
        </div>

        <textarea
          name="achieve"
          id=""
          rows="5"
          placeholder="What will you achieve by completing this goal?"
          required
          className="w-full outline-none bg-transparent px-3 py-2 border-b-[1px]"></textarea>

        <button className="text-center py-2 px-6 bg-gradient-to-tl from-secondary to-primary rounded-lg font-medium active:scale-90 duration-200">
          add
        </button>
      </form>
    </div>
  );
};

export default AddingGoals;
