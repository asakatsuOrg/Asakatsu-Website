// Packages
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { userSelector } from "../../redux/User/User-Selector";
import { dropdownAction } from "../../redux/Dropdown/Dropdown-Action";
import { dropdownSelector } from "../../redux/Dropdown/Dropdown-Selector";

// Context
import { ThemeContext } from "../../context/Theme";

// Component
import Button from "../Button";
import Dropdown from "../Dropdown";
import AddIcon from "../AddIcon";
import NavLinks from "./NavLinks"; // This component is for small screens

// Icons
import { AiOutlineMenu } from "react-icons/ai";

// Firebase
import { signingOut } from "../../utils/Authentication";

const Navbar = () => {
  const Navigate = useNavigate();
  const location = useLocation();

  const currentUser = useSelector(userSelector);
  const dispatch = useDispatch();
  const isOpen = useSelector(dropdownSelector);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const { darkMode } = useContext(ThemeContext);

  const goToHomePage = () => Navigate("/");

  // Theme Toggling
  if (darkMode == true) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // The user will have a route for themselves
  const userName = currentUser && currentUser.displayName.split(" ").join("");

  return (
    <div
      className="bg-background dark:bg-white fixed top-0 left-0 w-full h-16 flex justify-between items-center px-4 md:px-8 lg:px-20 z-50"
      style={{ boxShadow: "0 5px 24px rgba(0, 0, 0, .25)" }}>
      {/* Logo as a Text */}
      <h1
        onClick={goToHomePage}
        className="text-xl md:text-2xl font-black cursor-pointer">
        ASAKATSU
      </h1>

      {/* Links */}
      <ul
        className={`flex gap-6 lg:gap-8 items-center ${
          currentUser && "hidden md:flex"
        }`}>
        <Link
          to={"/faq"}
          className={`text-sm md:text-base font-medium ${
            location.pathname == "/faq" ? "text-twitter" : ""
          }`}>
          FAQ
        </Link>
        {currentUser && (
          <>
            <Link
              to={`${userName}/dashboard`}
              className={`font-medium ${
                location.pathname == `/${userName}/dashboard`
                  ? "text-twitter"
                  : ""
              }`}>
              Dashboard
            </Link>
            <Link
              to={`${userName}/goals`}
              className={`font-medium ${
                location.pathname == `/${userName}/goals` ? "text-twitter" : ""
              }`}>
              Goals
            </Link>
          </>
        )}
        {currentUser == null ? (
          <Button path={"/authentication"} buttonType={"normal"}>
            Sign In
          </Button>
        ) : (
          <div
            id="userImage"
            className="relative"
            onClick={() => dispatch(dropdownAction(isOpen))}>
            <img
              className={`w-[38px] rounded-full duration-200 ${
                isOpen == true ? "scale-90" : "scale-100"
              }`}
              src={currentUser.photoURL}
              referrerPolicy="no-referrer"
              alt=""
            />
          </div>
        )}
      </ul>
      {currentUser && (
        <NavLinks
          currentUser={currentUser}
          userName={userName}
          signOut={signingOut}
          open={isNavOpen}
          setOpen={setIsNavOpen}
          location={location.pathname}
        />
      )}
      {currentUser && (
        <AiOutlineMenu
          className="block md:hidden text-2xl"
          onClick={() => setIsNavOpen(!isNavOpen)}
        />
      )}
      {currentUser && isOpen && <Dropdown userName={userName} />}
      {currentUser && <AddIcon userName={userName} setOpen={setIsNavOpen} />}
    </div>
  );
};

export default Navbar;
