import React, { useState } from "react";

const ExpenceForm = (props) => {
  const [title, setTitle] = useState("");
  const [cost, setCost] = useState("");
  const [date, setDate] = useState("");

  function titleHandler(event) {
    setTitle(event.target.value);
  }

  const amountHandler = (event) => {
    setCost(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };

  const formSubmitHandler = (event) => {
    // console.log("subbimited");
    event.preventDefault();
    const newExp = {
      title,
      cost,
      date,
    };
    props.level1(newExp);
    setTitle("");
    setCost("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="">title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div>
          <label>amount</label>
          <input type="number" value={cost} onChange={amountHandler} />
        </div>
        <div>
          <label>date</label>
          <input type="date" value={date} onChange={dateHandler} />
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenceForm;
