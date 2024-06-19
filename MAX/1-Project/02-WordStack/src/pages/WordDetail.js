import { json, useRouteLoaderData, redirect } from "react-router-dom";

import WordItem from "../components/Word/WordItem";

const WordDetail = () => {
  const data = useRouteLoaderData("word-detail");

  return <WordItem wordDetails={data} />;
};

export default WordDetail;

export const loader = async ({ request, params }) => {
  const { listId, wordId } = params;

  const response = await fetch(
    "https://wordstack-328d6-default-rtdb.firebaseio.com/lists/" +
      listId +
      "/words/" +
      wordId +
      ".json"
  );
  const data = await response.json();

  if (!response.ok) {
    throw json({ message: "Could not fetch data of word" }, { status: 5000 });
  }

  return data;
};

export const action = async ({ request, params }) => {
  const { listId, wordId } = params;

  const response = await fetch(
    "https://wordstack-328d6-default-rtdb.firebaseio.com/lists/" +
      listId +
      "/words/" +
      wordId +
      ".json",

    { method: request.method }
  );

  if (!response.ok) {
    throw json({ message: "Could not delete word" }, { status: 500 });
  }

  return redirect("/lists/" + listId);
};
