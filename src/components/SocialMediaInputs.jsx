import React from "react";

const SocialMediaInputs = ({
  icon, // Social Media logos
  socialMedia, // name, htmlFor, id
  SocialMedia, // placeholder
  socialMediaValue, // value
  changeHandler, // onClick
}) => {
  return (
    <label
      htmlFor={socialMedia}
      className="w-full max-w-[600px] flex gap-4 items-center">
      <span className="text-2xl">{icon}</span>
      <input
        type="text"
        placeholder={`${SocialMedia} Handle`}
        name={socialMedia}
        value={socialMediaValue}
        className={`text-sm md:text-base py-2 px-4 w-full bg-transparent border-2 border-white border-opacity-60 dark:border-black dark:border-opacity-30 rounded-md outline-none focus:border-white dark:focus:border-black duration-200`}
        onChange={changeHandler}
        id={socialMedia}
      />
    </label>
  );
};

export default SocialMediaInputs;
