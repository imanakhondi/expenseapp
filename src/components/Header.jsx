import { MdKeyboardArrowLeft } from "react-icons/md";

const Header = ({title,icon}) => {
    return ( 
        <div className=" h-[300px] bg-gradient-to-r from-[#429690] to-[#2A7C76] w-full clip-path-circle ">
        <div className="flex justify-between items-center px-5 bg-groupimg bg-no-repeat h-[200px] text-white">
          <div className="flex flex-col items-start ">
            <MdKeyboardArrowLeft size={24} />
          </div>
          <div className="flex flex-col items-start ">
            <p className="font-semibold text-x">{title}</p>
          </div>
          <div className="">
            {icon}
          </div>
        </div>
      </div>
     );
}
 
export default Header;