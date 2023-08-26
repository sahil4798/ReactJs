import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value();
    const enteredStreet = streetInputRef.current.value();
    const enteredPostalCode = postalCodeInputRef.current.value();
    const enteredCity = cityInputRef.current.value();
    if (
      enteredName.trim() === "" ||
      enteredStreet.trim() === "" ||
      enteredPostalCode.trim() === "" ||
      enteredCity.trim() === ""
    ) {
      setFormIsValid(false);
      return;
    }
  };
  return (
    // <form onSubmit={submitHandler}>
    //   <div className={classes["control-group"]}>
    //     <div className={classes["form-control"]}>
    //       <label htmlFor="name">Name</label>
    //       <input id="name" type="text"></input>
    //     </div>
    //     <div className={classes["form-control"]}>
    //       <label htmlFor="name">Name</label>
    //       <input id="name" type="text"></input>
    //     </div>
    //   </div>
    //   <div className={classes["form-control"]}>
    //     <label htmlFor="name">Name</label>
    //     <input id="name" type="text"></input>
    //   </div>
    //   <div className={classes["form-actions"]}>
    //     <button type="button" onClick={props.cancel}>
    //       Cancel
    //     </button>
    //     <button>Submit</button>
    //   </div>
    // </form>
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel} ref={cityInputRef}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
