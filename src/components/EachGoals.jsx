import { motion } from "framer-motion";

const EachGoals = ({ goal, deletingGoal }) => {
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
        <h2 className="text-base md:text-lg">Steps to achieve the goal</h2>
        <li className="ml-6 text-sm md:text-base">{goal.step1}</li>
        <li className="ml-6 text-sm md:text-base">{goal.step2}</li>
      </ul>
      <div className="relative p-4 text-sm md:text-base">
        <div className="w-[5px] h-[20px] group-hover:w-[7px] bg-orange-600 rounded-r-lg absolute top-1/2 left-0 -translate-y-1/2 duration-200"></div>
        {goal.achievement}
      </div>
      <button
        value={goal.id}
        onClick={deletingGoal}
        className="text-sm md:text-base text-white mx-4 mb-4 bg-green-600 px-6 py-2 rounded-md">
        Done
      </button>
    </motion.div>
  );
};

export default EachGoals;
