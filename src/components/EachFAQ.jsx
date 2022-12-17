import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

const EachFAQ = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group max-w-[876px] mb-4 bg-[#2F2F2F] rounded-lg px-4 md:px-12 py-5 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}>
      <div className="text-xl md:text-2xl flex justify-between items-center w-full">
        <h2>{faq.question}</h2>
        <span
          className={`${
            isOpen == true ? "rotate-180" : "rotate-0"
          } duration-300 group-active:scale-[2]`}>
          <BsFillCaretDownFill />
        </span>
      </div>
      <p
        className={`${
          isOpen == true ? "max-h-[300px] mt-4" : "h-0"
        } overflow-hidden`}>
        {faq.answer}
      </p>
    </div>
  );
};

export default EachFAQ;
