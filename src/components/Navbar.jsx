import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../context/User";
import { ThemeContext } from "../context/Theme";
import Button from "./Button";

const Navbar = () => {
  const Navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const { darkMode } = useContext(ThemeContext);
  const goToHomePage = () => Navigate("/");

  if (darkMode == true) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <div
      className="bg-background dark:bg-white fixed top-0 left-0 w-full h-16 flex justify-between items-center px-20 z-50"
      style={{ boxShadow: "0 5px 24px rgba(0, 0, 0, .25)" }}>
      {/* Logo as a Text */}
      <h1 onClick={goToHomePage} className="text-2xl font-black cursor-pointer">
        ASAKATSU
      </h1>
      {/* Links */}
      <ul className="flex gap-8 items-center">
        <Link to={"/faq"} className="font-medium">
          FAQ
        </Link>
        {currentUser == null ? (
          <Button path={"/authentication"} buttonType={"normal"}>
            Sign In
          </Button>
        ) : (
          <div id="userImage" className="relative">
            <img
              className="w-[38px] rounded-full"
              src={currentUser.photoURL}
              referrerPolicy="no-referrer"
              alt=""
            />
          </div>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
