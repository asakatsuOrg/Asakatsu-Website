import React from "react";
import { motion } from "framer-motion";

const IsSaved = () => {
  return (
    <motion.div
      animate={{ opacity: [0, 1], x: [100, -20, 0] }}
      transition={{ duration: 0.3 }}
      className={`fixed left-4 bottom-4 md:right-4 md:top-0 flex items-center gap-2`}>
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
