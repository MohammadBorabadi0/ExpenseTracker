import React, { Fragment } from "react";

// Css
import styles from "./TransactionItem.module.css";

const TransactionItem = () => {
  return (
    <Fragment>
      <div className={`${styles.transactionItem} ${styles.tnxItemExpense}`}>
        <h4>Item -1</h4>
        <span>$ 1000</span>
      </div>
      <div className={`${styles.transactionItem} ${styles.tnxItemIncome}`}>
        <h4>Item -2</h4>
        <span>$ 400</span>
      </div>
    </Fragment>
  );
};

export default TransactionItem;
