import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useEffect } from "react";
const MasterPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/panel/home");
  }, []);
  return (
    <div className=" relative w-[420px] h-[890px] overflow-x-hidden flex flex-col items-center bg-white font-semibold">
      <Outlet />

      <Footer />
    </div>
  );
};

export default MasterPage;
