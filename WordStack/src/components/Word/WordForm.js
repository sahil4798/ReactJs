import {
  Form,
  json,
  redirect,
  useNavigation,
  useNavigate,
} from "react-router-dom";

import classes from "./WordForm.module.css";

const WordForm = ({ newWordListId, wordDetails, method }) => {
  const navigation = useNavigation();
  const navigate = useNavigate();

  const isSubmitting = navigation.state === "submitting";
  const isEditing = method === "patch";

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="word">Word</label>
        <input
          type="word"
          id="word"
          name="word"
          required
          defaultValue={wordDetails ? wordDetails.word : ""}
        ></input>
      </p>
      <div className={classes.actions}>
        <button
          type="button"
          onClick={() => {
            !isEditing
              ? navigate(`/lists/${newWordListId}`)
              : navigate(`/lists/${wordDetails.listId}/${wordDetails.wordId}`);
          }}
        >
          Cancel
        </button>
        <button>
          {method === "post"
            ? isSubmitting
              ? "Adding"
              : "Add Word"
            : isSubmitting
            ? "Editing"
            : "Edit Word"}
        </button>
      </div>
    </Form>
  );
};

export default WordForm;

export const action = async ({ request, params }) => {
  const { listId } = params;

  const method = request.method;

  const formData = await request.formData();
  const wordData = { word: formData.get("word") };

  let path =
    "https://wordstack-328d6-default-rtdb.firebaseio.com/lists/" +
    listId +
    "/words.json";
  let redirectPath = "/lists/" + listId;

  if (method === "PATCH") {
    const [wordId] = params.wordId;
    path =
      "https://wordstack-328d6-default-rtdb.firebaseio.com/lists/" +
      listId +
      "/words/" +
      wordId +
      ".json";
    redirectPath = "/lists/" + listId + "/" + wordId;
  }

  const response = await fetch(path, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(wordData),
  });

  if (!response.ok) {
    throw json({ message: "Could not edit word" }, { status: 500 });
  }

  return redirect(redirectPath);
};
