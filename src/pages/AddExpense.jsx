import { MdKeyboardArrowLeft } from "react-icons/md";
import Footer from "../components/Footer";
import { BsThreeDots } from "react-icons/bs";
import AddTransActionComponent from "../components/AddTransActionComponent";
import { useEffect, useState } from "react";
const AddExpense = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );
  const [filterTransactions, setFilterTransactions] = useState(transactions);
  const [isShown, setIsShown] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    filtered(searchItem);
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // const clickHandler = () => {
  //   setIsShown(!isShown);
  // };

  const addTodoHandler = (text, price, state,date,time) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      time:time,
      text: text,
      price: price,
      state: state,
      date:date,
    };
    setTransactions([...transactions, newTransaction]);
  };

  // const update = (state, price) => {
  //   if (state === "Income") {
  //     setIncome((prevstate) => prevstate + price);
  //     console.log(income);
  //     console.log(price);
  //   } else {
  //     setExpense((prevstate) => prevstate + price);
  //   }
  // };

  const filtered = (search) => {
    // console.log(e.target.value);
    if (search === "" || !search) {
      console.log(search);
      setFilterTransactions(transactions);
      return;
    } else {
      // const filterTransactions=[...transactions]
      // console.log(filterTransactions);
      const filteredTransactions = transactions.filter((transaction) =>
        transaction.text.toLowerCase().includes(search.toLowerCase())
      );
      setFilterTransactions(filteredTransactions);
    }
  };

  // const searchHandler = (e) => {
  //   setSearchItem(e.target.value)
  //   filtered(e.target.value)
  // }

  return (
    <div className=" relative w-[420px] h-[890px] flex flex-col items-center bg-white font-semibold">
      <div className=" h-[280px] bg-gradient-to-r from-[#429690] to-[#2A7C76] w-full clip-path-circle ">
        <div className="flex justify-between items-center px-5 bg-groupimg bg-no-repeat h-[200px] text-white">
          <div className="flex flex-col items-start ">
            <MdKeyboardArrowLeft size={24} />
          </div>
          <div className="flex flex-col items-start ">
            <p className="font-semibold text-x">Add Expense</p>
          </div>
          <div className="">
            <BsThreeDots size={22} />
          </div>
        </div>
      </div>
      {/* General Profile */}
      <div className=" absolute flex flex-col justify-between items-center top-40  mx-auto rounded-2xl h-[600px] p-3 bg-white text-[#666666] w-[350px] shadow-[0_10px_20px_0_#00000038]">
        {/* <form action="" className="w-full h-full flex flex-col justify-evenly">
          <div className="flex flex-col items-start mb-4">
            <label htmlFor="" className=" font-normal text-sm mb-2">
              Name
            </label>
            <input
              type="text"
              className="border border-[#DDDDDD] focus:ring-orange-400 w-full rounded-lg h-10 px-3 focus:outline-[#438883]"
            />
          </div>
          <div className="flex flex-col items-start mb-4">
            <label htmlFor="" className=" font-normal text-sm mb-2">
              AMOUNT
            </label>
            <input
              type="number"
              className="border border-[#DDDDDD] w-full rounded-lg h-10 px-3 focus:outline-[#438883]"
            />
          </div>
          <div className="flex flex-col items-start mb-4">
            <label htmlFor="" className=" font-normal text-sm mb-2">
              DATE
            </label>
            <input
              type="date"
              className="border border-[#DDDDDD] w-full rounded-lg h-10 px-3 focus:outline-[#438883]"
            />
          </div>
          <div className="flex flex-col items-start mb-4">
            <label htmlFor="" className=" font-normal text-sm mb-2">
              DATE
            </label>
            <input
              type="date"
              className="border border-[#DDDDDD] w-full rounded-lg h-10 px-3 focus:outline-[#438883]"
            />
          </div>
          <button className=" bg-[#438883] text-lg shadow-[0px_12px_19px_0px_#3E7C78] font-semibold text-white w-80 rounded-2xl py-5 ">
            Add Expense
          </button>
        </form> */}
        <AddTransActionComponent
          addTodoHandler={addTodoHandler}
          // update={update}
        />
      </div>

      <Footer />
    </div>
  );
};

export default AddExpense;
