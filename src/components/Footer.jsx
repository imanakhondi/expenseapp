import {
  MdOutlineHome,
  MdSignalCellularAlt,
  MdOutlineAddCard,
  MdOutlinePerson,
  MdAdd,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <ul className="flex items-center text-[#aaaaaa] justify-around absolute bottom-0 h-20 shadow-[0_-2px_5px_0_#ccc] w-full bg-white">
      <NavLink
        to="/panel/home"
        className={(navdata) => {
          return navdata.isActive ? "text-primary" : "text-[#aaaaaa]";
        }}
      >
        <li className=" cursor-pointer hover:text-primary">
          <MdOutlineHome size={30} />
        </li>
      </NavLink>
      <NavLink
        to="/panel/chart"
        className={(navdata) => {
          return navdata.isActive ? "text-primary" : "text-[#aaaaaa]";
        }}
      >
        <li className=" cursor-pointer hover:text-primary">
          <MdSignalCellularAlt size={30} />
        </li>
      </NavLink>
      <NavLink
        to="/panel/wallet"
        className={(navdata) => {
          return navdata.isActive ? "text-primary" : "text-[#aaaaaa]";
        }}
      >
        <li className=" cursor-pointer hover:text-primary">
          <MdOutlineAddCard size={30} />
        </li>
      </NavLink>
      <NavLink
        to="/panel/addExpense"
        className=" absolute p-3 bg-[#2F817B] rounded-full transition-all ring-3 ring-red-500 outline-offset-2 border-[3px] border-white shadow-[0_2px_4px_0_#ccc] -top-6 text-white"
      >
        <li className=" cursor-pointer">
          <MdAdd size={30} />
        </li>
      </NavLink>
      <NavLink
        to="/panel/profile"
        className={(navdata) => {
          return navdata.isActive ? "text-primary" : "text-[#aaaaaa]";
        }}
      >
        <li className=" cursor-pointer hover:text-primary">
          <MdOutlinePerson size={30} />
        </li>
      </NavLink>
    </ul>
  );
};

export default Footer;
