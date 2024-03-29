import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-16 bg-[#1C1C1C] dark:bg-[#f2f2f2] absolute bottom-0 left-0 flex justify-center items-end text-white dark:text-black text-opacity-60 py-2">
      Asakatsu | Developed by Asakatsu Team &#169; {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
