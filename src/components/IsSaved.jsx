import React from "react";
import { motion } from "framer-motion";

const IsSaved = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1], x: [100, -20, 0] }}
      transition={{ duration: 0.3 }}
      className={`fixed right-0 flex items-center gap-2 z-50 bg-background bg-opacity-50 dark:bg-white dark:bg-opacity-50 backdrop-blur-sm py-2 px-4 rounded-l-full`}>
      Saved!
      <img
        className="w-[20px]"
        src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
        alt=""
      />
    </motion.div>
  );
};

export default IsSaved;
