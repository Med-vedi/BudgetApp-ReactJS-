import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
import { GlobalContextProvider } from "./context/GlobalState";
import Social from "./components/socialLinks/social";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <AddTransaction />
          <IncomeList />
          <ExpenseList />
          <Social/>
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
