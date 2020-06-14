import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome } = useContext(GlobalContext);
  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: 0,
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value });
  };
  const onSubmitIncome = (e) => {
    e.preventDefault();
    const newIncomeTransaction = {
      id: uuidv4(),
      incomeText,
      incomeAmount: incomeAmount * 1,
    };
    addIncome(newIncomeTransaction);
    console.log("#### income", newIncomeTransaction);
  };

  const { addExpense } = useContext(GlobalContext);

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: 0,
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };
  const onSubmitExpense = (e) => {
    e.preventDefault();
    const newExpenseTransaction = {
      id: uuidv4(),
      expenseText,
      expenseAmount: expenseAmount * 1,
    };
    addExpense(newExpenseTransaction);
    console.log("#### expense", newExpenseTransaction);
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            placeholder="Add Income..."
            autoComplete="off"
            name="incomeText"
            onChange={onChangeIncome}
          />
          <input
            type="number"
            placeholder="Amount"
            autoComplete="off"
            name="incomeAmount"
            onChange={onChangeIncome}
          />
          <input type="submit" value="submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            placeholder="Add Expense..."
            name='expenseText'
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input
            type="number"
            placeholder="Amount"
            name='expenseAmount'
            autoComplete="off"
            onChange={onChangeExpense}
          />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
