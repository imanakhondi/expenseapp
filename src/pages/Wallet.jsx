import { MdAdd,  MdQrCode } from "react-icons/md";
import { BsSendFill, BsThreeDots } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Wallet = () => {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("transactions"));
    if (items) {
      const sortTrans = items.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
      setTransactions(sortTrans);
    }
  }, []);

  const [trans, setTrans] = useState(true);
  const [upcoms, setUpcoms] = useState(false);

  const showTrans = () => {
    setTrans(true);
    setUpcoms(false);
  };
  const showUpcoming = () => {
    setUpcoms(true);
    setTrans(false);
  };

  return (
   
    <>
    <Header title="Wallet" icon={<BsThreeDots size={22} />} />
      <div className=" absolute flex flex-col  items-center top-40  mx-auto rounded-2xl h-[600px] p-3 bg-white text-[#666666] w-[350px] shadow-[0_10px_20px_0_#00000038]">
        <div>
          <p className="text-[#666666] font-normal mt-3">Total Balance</p>
          <p className=" text-3xl text-[#222222] font-bold">
            ${" "}
            {transactions.reduce((result, transaction) => {
              return result + parseInt(transaction.price);
            }, 0)}
          </p>
        </div>
        <div className="flex gap-6 my-8">
          <Link to="/panel/addExpense">
            <div className="  p-2 rounded-full border border-[#2F817B] cursor-pointer text-[#2F817B]">
              <MdAdd size={24} />
            </div>
            <div className=" text-sm font-normal text-[#222222]">Add</div>
          </Link>
          <Link to="#">
            <div className="  p-2 rounded-full border border-[#2F817B] cursor-pointer text-[#2F817B]">
              <MdQrCode size={24} />
            </div>
            <div className=" text-sm font-normal text-[#222222]">Pay</div>
          </Link>
          <Link to="#">
            <div className="  p-2 rounded-full border border-[#2F817B] cursor-pointer text-[#2F817B]">
              <BsSendFill size={24} />
            </div>
            <div className=" text-sm font-normal text-[#222222]">Send</div>
          </Link>
        </div>
        {/* Tab */}

        <div className="bg-[#F4F6F6] flex mb-3 gap-1 w-full justify-evenly p-2 rounded-full">
          <button
            className={`text-sm w-full rounded-full py-1 font-semibold text-[#666666] ${
              trans ? "bg-white" : ""
            }`}
            onClick={showTrans}
          >
            Transactions
          </button>
          <button
            className={`text-sm w-full rounded-full py-1 font-semibold text-[#666666] ${
              upcoms ? "bg-white" : ""
            }`}
            onClick={showUpcoming}
          >
            Upcoming Bills
          </button>
        </div>
        <div className="w-full px-5 h-[300px] overflow-auto">
          {trans ? (
            transactions.length ? (
              transactions.map((transaction) => {
                return transaction.state === "Income" ? (
                  <Link
                    to={`/panel/transactionDetails/${transaction.id}`}
                    key={transaction.id}
                    target="_blank"
                  >
                    <div className="flex items-center justify-between p-2 rounded-lg mb-3 bg-[#FBFBFB] hover:bg-[#29756F] hover:shadow-[0px_12px_19px_0px_#3E7C78] transition-all group  ">
                      <div className="flex flex-col items-start group-hover:text-white ">
                        <p className="font-semibold text-black group-hover:text-white">
                          {transaction.text}
                        </p>
                        <p className=" text-sm text-[#666666] group-hover:text-white">
                          {transaction.date}
                        </p>
                      </div>
                      <p className=" text-lg font-semibold text-green-500 group-hover:text-white">
                        + $ {transaction.price}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <Link
                    to={`/panel/transactionDetails/${transaction.id}`}
                    key={transaction.id}
                    target="_blank"
                  >
                    <div className="flex items-center justify-between p-2 rounded-lg mb-3 bg-[#FBFBFB] hover:bg-[#29756F] hover:shadow-[0px_12px_19px_0px_#3E7C78] transition-all group  ">
                      <div className="flex flex-col items-start">
                        <p className="font-semibold text-black group-hover:text-white">
                          {transaction.text}
                        </p>
                        <p className=" text-sm text-[#666666] group-hover:text-white">
                          {transaction.date}
                        </p>
                      </div>
                      <p className=" text-lg font-semibold text-red-500 group-hover:text-white">
                        - $ {transaction.price}
                      </p>
                    </div>
                  </Link>
                );
              })
            ) : (
              <p className="text-red-500">There are no transactions</p>
            )
          ) : (
            ""
          )}

          {upcoms ? (
            <div id="Upcoming Bills" className="text-red-500">
              There are no Upcoming Bills
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Wallet;
