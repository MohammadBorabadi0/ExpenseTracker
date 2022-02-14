import React, { Fragment } from "react";

// Css
import styles from "./TransactionItem.module.css";

const TransactionItem = ({ item }) => {
  return (
    <Fragment>
      <div
        className={`${styles.transactionItem} ${
          item.type === "expense" ? styles.tnxItemExpense : styles.tnxItemIncome
        }`}
      >
        <h4>{item.text}</h4>
        <span>$ {item.amount}</span>
      </div>
    </Fragment>
  );
};

export default TransactionItem;
