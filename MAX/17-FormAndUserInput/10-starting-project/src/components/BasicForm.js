import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    input: enteredFirstName,
    inputIsValid: firstNameIsValid,
    InputIsInvalid: firstNameIsInvalid,
    inputChangeHandler: firstNameInputHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((val) => val.trim() !== "");

  const {
    input: enteredLastName,
    inputIsValid: lastNameIsValid,
    InputIsInvalid: lastNameIsInvalid,
    inputChangeHandler: lastNameInputHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((val) => val.trim() !== "");

  const {
    input: enteredEmail,
    inputIsValid: emailIsValid,
    InputIsInvalid: emailIsInvalid,
    inputChangeHandler: emailInputHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((val) => val.trim().includes(".com"));

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    // if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
    if (!formIsValid) {
      console.log("Invalid");
      return;
    }
    console.log(enteredFirstName);
    console.log(enteredLastName);
    console.log(enteredEmail);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClass = firstNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const lastNameClass = lastNameIsInvalid
    ? "form-control invalid"
    : "form-control";
  const emailClass = emailIsInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameInputHandler}
            value={enteredFirstName}
            onBlur={firstNameBlurHandler}
          />
          {firstNameIsInvalid && (
            <p className="error-text">Enter a Valid First Name</p>
          )}
        </div>
        <div className={lastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameInputHandler}
            value={enteredLastName}
            onBlur={lastNameBlurHandler}
          />
          {lastNameIsInvalid && (
            <p className="error-text">Enter a Valid Last Name</p>
          )}
        </div>
        <div className={emailClass}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            onChange={emailInputHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailIsInvalid && <p className="error-text">Enter a Valid Email</p>}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
