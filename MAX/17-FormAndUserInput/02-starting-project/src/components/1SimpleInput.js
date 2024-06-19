import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [inputFieldIsTouched, setInputFieldIsTouched] = useState(false);

  const EnterdNameisValid = enteredName.trim() !== "";
  const InputIsInvalid = !EnterdNameisValid && inputFieldIsTouched;

  // const [formIsValid, setFormIsValid] = useState(false);
  // useEffect(() => {
  //   if (EnterdNameisValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [EnterdNameisValid]);

  let formIsValid = false;
  if (EnterdNameisValid) {
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

    if (!EnterdNameisValid) {
      return;
    }
    console.log(enteredName);
    setEnteredName("");
    setInputFieldIsTouched(false);
  };

  const inputClass = InputIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={inputClass}>
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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
