import React from "react";
import Button from "../Button";

import { ReactComponent as GetStartedSVG } from "../../assets/get started.svg";

const GetStarted = () => {
  return (
    <div className="w-full max-w-[1536px] pt-24 px-4 lg:px-20 xl:px-56 flex flex-col items-center">
      <h1 className="text-center text-3xl md:text-[6vw] lg:text-5xl font-bold mb-12">
        What are you waiting for?
      </h1>
      <Button path={"/authentication"} buttonType={"bigger"}>
        Get Started
      </Button>
      <GetStartedSVG className="h-96" />
    </div>
  );
};

export default GetStarted;
