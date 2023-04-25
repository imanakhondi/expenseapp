import { Link } from "react-router-dom";
import image from "../images/Group 1.png";
const Onboarding = () => {
  return (
    <div className=" w-[420px] h-[890px] flex flex-col  bg-white font-semibold">
      <div className=" flex items-center justify-center h-[630px] bg-[#EEF8F7] w-full clip-path-style">
        <div className=" w-[550px] h-[550px] border border-white rounded-full flex items-center justify-center absolute">
          <div className=" w-[450px] h-[450px] border border-white rounded-full flex items-center justify-center relative">
            <div className="flex items-center justify-center w-[350px] h-[350px] border border-white rounded-full ">
              <img src={image} alt="" className="w-full h-full absolute" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[260px] w-full">
        <h1 className="text-primary mt-5 mb-3 px-16 text-4xl font-bold">
          spend smarter save more
        </h1>
        <Link to="/home">
          <button className=" bg-primary text-lg shadow-[0px_12px_19px_0px_#3E7C78] font-semibold text-white w-80 rounded-full py-5 ">
            Get Started
          </button>
        </Link>
        <div className="block mt-5 text-sm">
          Already have account?
          <a href="/#" className="text-primary">
            {" "}
            Log In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
