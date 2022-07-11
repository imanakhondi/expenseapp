import styles from "./transAction.module.css";
const TransActionComponent = ({ transactions,onSearch,searchItem }) => {
 
  return (
    <div>
      <input type="text" value={searchItem} placeholder="search" onChange={onSearch} />
      {transactions.map((transaction) => {
        return (
          <div key={transaction.id}>
            <div
              className={`${styles.container} ${
                transaction.state === "Income" ? styles.income : styles.expense
              }`}
            >
              <p>{transaction.text}</p>
              <p>{transaction.price}$</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TransActionComponent;
