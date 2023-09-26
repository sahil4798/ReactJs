import { Form, useNavigation } from "react-router-dom";

import classes from "./NewWordForm.module.css";

const NewWordForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

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
          <button>{isSubmitting ? "Adding..." : "Add Word"}</button>
        </div>
      </Form>
    </>
  );
};

export default NewWordForm;
