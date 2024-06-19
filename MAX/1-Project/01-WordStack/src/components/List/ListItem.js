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

  return (
    <>
      <div className={classes.listslist}>
        <h1>{list.title}</h1>
        <p>{list.date}</p>

        <ul className={`${classes.list} ${classes.item}`}>
          {words.map((item) => (
            <li key={item.id}>
              <div className={`${classes.content} `}>
                <h2>{item.word}</h2>
                <p>Meaning od {item.word}</p>
                <div className={classes.actions}>
                  <button>delete</button>
                  <Link to="/">edit</Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className={classes.actions}>
          <button onClick={listdeleteHandler}>Delete</button>
          <Link to="edit">Edit</Link>
        </div>
      </div>
      <NewWordForm />
    </>
  );
};

export default ListItem;
