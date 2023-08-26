import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2022");

  // const [items, setItems] = useState(props.items);

  const selectYearHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
    // console.log("Expenses " + filteredYear);
    // console.log(props.items[0].date.getFullYear());
    // setItems((preitems) => {
    //   return preitems.filter((expense) => {
    //     return expense.date.getFullYear().toString() === filteredYear;
    //   });
    // });
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSelectYear={selectYearHandler}
      ></ExpensesFilter>
      {expensesContent}
    </Card>
  );
};

export default Expenses;
