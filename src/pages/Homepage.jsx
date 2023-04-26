import { AiOutlineBell } from "react-icons/ai";
import { BsThreeDots, BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Homepage = () => {
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  useEffect(() => {
    if (transactions) {
      setTransactions(
        transactions.sort((a, b) => new Date(b.date) - new Date(a.date))
      );
    }
  }, []);
  const iman = transactions.sort((a, b) => new Date(a.date) - new Date(b.date));
  const filterdTrans = iman
    .slice(Math.max(transactions.length - 4, 0))
    .reverse();
  const update = () => {
    console.log(transactions);
    transactions.map((transaction) => {
      return transaction.state === "Income"
        ? setIncome((prevstate) => prevstate + parseInt(transaction.price))
        : setExpense((prevstate) => prevstate + parseInt(transaction.price));
    });
  };
  useEffect(() => {
    update();
  }, []);

  const jetzt = () => {
    let today = new Date();
    let hours = today.getHours();

    if (hours >= 4 && hours < 12) {
      return "Good morning";
    } else if (hours >= 12 && hours < 19) {
      return "Good afternoon";
    } else {
      return " Good night";
    }
  };

  return (
    <div className=" relative w-[420px] flex flex-col items-center bg-white font-semibold">
      <div className=" h-[280px] bg-gradient-to-r from-[#429690] to-[#2A7C76] w-full clip-path-circle ">
        <div className="flex justify-between items-center px-5 bg-groupimg bg-no-repeat h-[200px] text-white">
          <div className="flex flex-col items-start ">
            <p className="text-sm">` {jetzt()} ,my dear`</p>
            <p className="font-semibold text-xl">Enjelin Morgeana</p>
          </div>
          <div className="bg-[#ffffff3d] p-1 rounded-lg">
            <AiOutlineBell size={24} />
          </div>
        </div>
      </div>
      {/* General expenses and income */}
      <div className=" absolute flex flex-col justify-evenly top-36 h-[200px] w-[350px] mx-auto rounded-xl bg-[#2F7E79] p-3 text-white shadow-[0px_12px_19px_0px_#3e7c787d]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <p className="font-semibold">Total Balance</p>
            <p className="font-bold text-3xl">$ {income + expense}</p>
          </div>
          <div>
            <BsThreeDots size={22} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <div className="flex">
              <div className="bg-[#ffffff3d] p-1 rounded-full mr-1">
                <BsArrowDownShort />
              </div>
              <p className=" font-light">Income</p>
            </div>
            <p className="font-semibold text-xl">$ {income}</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex">
              <div className="bg-[#ffffff3d] p-1 rounded-full mr-1">
                <BsArrowUpShort />
              </div>
              <p className=" font-light">Expenses</p>
            </div>
            <p className="font-semibold text-xl">$ {expense}</p>
          </div>
        </div>
      </div>
      {/* Transactions history */}
      <div className="w-full mt-32 mb-20 px-5 h-[400px] overflow-auto">
        <div className="flex items-center justify-between mb-3 ">
          <p className="font-bold text-lg text-[#222222]">
            Transactions history
          </p>
          <Link to="/panel/wallet">
            <p className=" text-sm text-[#666666] font-light cursor-pointer">
              See all
            </p>
          </Link>
        </div>
        {filterdTrans.length ? (
          filterdTrans.map((transaction) => {
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
          <p className="text-red-500 mt-10">There are no transactions</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
