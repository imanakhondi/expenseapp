import { MdKeyboardArrowLeft } from "react-icons/md";
import Footer from "../components/Footer";
import { BsThreeDots } from "react-icons/bs";

const Chart = () => {
  return (
    <div className=" relative w-[420px] h-[890px] flex flex-col items-center bg-white font-semibold">
      <div className=" h-[280px] bg-gradient-to-r from-[#429690] to-[#2A7C76] w-full clip-path-circle ">
        <div className="flex justify-between items-center px-5 bg-groupimg bg-no-repeat h-[200px] text-white">
          <div className="flex flex-col items-start ">
            <MdKeyboardArrowLeft size={24} />
          </div>
          <div className="flex flex-col items-start ">
            <p className="font-semibold text-x">Chart</p>
          </div>
          <div className="">
            <BsThreeDots size={22} />
          </div>
        </div>
      </div>
      {/* General Profile */}
      <div className=" absolute flex flex-col  items-center top-40  mx-auto rounded-2xl h-[600px] p-3 bg-white text-[#666666] w-[350px] shadow-[0_10px_20px_0_#00000038]">
        <div>
          <h1>this is chart page</h1>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Chart;
