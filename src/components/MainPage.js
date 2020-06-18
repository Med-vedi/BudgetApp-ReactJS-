import React from "react";

import Header from "./Header";
import Balance from "./Balance";
import AddTransaction from "./AddTransaction";
import IncomeList from "./IncomeList";
import ExpenseList from "./ExpenseList";
import { GlobalContextProvider } from "../context/GlobalState";
import Social from "./socialLinks/social";

import "../App.scss";
import app from "../base";
// import SignIn from "./auth/SignIn";

const MainPage = () => {
  return (
    <div>
      <GlobalContextProvider>
        <div className="app-wrapper">
          <button onClick={() => app.auth().signOut()}>Sign Out</button>
          <Header />
          <Balance />
          <AddTransaction />
          <IncomeList />
          <ExpenseList />
          <Social />
        </div>
      </GlobalContextProvider>
    </div>
  );
};

export default MainPage;
