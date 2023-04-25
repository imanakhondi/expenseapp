import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Splashscreen = () => {
  //   const [show, setShow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    let timerId;

    const resetTimer = () => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        navigate("/Onboarding");
      }, 2 * 1000);
    };

    document.addEventListener("keydown", resetTimer);
    document.addEventListener("mousemove", resetTimer);
    return () => {
      clearTimeout(timerId);
      document.removeEventListener("keydown", resetTimer);
      document.removeEventListener("mousemove", resetTimer);
    };
  }, []);
  return (
    <div className=" w-96 h-[690px] bg-primary flex flex-col items-center justify-center text-white ">
      <h1 className=" text-2xl font-semibold mb-3">EXPENSE TRACKER</h1>
      <p>Press a key and wait...</p>
      <div className="grid justify-center items-center mt-10">
        <div className=" w-12 h-12 border-[4px] border-[#f3f3f3] border-t-[4px] border-t-[#2f7e79] rounded-full loading-spinner"></div>
      </div>
    </div>
  );
};

export default Splashscreen;
