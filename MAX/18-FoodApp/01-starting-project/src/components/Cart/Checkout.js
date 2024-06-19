import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (val) => val.trim() === "";
const isFiveChar = (val) => val.trim().length === 6;

const Checkout = (props) => {
  const [dataValidity, setDataValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = async (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChar(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setDataValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsvalid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsvalid) {
      console.log("INVALID");
      return;
    }
    try {
      await props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPostalCode,
        city: enteredCity,
      });
    } catch (error) {
      props.sendError(error.message);
    }
    // console.log("Form Submitted");
  };

  const nameClass = `${classes.control} ${
    !dataValidity.name ? classes.invalid : ""
  } }  `;
  const streetClass = `${classes.control} ${
    !dataValidity.street ? classes.invalid : ""
  } }  `;
  const postalCodeClass = `${classes.control} ${
    !dataValidity.postalCode ? classes.invalid : ""
  } }  `;
  const cityClass = `${classes.control} ${
    !dataValidity.city ? classes.invalid : ""
  } }  `;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!dataValidity.name && (
          <p className={classes.invalid}>Please enter a valid name!</p>
        )}
      </div>
      <div className={streetClass}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!dataValidity.street && (
          <p className={classes["invalid input"]}>
            Please enter a valid street!
          </p>
        )}
      </div>
      <div className={postalCodeClass}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!dataValidity.postalCode && (
          <p className={classes["invalid input"]}>
            Please enter a valid postal code!
          </p>
        )}
      </div>
      <div className={cityClass}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!dataValidity.city && (
          <p className={classes["invalid input"]}>Please enter a valid city!</p>
        )}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
