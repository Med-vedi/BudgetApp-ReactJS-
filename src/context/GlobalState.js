import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: "Sold Car", incomeAmount: 3000 },
    { id: 2, incomeText: "Salary", incomeAmount: 5000 },
    { id: 3, incomeText: "Bonus", incomeAmount: 2000 },
    { id: 4, incomeText: "Found", incomeAmount: 500 },
  ],

  expenseTransactions: [{ id: 5, expenseText: "Rent", expenseAmount: 500 }],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //param -> value of payload
  //dispatch F grabed from the context
  const addIncome = (incomeTransaction) => {
    dispatch({
      type: "ADD_INCOME",
      payload: incomeTransaction,
    });
  };
  const addExpense = (expenseTransaction) => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: expenseTransaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomeTransactions: state.incomeTransactions,
        expenseTransactions: state.expenseTransactions,
        addIncome,
        addExpense,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
