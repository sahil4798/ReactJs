import { useState } from "react";

const BasicForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const nameIsValid = enteredName.trim() !== "";
  const nameIsInvalid = !nameIsValid && nameIsTouched;

  let formIsValid = false;
  if (nameIsValid) {
    formIsValid = true;
  }

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameBlurHandler = () => {
    setNameIsTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setNameIsTouched(true);
    if (!nameIsValid) {
      console.log("Invalid");
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setNameIsTouched(false);
  };

  const nameClass = nameIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={nameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputHandler}
            value={enteredName}
            onBlur={nameBlurHandler}
          />
          {nameIsInvalid && <p className="error-text">Enter a Valid Name</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
