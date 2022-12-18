import { Link, useNavigate } from "react-router-dom";

import { signingOut } from "../utils/Authentication";

const Dropdown = ({ path }) => {
  const navigate = useNavigate();
  const userName = path.split(" ").join("");

  const userSignOut = async () => {
    await signingOut();
    navigate("/authentication");
  };

  return (
    <div
      className="w-[180px] absolute top-[80px] right-20 bg-background flex flex-col rounded-lg overflow-hidden"
      style={{ boxShadow: "0 10px 20px rgba(0, 0, 0, .3)" }}>
      <Link to={`${userName}/profile`} className="w-full px-4 py-2">
        Profile
      </Link>
      <button className="bg-red-700 text-xs px-4 py-2" onClick={userSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Dropdown;
