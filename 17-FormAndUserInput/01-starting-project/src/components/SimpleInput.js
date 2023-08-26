import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isEnterdNameValid, setIsEnteredNameValid] = useState(false);
  const [inputFieldIsTouched, setInputFieldIsTouched] = useState(false);

  const enteredNameRef = useRef();

  useEffect(() => {
    if (isEnterdNameValid) {
      console.log("EnteredName is Valid");
    }
  }, [isEnterdNameValid]);

  const inputChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsEnteredNameValid(true);
    }
  };

  const inputBlurHandler = () => {
    setInputFieldIsTouched(true);
    if (enteredName.trim().length === 0) {
      setIsEnteredNameValid(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setInputFieldIsTouched(true);
    if (enteredName.trim().length === 0) {
      setIsEnteredNameValid(false);
      return;
    }
    setIsEnteredNameValid(true);

    console.log(enteredName);

    // enteredNameRef.current.value = ""; //Not recommended Beacuse Here we are Dire\ctly Manopulating DOM By ourSelf WithOut React
    setEnteredName("");
  };
  const InputIsInvalid = !isEnterdNameValid && inputFieldIsTouched;

  const inputClass = InputIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className={inputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={enteredNameRef}
          type="text"
          id="name"
          onChange={inputChangeHandler}
          value={enteredName}
          onBlur={inputBlurHandler}
        />
      </div>
      {InputIsInvalid && <p className="error-text">EnteredName is not Valid</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
