import React, { createContext, useContext, useReducer } from "react";

// Create Context
const TransactionContext = createContext();
const TrasnactionContextDispatcher = createContext();

// Reducer
const initialState = {
  transactions: [],
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const count = state.counter + 1;
      return {
        ...state,
        counter: count,
        transactions: [
          ...state.transactions,
          {
            id: state.counter,
            text: action.text,
            amount: action.amount,
            type: action.typeTnx,
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
};

const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TransactionContext.Provider value={state}>
      <TrasnactionContextDispatcher.Provider value={dispatch}>
        {children}
      </TrasnactionContextDispatcher.Provider>
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;

// Custom Hooks

export const useTransactions = () => useContext(TransactionContext);
export const useTransactionsActions = () =>
  useContext(TrasnactionContextDispatcher);
