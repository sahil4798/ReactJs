import { Link, Form } from "react-router-dom";

import classes from "./WordItem.module.css";

const WordItem = ({ wordDetails }) => {
  return (
    <div className={classes.listslist}>
      <h1>Word Detail</h1>
      <h4>{wordDetails.word}</h4>
      <div className={classes.actions}>
        <Form method="delete">
          <button>Delete Word</button>
        </Form>
        <Link to="edit">Edit Word</Link>
      </div>
    </div>
  );
};

export default WordItem;
