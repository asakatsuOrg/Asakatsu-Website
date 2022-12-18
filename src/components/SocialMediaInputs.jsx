import React from "react";

const SocialMediaInputs = ({
  icon,
  socialMedia,
  SocialMedia,
  socialMediaValue,
  changeHandler,
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
        className={`py-2 px-4 w-full bg-transparent border-2 border-white border-opacity-60 rounded-md outline-none focus:border-white duration-200`}
        onChange={changeHandler}
        id={socialMedia}
      />
    </label>
  );
};

export default SocialMediaInputs;
