import { Form } from "react-router-dom";

import classes from "./ListForm.module.css";

const ListForm = ({ listData }) => {
  return (
    <Form method="post" className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={listData ? listData.title : ""}
        ></input>
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={listData ? listData.date : ""}
        ></input>
      </p>
      <div className={classes.actions}>
        <button>Add</button>
      </div>
    </Form>
  );
};

export default ListForm;
