import React, { createRef, useEffect, useState } from "react";

// Context
import { useTransactionsActions } from "../../Provider/TransactionProvider";

// Components
import Balance from "../Balance/Balance";

// Css
import styles from "./TransactionForm.module.css";

const initialValue = {
  text: "",
  amount: 0,
  type: "expense",
};

const TransactionForm = () => {
  const [formValues, setFormValues] = useState(initialValue);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useTransactionsActions();
  const inputRef = createRef();

  useEffect(() => {
    if (isShow ? inputRef.current.focus() : null);
  }, [isShow]);

  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const showForm = () => {
    setIsShow(!isShow);
  };

  const addTransaction = (e) => {
    e.preventDefault();
    if (!formValues.text) {
      alert("Text should not be empty");
      return;
    } else if (formValues.amount === 0) {
      alert("Amount should not be 0 !!");
      return;
    }
    dispatch({
      type: "ADD",
      text: formValues.text,
      amount: formValues.amount,
      typeTnx: formValues.type,
    });
    setFormValues(initialValue);
    setIsShow(false);
  };

  return (
    <div className={styles.transactionForm}>
      <header>
        <h2>Expense Tracker App</h2>
      </header>
      <div className={styles.balance}>
        <Balance />
        <button className="btn" onClick={showForm}>
          Add
        </button>
      </div>
      {isShow ? (
        <form onSubmit={addTransaction}>
          <input
            ref={inputRef}
            name="text"
            className={styles.formControl}
            type="text"
            placeholder="Enter Expense Or Income"
            value={formValues.text}
            onChange={changeHandler}
          />
          <input
            name="amount"
            className={styles.formControl}
            type="number"
            placeholder="Enter Amount"
            value={formValues.amount}
            onChange={changeHandler}
          />
          <div className={styles.radioButtons}>
            <input
              type="radio"
              name="type"
              id="expense"
              value="expense"
              onChange={changeHandler}
              checked={formValues.type === "expense"}
            />
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              name="type"
              id="income"
              value="income"
              onChange={changeHandler}
              checked={formValues.type === "income"}
            />
            <label htmlFor="income">Income</label>
          </div>
          <button className="btn btn-primary" type="submit">
            Add Transaction
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default TransactionForm;
