import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  incomeTransactions: [
    { id: 1, incomeText: "Car sold", incomeAmount: 12000 },
    { id: 2, incomeText: "SALARY", incomeAmount: 1200 },
    { id: 3, incomeText: "Bonus", incomeAmount: 1000 },
  ],
  expenseTransactions: [{ id: 4, incomeText: "Rent", incomeAmount: 500 }],
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
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
