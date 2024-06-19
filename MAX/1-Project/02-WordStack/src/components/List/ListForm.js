import { Form, redirect, json } from "react-router-dom";

import classes from "./ListForm.module.css";

const ListForm = ({ listData, method }) => {
  return (
    <Form method={method} className={classes.form}>
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

export const action = async ({ request, params }) => {
  const method = request.method;

  const data = await request.formData();
  const listData = {
    title: data.get("title"),
    date: data.get("date"),
  };
  console.log(listData);

  var path = "https://wordstack-328d6-default-rtdb.firebaseio.com/lists.json";

  if (method === "PATCH") {
    const id = params.listId;
    // path=  `https://wordstack-328d6-default-rtdb.firebaseio.com/lists${id}.json `
    path =
      "https://wordstack-328d6-default-rtdb.firebaseio.com/lists/" +
      id +
      ".json";
  }

  const response = await fetch(path, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(listData),
  });
  if (!response.ok) {
    throw json({ message: "Could not save list" }, { status: 500 });
  }
  return redirect("/lists");
};
