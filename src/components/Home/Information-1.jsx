import React from "react";

import { INFORMATION1 } from "../../content/Information";

const Information1 = () => {
  return (
    <div className="w-full max-w-[1536px] py-24 px-4 lg:px-20 xl:px-56">
      <h1 className="text-center text-3xl md:text-[6vw] lg:text-5xl font-bold mb-12">
        What is Asakatus?
      </h1>
      <div className="flex flex-wrap justify-center items-start gap-6">
        {INFORMATION1.map((information) => {
          return (
            <div
              key={information.id}
              className="basis-[300px] grow bg-background shadow-2xl p-6 rounded-lg hover:-translate-y-4 duration-200">
              <p className="num">{information.id}</p>
              <p className="text-[#B9B9B9]">{information.detail}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Information1;
