import { Form } from "react-router-dom";

import classes from "./NewWordForm.module.css";

const NewWordForm = () => {
  // const formSubmitHandler = (events) => {
  //   events.preventDefault();
  // };

  return (
    <>
      <h2 className={classes.h2}>Add NewWord</h2>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="word">Word</label>
          <input
            type="word"
            id="word"
            name="word"
            required
            defaultValue=""
          ></input>
        </p>
        <div className={classes.actions}>
          <button>submit</button>
        </div>
      </Form>
    </>
  );
};

export default NewWordForm;
