import { AiOutlineBell } from "react-icons/ai";
import {
  MdKeyboardArrowLeft,
  MdLock,
  MdMailOutline,
  MdPeople,
  MdPerson,
  MdShield,
} from "react-icons/md";
import woman from "../images/Woman 1.png";
import diamond from "../images/diamond (dark).png";
import Footer from "../components/Footer";
const Profile = () => {
  return (
    <div className=" relative w-96 h-[790px] flex flex-col items-center bg-white font-semibold">
      <div className=" h-[280px] bg-gradient-to-r from-[#429690] to-[#2A7C76] w-full clip-path-circle ">
        <div className="flex justify-between items-center px-5 bg-groupimg bg-no-repeat h-[200px] text-white">
          <div className="flex flex-col items-start ">
            <MdKeyboardArrowLeft size={24} />
          </div>
          <div className="flex flex-col items-start ">
            <p className="font-semibold text-x">Profile</p>
          </div>
          <div className="bg-[#ffffff3d] p-1 rounded-lg">
            <AiOutlineBell size={24} />
          </div>
        </div>
      </div>
      {/* General Profile */}
      <div className=" absolute flex flex-col justify-between items-center top-52  mx-auto rounded-xl p-3 text-white ">
        <div className="flex justify-between items-center">
          <div className="">
            <img
              src={woman}
              alt=""
              className=" w-24 h-24 rounded-full bg-white"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between items-center mt-4">
          <p className="font-semibold text-xl text-[#222222]">Iman Akhondi</p>
          <p className="font-semibold text-sm text-[#438883]">@khondi_iman</p>
        </div>
      </div>
      {/* Setting */}
      <ul className="w-full mt-32 mb-20 px-5 h-[300px] ">
        <li className="flex items-center mb-3 border-b pb-3 ">
          <div className="w-8 h-8 bg-[#F0F6F5] rounded-full flex items-center justify-center">
            <img src={diamond} alt="" className="w-6 h-6" />
          </div>
          <span className="ml-3 font-medium">Invite Friends</span>
        </li>
        <li className="flex items-center mb-3 pb-3 ">
          <MdPerson size={22} className="text-[#666666]" />
          <span className="ml-5 font-medium">Account info</span>
        </li>
        <li className="flex items-center mb-3 pb-3 ">
          <MdPeople size={22} className="text-[#666666]" />
          <span className="ml-5 font-medium">Personal profile</span>
        </li>
        <li className="flex items-center mb-3 pb-3 ">
          <MdMailOutline size={22} className="text-[#666666]" />
          <span className="ml-5 font-medium">Message center</span>
        </li>
        <li className="flex items-center mb-3 pb-3 ">
          <MdShield size={22} className="text-[#666666]" />
          <span className="ml-5 font-medium">Login and security</span>
        </li>
        <li className="flex items-center mb-3 pb-3 ">
          <MdLock size={22} className="text-[#666666]" />
          <span className="ml-5 font-medium">Data and privacy</span>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Profile;
