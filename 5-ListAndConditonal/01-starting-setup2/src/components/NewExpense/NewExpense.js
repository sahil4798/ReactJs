import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpesneDataHandler = (savedExpenseData) => {
    const expenseData = { ...savedExpenseData, id: Math.random().toString() };
    // console.log(expenseData);
    props.onGetExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpesneDataHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
