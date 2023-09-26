import { useRouteLoaderData, json, redirect } from "react-router-dom";

import ListForm from "../components/List/ListForm";

const Edit = () => {
  const data = useRouteLoaderData("list-detail");
  return <ListForm listData={data} />;
};

export const action = async ({ request, params }) => {
  // console.log("action");

  const id = params.listId;
  const data = await request.formData();
  const listData = {
    title: data.get("title"),
    date: data.get("date"),
  };
  console.log(listData);

  const response = await fetch(
    "https://wordstack-328d6-default-rtdb.firebaseio.com/lists/" + id + ".json",
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listData),
    }
  );
  if (!response.ok) {
    throw json({ message: "Could not edit list" }, { status: 500 });
  }
  return redirect(`/lists/${id}`);
};

export default Edit;
