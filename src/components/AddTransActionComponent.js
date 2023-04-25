import { useState } from "react";

const AddTransActionComponent = ({  addTodoHandler, update }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState({
    name: "",
  });
  const amountChange = (e) => {
    setAmount(e.target.value);
  };
  const dateChange = (e) => {
    setDate(e.target.value);
  };
  const timeChange = (e) => {
    setTime(e.target.value);
  };
  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onValueChange = (e) => {
    setType({ selectedOption: e.target.value });
  };

  const submitHandler = (e) => {
    // console.log("kasra");
    e.preventDefault();
    addTodoHandler(description, amount, type.selectedOption,date,time);
    // update(type.selectedOption, parseInt(amount));
    setDescription("");
    setAmount("");
    setDate("");
    setTime("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full h-full flex flex-col justify-evenly"
    >
      <div className="flex flex-col items-start mb-4">
        <label htmlFor="" className=" font-normal text-sm mb-2">
          Name
        </label>
        <input
          type="text"
          onChange={descriptionChange}
          value={description}
          className="border border-[#DDDDDD] focus:ring-orange-400 w-full rounded-lg h-10 px-3 focus:outline-[#438883]"
        />
      </div>
      <div className="flex flex-col items-start mb-4">
        <label htmlFor="" className=" font-normal text-sm mb-2">
          AMOUNT
        </label>
        <input
          type="number"
          onChange={amountChange}
          value={amount}
          className="border border-[#DDDDDD] w-full rounded-lg h-10 px-3 focus:outline-[#438883]"
        />
      </div>
      <div className="flex flex-col items-start mb-4">
        <label htmlFor="" className=" font-normal text-sm mb-2">
          DATE
        </label>
        <input
        value={date}
        onChange={dateChange}
          type="date"
          className="border border-[#DDDDDD] w-full rounded-lg h-10 px-3 focus:outline-[#438883]"
        />
      </div>
      <div className="flex flex-col items-start mb-4">
        <label htmlFor="" className=" font-normal text-sm mb-2">
          TIME
        </label>
        <input
        value={time}
        onChange={timeChange}
          type="time"
          className="border border-[#DDDDDD] w-full rounded-lg h-10 px-3 focus:outline-[#438883]"
        />
      </div>
      <div className="flex  mb-4">
      <div className="flex items-center flex-1" >
      <label className=" font-normal text-sm" htmlFor="expense">
          Expense
        </label>
        <input
          type="radio"
          checked={type.selectedOption === "Expense"}
          onChange={onValueChange}
          id="expense"
          value="Expense"
          className="border border-[#DDDDDD] ml-2 mt-1  rounded-lg  focus:outline-[#438883]"
        />
      </div>
       
       <div className="flex items-center flex-1" >
       <label className=" font-normal text-sm" htmlFor="income">
          Income
        </label>
        <input
          type="radio"
          checked={type.selectedOption === "Income"}
          onChange={onValueChange}
          id="income"
          value="Income"
          className="border border-[#DDDDDD] ml-2 mt-1  rounded-lg  focus:outline-[#438883]"
        />
       </div>
         
      </div>
      <button
        type="submit"
        className=" bg-[#438883] text-lg shadow-[0px_12px_19px_0px_#3E7C78] font-semibold text-white w-80 rounded-2xl py-5 "
      >
        Add Expense
      </button>
    </form>
    // <div>
    //   <form className={styles.container} onSubmit={submitHandler}>
    //     <input
    //       type="number"
    //       placeholder="Amount"
    //       onChange={amountChange}
    //       value={amount}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Description"
    //       onChange={descriptionChange}
    //       value={description}
    //     />
    //     <div>
    //       <input
    //         type="radio"
    //         checked={type.selectedOption === "expense"}
    //         onChange={onValueChange}
    //         id="expense"
    //         value="Expense"
    //       />
    //        <label for="expense">Expense</label>
    //       <input
    //         type="radio"
    //         checked={type.selectedOption === "income"}
    //         onChange={onValueChange}
    //         id="income"
    //         value="Income"
    //       />
    //        <label for="income">Income</label>
    //     </div>
    //     <button type="submit">add</button>
    //   </form>
    // </div>
  );
};

export default AddTransActionComponent;
