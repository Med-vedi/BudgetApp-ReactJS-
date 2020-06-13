import React from "react";

const ExpenseTransactions = ({expenseTransaction}) => {
  return (
      <li className="transaction">
        <span className="transaction-text">{expenseTransaction.incomeText}</span>
        <span className="transaction-amount">
          ${expenseTransaction.incomeAmount}
        </span>
        <button className="delete-btn">
          <i className="fas fa-trash"></i>
        </button>
      </li>
  );
};

export default ExpenseTransactions;
