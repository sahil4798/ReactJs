import { json, redirect } from "react-router-dom";

import ListForm from "../components/List/ListForm";

const NewList = () => {
  console.log("NewList");
  return <ListForm />;
};

export const action = async ({ request, params }) => {
  console.log("action");

  const data = await request.formData();
  const listData = {
    title: data.get("title"),
    date: data.get("date"),
  };
  console.log(listData);

  const response = await fetch(
    "https://wordstack-328d6-default-rtdb.firebaseio.com/lists.json",
    {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listData),
    }
  );
  if (!response.ok) {
    throw json({ message: "Could not save list" }, { status: 500 });
  }
  return redirect("/lists");
};

export default NewList;
