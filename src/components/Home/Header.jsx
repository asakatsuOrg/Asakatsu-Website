import Button from "../Button";

import headerIMG from "../../assets/Header img.png";

const Header = () => {
  return (
    <div className="flex justify-center bg-[#1E1E1E]">
      <div className="w-full max-w-[1536px] px-4 md:px-8 lg:px-20">
        <div className="mt-16 md:mt-0 md:h-screen 2xl:h-auto py-16 2xl:py-28 grid md:grid-cols-2 items-center">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-5xl md:text-[6vw] lg:text-8xl font-black">
              ASAKATSU
            </h1>
            <p className="text-sm sm:text-base md:text-2xl opacity-60 dark:opacity-80 mb-2 md:mb-4">
              A website where you can keep track of your goal's progress, and
              <br />
              contribute to open source in the same time.
            </p>
            <Button path={"/authentication"} buttonType={"bigger"}>
              Get Started
            </Button>
          </div>
          <img src={headerIMG} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
