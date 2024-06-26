import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnterdedDate] = useState("");

  // const [enteredExpense, setEnteredExpense] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setEnteredExpense({ ...enteredExpense, enteredTitle: event.target.value });
    // setEnteredExpense((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setEnteredExpense({ ...enteredExpense, enteredAmount: event.target.value });
  };

  const dateChangeHandler = (event) => {
    setEnterdedDate(event.target.value);
    // setEnteredExpense({ ...enteredExpense, enteredDate: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(newExpense);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnterdedDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

// import React, { useState } from "react";

// import "./ExpenseForm.css";

// const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");

//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);
//   };

//   const amountChangeHandler = (event) => {
//     setEnteredAmount(event.target.value);
//   };

//   const dateChangeHandler = (event) => {
//     setEnteredDate(event.target.value);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     const enteredInput = {
//       title: enteredTitle,
//       amount: enteredAmount,
//       date: new Date(enteredDate),
//     };
//     console.log(enteredInput);
//     setEnteredTitle("");
//     setEnteredAmount("");
//     setEnteredDate("");
//   };
//   return (
//     <form onSubmit={submitHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input
//             type="text"
//             value={enteredTitle}
//             onChange={titleChangeHandler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             value={enteredAmount}
//             onChange={amountChangeHandler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2022-12-31"
//             value={enteredDate}
//             onChange={dateChangeHandler}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

// export default ExpenseForm;
