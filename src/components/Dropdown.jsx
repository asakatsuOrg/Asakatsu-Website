import { Link, useNavigate } from "react-router-dom";

import { signingOut } from "../utils/Authentication";

const Dropdown = ({ userName }) => {
  const Navigate = useNavigate();

  const userSignOut = async () => {
    await signingOut();
    Navigate("/authentication");
  };

  return (
    <div
      className="w-[180px] absolute top-[80px] right-20 bg-background dark:bg-[#f2f2f2] hidden md:flex flex-col rounded-lg overflow-hidden"
      style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, .3)" }}>
      <Link to={`${userName}/profile`} className="w-full px-4 py-2">
        Profile
      </Link>
      <button
        className="text-white bg-red-700 text-xs px-4 py-2"
        onClick={userSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Dropdown;
