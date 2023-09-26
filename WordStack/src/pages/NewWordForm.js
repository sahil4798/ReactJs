import { useParams } from "react-router-dom";

import WordForm from "../components/Word/WordForm";

const NewWordForm = () => {
  const params = useParams();
  console.log(params.listId);

  return <WordForm newWordListId={params.listId} method="post" />;
};

export default NewWordForm;

// if (request.method === "POST") {
//   const data = await request.formData();
//   const wordData = { word: data.get("word") };

//   const response = await fetch(
//     "https://wordstack-328d6-default-rtdb.firebaseio.com/lists/" +
//       id +
//       "/words.json",
//     {
//       method: request.method,
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(wordData),
//     }
//   );

//   if (!response.ok) {
//     throw json({ message: "Could not add word to list" }, { status: 500 });
//   }

//   return redirect("/lists/" + id);
// }
