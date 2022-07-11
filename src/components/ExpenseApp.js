import { useEffect, useState } from "react";
import styles from "./expenseApp.module.css";
import AddTransActionComponent from "./AddTransActionComponent";
import TransActionComponent from "./TransActionComponent";
const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [filterTransactions, setFilterTransactions] = useState(transactions);
  const [isShown, setIsShown] = useState(false);
  const [searchItem,setSearchItem] = useState("")

  useEffect(() => {
    filtered(searchItem)
  },[transactions])

  const clickHandler = () => {
    setIsShown(!isShown);
  };

  const addTodoHandler = (text, price, state) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      text: text,
      price: price,
      state: state,
    };
    setTransactions([...transactions, newTransaction]);
  };

  const update = (state, price) => {
    if (state === "Income") {
      setIncome((prevstate) => prevstate + price);
      console.log(income);
      console.log(price);
    } else {
      setExpense((prevstate) => prevstate + price);
    }
  };

  const filtered = (search) => {
    // console.log(e.target.value);
if (search === "" || !search) {
  console.log(search);
  setFilterTransactions(transactions)
  return ;
}else{
  // const filterTransactions=[...transactions]
  // console.log(filterTransactions);
  const filteredTransactions = transactions.filter((transaction) =>
    transaction.text.toLowerCase().includes(search.toLowerCase())
  );
  setFilterTransactions(filteredTransactions);
}
  };


  const searchHandler = (e) => {
    setSearchItem(e.target.value)
    filtered(e.target.value)
  }

  return (
    <section className={styles.container}>
      <div className={styles.container}>
        <div className={styles.addBalance}>
          <div className={styles.balance}>
            <p>balance :</p>
            <span>{income - expense}$</span>
          </div>
          <button onClick={clickHandler}>{isShown?"cancel":"add"}</button>
        </div>
      </div>
      {isShown && (
        <AddTransActionComponent
          addTodoHandler={addTodoHandler}
          update={update}
         
          
        />
      )}
      <div className={styles.container}>
        <div className={styles.expense}>
          <div className={styles.income}>
            <p>Expense :</p>
            <span>{expense}$</span>
            <span>{transactions.state === "expense" && { expense }}</span>
          </div>
          <div className={styles.income}>
            <p>income :</p>
            <span>{income}$</span>
          </div>
        </div>
      </div>
      <TransActionComponent
        transactions={filterTransactions}
        onSearch={searchHandler}
        searchItem={searchItem}
      />
    </section>
  );
};

export default ExpenseApp;
