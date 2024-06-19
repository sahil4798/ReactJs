import React, { useState } from "react";

import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import classes from "./NewUserForm.module.css";

const NewUserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      props.getError("Input Field can not be empty");
      return;
    }
    if (+enteredAge < 1) {
      props.getError("Age can not be negative");
      return;
    }
    const newUser = { name: enteredUsername, age: enteredAge };
    props.getUserData(newUser);
    setEnteredUsername("");
    setEnteredAge("");
  };
  return (
    <Card className={classes.input}>
      <h1 style={{ textAlign: "center" }}>Enter User Data</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="usename"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredUsername}
        ></input>

        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredAge}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default NewUserForm;
