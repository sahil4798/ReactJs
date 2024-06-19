import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";

import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2022");

  const selectYearHandler = (selectedYear) => {
    // console.log("inside expences" + selectedYear);
    setfilteredYear(selectedYear);
    console.log("Expenses " + filteredYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onSelectYear={selectYearHandler}
      ></ExpensesFilter>

      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;

// const [items, setItems] = useState(props.items);

//   const selectYearHandler = (selectedYear) => {
//     setfilteredYear(selectedYear);
//     // console.log("Expenses " + filteredYear);
//     // console.log(props.items[0].date.getFullYear());

//     setItems((items) => {
//       items.filter((expense) => expense.date.getFullYear() === filteredYear);
//     });
//   };
