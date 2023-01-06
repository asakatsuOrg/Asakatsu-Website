import { useContext } from "react";

import { ThemeContext } from "../context/Theme";

const PrivateAndDarkMode = ({ selectChangeHandler, checked }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className=" w-full max-w-[600px]">
      <label
        htmlFor="private"
        className="flex items-center justify-between mt-8 border-b-2 border-white border-opacity-50 dark:border-black dark:border-opacity-25 px-4 lg:px-8 py-3">
        Private
        <label className="toggler-wrapper style-12">
          <input
            type="checkbox"
            id="private"
            onClick={selectChangeHandler}
            defaultChecked={checked}
          />
          <div className="toggler-slider">
            <div className="toggler-knob"></div>
          </div>
        </label>
      </label>

      <label
        htmlFor="darkMode"
        className="flex items-center justify-between mt-4 border-b-2 border-white border-opacity-50 dark:border-black dark:border-opacity-25 px-4 lg:px-8 py-3">
        Light Mode
        <label className="toggler-wrapper style-12">
          <input
            type="checkbox"
            id="darkMode"
            onClick={() => setDarkMode(!darkMode)}
            defaultChecked={darkMode}
          />
          <div className="toggler-slider">
            <div className="toggler-knob"></div>
          </div>
        </label>
      </label>
    </div>
  );
};

export default PrivateAndDarkMode;
