import React, { useState } from "react";

import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import Error from "../Error/Error.js";
import classes from "./NewUserForm.module.css";

const NewUserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Enter a valid name and age(non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "Invalid Age", message: "Enter a valid Age (age>1)" });
      return;
    }
    const newUser = { name: enteredUsername, age: enteredAge };
    props.getUserData(newUser);
    setEnteredUsername("");
    setEnteredAge("");
  };
  const removeErrorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <Error
          message={error.message}
          title={error.title}
          onCancel={removeErrorHandler}
        ></Error>
      )}
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
    </div>
  );
};

export default NewUserForm;
