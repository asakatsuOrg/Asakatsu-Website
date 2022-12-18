import { AiOutlinePlus } from "react-icons/ai";

const AddIcon = () => {
  return (
    <div
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
