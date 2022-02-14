import React from "react";
import Balance from "../Balance/Balance";

import styles from "./TransactionForm.module.css";

const TransactionForm = () => {
  return (
    <div className={styles.transactionForm}>
      <header>
        <h2>Expense Tracker App</h2>
      </header>
      <div className={styles.balance}>
        <Balance />
        <button className="btn">Add</button>
      </div>
      <form>
        <input
          className={styles.formControl}
          type="text"
          placeholder="Enter Expense Or Income"
        />
        <input
          className={styles.formControl}
          type="number"
          placeholder="Enter Amount"
        />
        <div className={styles.radioButtons}>
          <input type="radio" name="expense" id="expense" />
          <label htmlFor="expense">Expense</label>
          <input type="radio" name="expense" id="income" />
          <label htmlFor="income">Income</label>
        </div>
        <button className="btn btn-primary" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
