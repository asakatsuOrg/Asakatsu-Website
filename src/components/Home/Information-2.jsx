import React from "react";
import Masonry from "react-masonry-css";

import { INFORMATION2 } from "../../content/Information";

const breakpointColumnsObj = {
  default: 3,
  992: 2,
  576: 1,
};

const Information2 = () => {
  return (
    <div className="w-full max-w-[1536px] py-24 px-4 lg:px-20 xl:px-56">
      <h1
        data-aos="zoom-in"
        className="text-center text-3xl md:text-[6vw] lg:text-5xl font-bold mb-12">
        What things the website has?
      </h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        columnClassName="my-masonry-grid_column"
        className="my-masonry-grid">
        {INFORMATION2.map((information) => {
          return (
            <div
              data-aos="zoom-in"
              key={information.id}
              className="bg-background dark:bg-white shadow-2xl p-6 rounded-lg hover:-translate-y-4 duration-200">
              <information.icon className="text-3xl text-primary mb-4" />
              <p className="text-[#B9B9B9] dark:text-[#212121] text-lg">
                {information.detail}
              </p>
              {information.list && (
                <ul className="list-disc text-[#B9B9B9] dark:text-[#212121] p-2 px-6">
                  {information.list.map((list) => {
                    return (
                      <>
                        <li>{list}</li>
                      </>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </Masonry>
    </div>
  );
};

export default Information2;
