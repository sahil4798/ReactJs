import { Form } from "react-router-dom";

import classes from "./EditWordForm.module.css";

const NewWordForm = ({ wordDetails }) => {
  // const formSubmitHandler = (events) => {
  //   events.preventDefault();
  // };

  return (
    <Form method="patch" className={classes.form}>
      <p>
        <label htmlFor="word">Word</label>
        <input
          type="word"
          id="word"
          name="word"
          required
          defaultValue={wordDetails.word}
        ></input>
      </p>
      <div className={classes.actions}>
        <button>submit</button>
      </div>
    </Form>
  );
};

export default NewWordForm;
