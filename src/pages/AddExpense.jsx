
import { BsThreeDots } from "react-icons/bs";
import AddTransActionComponent from "../components/AddTransActionComponent";
import { useEffect, useState } from "react";
import Header from "../components/Header";
const AddExpense = () => {

  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions")) || []
  );
  

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  
  const addTodoHandler = (text, price, state, date, time) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      time: time,
      text: text,
      price: price,
      state: state,
      date: date,
    };
    setTransactions([...transactions, newTransaction]);
  };
 

  return (
  
    <>
     <Header title="Add Expense" icon={<BsThreeDots size={22} />} />
      <div className=" absolute flex flex-col justify-between items-center top-40  mx-auto rounded-2xl h-[600px] p-3 bg-white text-[#666666] w-[350px] shadow-[0_10px_20px_0_#00000038]">
      
        <AddTransActionComponent
          addTodoHandler={addTodoHandler}
        />
      </div>
    </>
  );
};

export default AddExpense;
