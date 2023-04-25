import { MdKeyboardArrowUp } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import woman from "../images/Woman 1.png";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
const TransactionDetails = () => {
  const params = useParams();
  const transactionId = params.id;
  console.log(transactionId);
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );

  const filteredTransaction = transactions.find(
    (t) => t.id === parseInt(transactionId)
  );
  return (
    <>
      <Header title="Transaction Details" icon={<BsThreeDots size={22} />} />
      <div className=" absolute flex flex-col gap-1 items-center top-40  mx-auto rounded-t-[30px] h-[650px] p-6 bg-white text-[#666666] w-full shadow-[0_10px_20px_0_#00000038]">
        <div className="">
          <img
            src={woman}
            alt=""
            className=" w-24 h-24 rounded-full bg-white border border-[#ccc]"
          />
        </div>
        {filteredTransaction.state === "Income" ? (
          <p className="text-[#438883] text-sm font-medium bg-[#EDF4F3] px-4 py-1 rounded-full">
            {filteredTransaction.state}
          </p>
        ) : (
          <p className="text-[#F95B51] text-sm font-medium bg-[#FFEFEE] px-4 py-1 rounded-full">
            {filteredTransaction.state}
          </p>
        )}
        <p className="text-black text-2xl font-semibold ">
          $ {filteredTransaction.price}
        </p>
        <div className="flex justify-between items-center text-black w-full ">
          <p className=" font-medium text-lg">Transaction details</p>
          <MdKeyboardArrowUp size={22} />
        </div>
        <div className="flex justify-between items-center text-black w-full ">
          <p className=" font-medium text-[#666666]">Status</p>
          {filteredTransaction.state === "Income" ? (
            <p className=" font-semibold text-[#438883]">
              {filteredTransaction.state}
            </p>
          ) : (
            <p className=" font-semibold text-[#F95B51]">
              {filteredTransaction.state}
            </p>
          )}
        </div>
        <div className="flex justify-between items-center text-black w-full ">
          <p className=" font-medium text-[#666666]">From</p>
          <p className=" font-semibold">{filteredTransaction.text}</p>
        </div>
        <div className="flex justify-between items-center text-black w-full ">
          <p className=" font-medium text-[#666666]">Time</p>
          <p className=" font-semibold">{filteredTransaction.time}</p>
        </div>
        <div className="flex justify-between items-center text-black w-full ">
          <p className=" font-medium text-[#666666]">Date</p>
          <p className=" font-semibold">{filteredTransaction.date}</p>
        </div>
        <hr className="w-full" />
        <div className="flex justify-between items-center text-black w-full ">
          <p className=" font-medium text-[#666666]">Earnings</p>
          <p className=" font-semibold">$ {filteredTransaction.price}</p>
        </div>
        <div className="flex justify-between items-center text-black w-full ">
          <p className=" font-medium text-[#666666]">Fee</p>
          <p className=" font-semibold">- $ 00.00</p>
        </div>
        <hr className="w-full" />
        <div className="flex justify-between items-center text-black w-full ">
          <p className=" font-medium text-[#666666]">Total</p>
          <p className=" font-semibold">$ {filteredTransaction.price}</p>
        </div>
        <button className="border border-[#438883] text-lg font-semibold text-[#438883] w-80 rounded-full py-2 mt-5 ">
          Download Receipt
        </button>
      </div>
    </>
  );
};

export default TransactionDetails;
