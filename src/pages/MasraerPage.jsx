import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
const MasterPage = () => {
  return (
    <div className=" relative w-[420px] h-[890px] flex flex-col items-center bg-white font-semibold">
      <Outlet />

      <Footer />
    </div>
  );
};

export default MasterPage;
