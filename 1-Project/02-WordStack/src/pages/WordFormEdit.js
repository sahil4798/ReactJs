import { useRouteLoaderData, redirect, json } from "react-router-dom";

import EditWordForm from "../components/Word/EditWordForm";

const WordFormEdit = () => {
  const data = useRouteLoaderData("word-detail");

  return <EditWordForm wordDetails={data} />;
};

export default WordFormEdit;

export const action = async ({ request, params }) => {
  const { wordId, listId } = params;
  const method = request.method;
  const formData = await request.formData();
  const wordData = { word: formData.get("word") };

  const response = await fetch(
    "https://wordstack-328d6-default-rtdb.firebaseio.com/lists/" +
      listId +
      "/words/" +
      wordId +
      ".json",
    {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(wordData),
    }
  );
  if (!response.ok) {
    throw json({ message: "Could not edit word" }, { status: 500 });
  }
  // const data = await response.json();
  // console.log(data);

  return redirect("/lists/" + listId + "/" + wordId);
};
