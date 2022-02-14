import React from "react";

// Context
import { useTransactions } from "../../Provider/TransactionProvider";

// Css
import styles from "./Balance.module.css";

const Balance = () => {
  const { transactions } = useTransactions();

  const balance = transactions.reduce((acc, item) => (acc += item.amount), 0);

  return (
    <div className={styles.balance}>
      <h3>
        Balance :
        <span className={balance > 0 ? "income" : "expense"}>{balance} $</span>
      </h3>
    </div>
  );
};

export default Balance;
