import { Link, useSubmit } from "react-router-dom";

import NewWordForm from "./NewWordForm";

import classes from "./ListItem.module.css";

const ListItem = ({ list }) => {
  const submit = useSubmit();
  const words = [];
  for (const key in list.words) {
    words.push({
      id: key,
      word: list.words[key].word,
    });
  }

  const listdeleteHandler = () => {
    const proceed = window.prompt("Are you sure?");
    if (proceed) {
      submit(null, { method: "delete" });
    }
  };

  // const wordDeleteHandler = () => {
  //   const response = window.prompt("Are you sure?");
  //   if (response) {
  //     submit({ method: "deleteWord" }, null);
  //   }
  // };

  return (
    <>
      <div className={classes.listslist}>
        <h1>{list.title}</h1>
        <p>{list.date}</p>

        <ul className={classes.list}>
          {words.map((item) => (
            <li key={item.id} className={classes.item}>
              <Link to={`${item.id}`}>
                <div className={`${classes.content} `}>
                  <h2>{item.word}</h2>
                  <p>Meaning of {item.word}</p>
                  {/* <div className={classes.actions}>
                    <button onClick={wordDeleteHandler}>delete</button>
                    <button>edit</button>
                  </div> */}
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className={classes.actions}>
          <button onClick={listdeleteHandler}>Delete List</button>
          <Link to="edit">Edit List</Link>
          <Link to="new">Add Word</Link>
        </div>
      </div>
      {/* <NewWordForm /> */}
    </>
  );
};

export default ListItem;
