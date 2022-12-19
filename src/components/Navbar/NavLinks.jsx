import { Link, useNavigate } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";

const NavLinks = ({ currentUser, userName, signOut, open, setOpen }) => {
  const Navigate = useNavigate();
  const signingOut = () => {
    signOut();
    Navigate("/");
    setOpen(false);
  };

  return (
    <div
      className={`translate-x-full fixed top-0 right-0 w-full sm:w-3/4 h-screen flex flex-col items-center gap-4 bg-background dark:bg-white py-4 md:hidden ${
        open && "translate-x-0"
      } duration-300`}>
      <div id="userImage" className="relative">
        <img
          className={`w-[60px] rounded-full duration-200`}
          src={currentUser.photoURL}
          referrerPolicy="no-referrer"
          alt=""
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-medium leading-3">
          {currentUser.displayName}
        </h2>
        <small className="opacity-50">{currentUser.email}</small>
      </div>
      <ul className="w-full flex flex-col">
        <Link
          onClick={() => setOpen(!open)}
          to={`/${userName}/goals`}
          className="p-4 text-xl font-medium bg-[#1d1d1d] dark:bg-[#f2f2f2]">
          Goals
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          to={`/${userName}/dashboard`}
          className="p-4 text-xl font-medium bg-[#1d1d1d] dark:bg-[#f2f2f2]">
          Dashboard
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          to={`/faq`}
          className="p-4 text-xl font-medium bg-[#1d1d1d] dark:bg-[#f2f2f2]">
          FAQ
        </Link>
        <button
          onClick={signingOut}
          className="bg-red-700 text-white px-4 py-2 rounded-lg self-center mt-8">
          Sign Out
        </button>
      </ul>

      <AiOutlineClose
        onClick={() => setOpen(!open)}
        className="absolute top-4 right-4 text-4xl text-white bg-primary p-2 rounded-lg"
      />
    </div>
  );
};

export default NavLinks;
