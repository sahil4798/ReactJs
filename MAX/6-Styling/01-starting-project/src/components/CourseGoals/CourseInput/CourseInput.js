import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [validGoal, setvalidGoal] = useState("true");

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      console.log("valid in form component");
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setvalidGoal(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !validGoal ? "red" : "black" }}>
          Course Goal
        </label>
        <input
          style={{
            borderColor: !validGoal ? "red" : "#ccc",
            background: !validGoal ? "salmon" : "transparent",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
