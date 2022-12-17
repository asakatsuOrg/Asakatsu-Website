import { FAQ as QUESTION_ANSWER } from "../content/FAQ";

import EachFAQ from "../components/EachFAQ";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center mt-24 p-4">
      {QUESTION_ANSWER.map((faq) => (
        <EachFAQ faq={faq} />
      ))}
    </div>
  );
};

export default FAQ;
