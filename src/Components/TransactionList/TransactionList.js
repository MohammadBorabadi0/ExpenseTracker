import React from "react";

// Context
import { useTransactions } from "../../Provider/TransactionProvider";

// Components
import TransactionItem from "../TransactionItem/TransactionItem";

// Css
import styles from "./TransactionList.module.css";

const TransactionList = () => {
  const { transactions } = useTransactions();

  const amounts = transactions.map((item) => item.amount);

  const income = amounts
    .filter((i) => i > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter((i) => i < 0)
    .reduce((acc, item) => (acc += item), 0);

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
      {transactions.map((item) => (
        <TransactionItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TransactionList;
