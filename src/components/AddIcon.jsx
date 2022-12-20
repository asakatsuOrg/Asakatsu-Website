import { useNavigate, useLocation } from "react-router-dom";

import { AiOutlinePlus } from "react-icons/ai";

const AddIcon = ({ userName, setOpen }) => {
  const Navigate = useNavigate();
  const location = useLocation();

  const goToAddGoalPage = () => {
    Navigate(`${userName}/add-goals`);
    setOpen(false);
  };
  return (
    <div
      onClick={goToAddGoalPage}
      className={`text-white fixed bottom-4 right-4 bg-primary text-xl md:text-3xl p-3 rounded-full active:scale-90 active:-translate-y-4 duration-200 ${
        location.pathname == `/${userName}/add-goals` && "hidden"
      }`}
      style={{
        boxShadow:
          "0 0 10px rgba(0, 153, 255, .65), 0 0 30px 16px rgba(0, 153, 255, 0.11)",
      }}>
      <AiOutlinePlus />
    </div>
  );
};

export default AddIcon;
