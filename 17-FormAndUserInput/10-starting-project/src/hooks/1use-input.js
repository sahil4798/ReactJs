import { useState } from "react";

const useInput = (validateVal) => {
  const [input, setInput] = useState("");
  const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = validateVal(input);
  const InputIsInvalid = !inputIsValid && inputIsTouched;

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputIsTouched(true);
  };

  const reset = () => {
    setInput("");
    setInputIsTouched(false);
  };

  return {
    input,
    inputIsValid,
    InputIsInvalid,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
