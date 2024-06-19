import { useReducer } from "react";

const initState = { value: "", isTouched: false };

const dispatchfun = (state, action) => {
  if (action.type === "VALUEINPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "STATETOUCHED") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return initState;
};

const useInput = (validateVal) => {
  const [state, func] = useReducer(dispatchfun, initState);

  //   const [input, setInput] = useState("");
  //   const [inputIsTouched, setInputIsTouched] = useState(false);

  const inputIsValid = validateVal(state.value);
  const InputIsInvalid = !inputIsValid && state.isTouched;

  const inputChangeHandler = (event) => {
    // setInput(event.target.value);
    func({ type: "VALUEINPUT", value: event.target.value });
  };

  const inputBlurHandler = () => {
    // setInputIsTouched(true);
    func({ type: "STATETOUCHED" });
  };

  const reset = () => {
    func({ type: "RESET" });
    // setInputIsTouched(false);
  };

  return {
    input: state.value,
    inputIsValid,
    InputIsInvalid,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
