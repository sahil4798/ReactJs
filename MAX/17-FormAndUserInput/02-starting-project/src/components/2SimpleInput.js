import { useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [inputFieldIsTouched, setInputFieldIsTouched] = useState(false);

  const enterdNameisValid = enteredName.trim() !== "";
  const InputIsInvalid = !enterdNameisValid && inputFieldIsTouched;

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailIsInValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset,
  } = useInput((value) => value.trim().includes(".com"));

  console.log(enteredEmailIsInValid);
  console.log(enteredEmailIsValid);

  let formIsValid = false;
  if (enterdNameisValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputFieldIsTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setInputFieldIsTouched(true);
    // setEmailFieldIsTouched(true);

    if (!enterdNameisValid || !enteredEmailIsValid) {
      return;
    }

    setEnteredName("");
    setInputFieldIsTouched(false);
    console.log(enteredEmailIsInValid);
    console.log(enteredEmailIsValid);

    reset();
  };

  const nameinputClass = InputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailinputClass = enteredEmailIsInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={nameinputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputChangeHandler}
          value={enteredName}
          onBlur={inputBlurHandler}
        />
      </div>
      {InputIsInvalid && <p className="error-text">EnteredName is not Valid</p>}

      <div className={emailinputClass}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          value={enteredEmail}
          onBlur={emailBlurHandler}
        />
      </div>
      {enteredEmailIsInValid && (
        <p className={"error-text"}>Enter a Valid Email</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
