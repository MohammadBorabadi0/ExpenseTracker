import React from "react";

// Components
import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionList from "../TransactionList/TransactionList";

// Css
import styles from "./TransactionApp.module.css";

const TransactionApp = () => {
  return (
    <div className={styles.transactionApp}>
      <TransactionForm />
      <TransactionList />
    </div>
  );
};

export default TransactionApp;
