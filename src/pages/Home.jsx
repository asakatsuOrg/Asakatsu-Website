import GetStarted from "../components/Home/GetStarted";
import Header from "../components/Home/Header";
import Information1 from "../components/Home/Information-1";
import Information2 from "../components/Home/Information-2";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center">
        <Information1 />
        <Information2 />
        <GetStarted />
      </div>
    </div>
  );
};

export default Home;
