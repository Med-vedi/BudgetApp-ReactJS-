import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addIncome, addExpense } = useContext(GlobalContext);
  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: '',
  });

  const { incomeText, incomeAmount } = income;

  const onChangeIncome = (e) => {
    setIncome({ ...income, [e.target.name]: e.target.value.toUpperCase() });
  };
  const onSubmitIncome = (e) => {
    e.preventDefault();
    const newIncomeTransaction = {
      id: uuidv4(),
      incomeText,
      incomeAmount: incomeAmount * 1,
    };
    addIncome(newIncomeTransaction);
    setIncome({
<<<<<<< HEAD
        incomeText:'',
        incomeAmount:0
    }
    )
=======
      incomeText:'',
      incomeAmount:''
    })
    console.log("#### income", newIncomeTransaction);
>>>>>>> 97281922bee47069d05846b3f0f8f2aa9664c007
  };

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: '',
  });

  const { expenseText, expenseAmount } = expense;

  const onChangeExpense = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value.toUpperCase() });
  };
  const onSubmitExpense = (e) => {
    e.preventDefault();
    const newExpenseTransaction = {
      id: uuidv4(),
      expenseText,
      expenseAmount: expenseAmount * 1,
    };
    addExpense(newExpenseTransaction);
    setExpense(
      {
        expenseText:'',
        expenseAmount:''
      }
    )
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
            value={incomeText}
            onChange={onChangeIncome}
            required
          />
          <input
            type="number"
            placeholder="$0.00"
            autoComplete="off"
            value={incomeAmount}
            name="incomeAmount"
            onChange={onChangeIncome}
            required
          />
          <input type="submit" value="submit" />
        </div>
      </form>
      <form onSubmit={onSubmitExpense}>
        <div className="input-group expense">
          <input
            type="text"
            placeholder="Add Expense..."
            value={expenseText}
            name="expenseText"
            autoComplete="off"
            onChange={onChangeExpense}
            required
          />
          <input
            type="number"
            placeholder="$0.00"
            value={expenseAmount}
            name="expenseAmount"
            autoComplete="off"
            onChange={onChangeExpense}
            required
          />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
