import React from "react";

// Css
import styles from "./Balance.module.css";

const Balance = () => {
  return (
    <div className={styles.balance}>
      <h3>
        Balance : <span className={styles.income}>1000 $</span>
      </h3>
    </div>
  );
};

export default Balance;
