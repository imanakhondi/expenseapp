import { BsThreeDots } from "react-icons/bs";
import Header from "../components/Header";

const Chart = () => {
  return (
    <>
    <Header title="Chart" icon={<BsThreeDots size={22} /> }/>
      <div className=" absolute flex flex-col  items-center top-40  mx-auto rounded-2xl h-[600px] p-3 bg-white text-[#666666] w-[350px] shadow-[0_10px_20px_0_#00000038]">
        <div>
          <h1>this is chart page</h1>
        </div>
      </div>
    </>
  );
};

export default Chart;
