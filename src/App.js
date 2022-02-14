import React, { Fragment } from "react";

// Components
import TransactionApp from "./Components/TransactionApp/TransactionApp";
import TransactionProvider from "./Provider/TransactionProvider";

const App = () => {
  return (
    <Fragment>
      <TransactionProvider>
        <div className="container">
          <TransactionApp />
        </div>
      </TransactionProvider>
    </Fragment>
  );
};

export default App;
