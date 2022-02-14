import React, { useEffect, useState } from "react";

// Context
import { useTransactions } from "../../Provider/TransactionProvider";

// Components
import TransactionItem from "../TransactionItem/TransactionItem";

// Css
import styles from "./TransactionList.module.css";

const TransactionList = () => {
  const { transactions } = useTransactions();
  const [filteredTnx, setFilteredTnx] = useState(transactions || []);

  useEffect(() => {
    setFilteredTnx(transactions);
  }, [transactions]);

  const changeHandler = (e) => {
    const searchResults = transactions.filter((i) =>
      i.text.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredTnx(searchResults);
  };

  const amounts = transactions.map((item) => item.amount);

  const income = amounts
    .filter((i) => i > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter((i) => i < 0)
    .reduce((acc, item) => (acc += item), 0);

  if (!transactions.length) {
    return (
      <div className={styles.transactionList}>
        <div className={styles.exists}>
          <h3>No Transactions Exists</h3>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.transactionList}>
      <div className={styles.transactions}>
        <div className={styles.transaction}>
          <h3>Expense</h3>
          <span className="expense">$ {expense}</span>
        </div>
        <div className={styles.transaction}>
          <h3>Income</h3>
          <span className="income">$ {income}</span>
        </div>
      </div>

      {transactions.length ? (
        <div className={styles.filter}>
          <input type="text" placeholder="Search..." onChange={changeHandler} />
        </div>
      ) : null}

      {filteredTnx.length ? (
        filteredTnx.map((item) => <TransactionItem key={item.id} item={item} />)
      ) : (
        <div className={styles.exists}>
          <h3>Not Found</h3>
        </div>
      )}
    </div>
  );
};

export default TransactionList;
