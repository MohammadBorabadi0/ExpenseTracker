import React from "react";

// Context
import { useTransactions } from "../../Provider/TransactionProvider";

// Components
import TransactionItem from "../TransactionItem/TransactionItem";

// Css
import styles from "./TransactionList.module.css";

const TransactionList = () => {
  const { transactions } = useTransactions();
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
      {transactions.map((item) => (
        <TransactionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TransactionList;
