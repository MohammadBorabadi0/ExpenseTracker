import React from "react";
import TransactionItem from "../TransactionItem/TransactionItem";

import styles from "./TransactionList.module.css";

const TransactionList = () => {
  return (
    <div className={styles.transactionList}>
      <div className={styles.transactions}>
        <div className={styles.transaction}>
          <h3>Expense</h3>
          <span className="expense">$ 1000</span>
        </div>
        <div className={styles.transaction}>
          <h3>Income</h3>
          <span className="income">$2500</span>
        </div>
      </div>
      <TransactionItem />
    </div>
  );
};

export default TransactionList;
