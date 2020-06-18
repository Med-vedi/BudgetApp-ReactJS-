import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);

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
      //string to number
      incomeAmount: incomeAmount * 1,
    };
    addIncome(newIncomeTransaction);
    setIncome({
        incomeText:'',
        incomeAmount:0
    }
    )
  };

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
      //string to number
      expenseAmount: expenseAmount * 1,
    };

    addExpense(newExpenseTransaction);
    setExpense({
        expenseText:'',
        expenseAmount:0
    }
    )
  };

  return (
    <div className="form-warpper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            name="incomeText"
            placeholder="Add Income..."
            autoComplete="off"
            value={incomeText}
            onChange={onChangeIncome}
          />
          <input
            type="number"
            name="incomeAmount"
            placeholder="Amount"
            autoComplete="off"
            value={incomeAmount}
            onChange={onChangeIncome}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            name='expenseText'
            placeholder="Add Expense ..."
            autoComplete="off"
            value={expenseText}
            onChange={onChangeExpense}
          />
          <input
            type="number"
            name='expenseAmount '
            placeholder="Amount"
            autoComplete="off"
            value={expenseAmount}
            onChange={onChangeExpense}
          />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
