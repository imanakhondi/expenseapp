import { useState } from "react";
import styles from "./addTransAction.module.css";

const AddTransActionComponent = ({ transactions, addTodoHandler, update }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState({
    name: "",
  });
  const amountChange = (e) => {
    setAmount(e.target.value);
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
    addTodoHandler(description, amount, type.selectedOption);
    update(type.selectedOption, parseInt(amount));
    setDescription("");
    setAmount("");
  };

  return (
    <div>
      <form className={styles.container} onSubmit={submitHandler}>
        <input
          type="number"
          placeholder="Amount"
          onChange={amountChange}
          value={amount}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={descriptionChange}
          value={description}
        />
        <div>
          <input
            type="radio"
            checked={type.selectedOption === "expense"}
            onChange={onValueChange}
            id="expense"
            value="Expense"
          />
           <label for="expense">Expense</label>
          <input
            type="radio"
            checked={type.selectedOption === "income"}
            onChange={onValueChange}
            id="income"
            value="Income"
          />
           <label for="income">Income</label>
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default AddTransActionComponent;
