import { useRouteLoaderData, json, redirect } from "react-router-dom";
import ListItem from "../components/List/ListItem";

const ListDetail = () => {
  const data = useRouteLoaderData("list-detail");

  return <ListItem list={data} />;
};

export const loader = async ({ request, params }) => {
  const id = params.listId;
  const response = await fetch(
    `https://wordstack-328d6-default-rtdb.firebaseio.com/lists/${id}.json`
  );
  if (!response.ok) {
    throw json({ message: "Could not delete list" }, { status: 500 });
  }
  const data = await response.json();
  data["id"] = id;
  return data;
};

export const action = async ({ request, params }) => {
  const id = params.listId;

  const res = await fetch(
    "https://wordstack-328d6-default-rtdb.firebaseio.com/lists/" + id + ".json",
    {
      method: request.method,
    }
  );

  if (!res.ok) {
    throw json({ message: "Could not delete list" }, { status: 500 });
  }

  return redirect("/lists");
};

export default ListDetail;
