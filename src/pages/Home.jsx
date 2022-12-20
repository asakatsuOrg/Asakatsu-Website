import Button from "../components/Button";

const Home = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 p-4">
      <h1 className="text-5xl md:text-[6vw] lg:text-8xl font-black">
        ASAKATSU
      </h1>
      <p className="text-base md:text-2xl text-center opacity-60 dark:opacity-80">
        A website where you can keep track of your goal's progress, and <br />
        contribute to open source in the same time.
      </p>
      <Button path={"/authentication"} buttonType={"bigger"}>
        Get Started
      </Button>
      <svg
        className="fixed bottom-0 left-0 -z-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 300">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,128L40,117.3C80,107,160,85,240,90.7C320,96,400,128,480,154.7C560,181,640,203,720,176C800,149,880,75,960,80C1040,85,1120,171,1200,218.7C1280,267,1360,277,1400,282.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default Home;
