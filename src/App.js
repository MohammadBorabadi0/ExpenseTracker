import React, { Fragment } from "react";

// Components
import TransactionApp from "./Components/TransactionApp/TransactionApp";

const App = () => {
  return (
    <Fragment>
      <div className="container">
        <TransactionApp />
      </div>
    </Fragment>
  );
};

export default App;
