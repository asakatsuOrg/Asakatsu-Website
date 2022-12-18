import { useNavigate } from "react-router-dom";

import { AiOutlinePlus } from "react-icons/ai";

const AddIcon = ({ path }) => {
  const Navigate = useNavigate();
  const userName = path.split(" ").join("");

  const goToAddGoalPage = () => Navigate(`${userName}/add-goals`);
  return (
    <div
      onClick={goToAddGoalPage}
      className="fixed bottom-4 right-4 bg-primary text-3xl p-3 rounded-full"
      style={{
        boxShadow:
          "0 0 10px rgba(0, 153, 255, .65), 0 0 30px 16px rgba(0, 153, 255, 0.11)",
      }}>
      <AiOutlinePlus />
    </div>
  );
};

export default AddIcon;
