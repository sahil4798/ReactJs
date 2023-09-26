import { useRouteLoaderData } from "react-router-dom";

import WordForm from "../components/Word/WordForm";

const EditWordForm = () => {
  const data = useRouteLoaderData("word-detail");
  return <WordForm wordDetails={data} method="patch" />;
};

export default EditWordForm;

// const method = request.method;
// const { listId } = params;
// const formData = await request.formData();
// const wordData = { word: formData.get("word") };

// let url, redirectPath;
// if (method === "PATCH") {
//   console.log(method);
//   const { wordId } = params;
//   url =
//     "https://wordstack-328d6-default-rtdb.firebaseio.com/lists/" +
//     listId +
//     "/words/" +
//     wordId +
//     ".json";
//   redirectPath = "/lists/" + listId + "/" + wordId;
// }

// const response = await fetch({
//   url,
//   method: method,
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(wordData),
// });
// if (!response.ok) {
//   throw json({ message: "Could not edit word" }, { status: 500 });
// }

// return redirect(redirectPath);
