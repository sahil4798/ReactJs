import { Link } from "react-router-dom";

import classes from "./ListsList.module.css";

const ListsList = (props) => {
  // console.log(props.lists);
  // console.log(props.lists[0].words);
  // const wordObjectLength = Object.keys(props.lists.words).length;
  return (
    <div className={classes.listslist}>
      <h1>Lists</h1>

      <ul className={classes.list}>
        {props.lists.map((list) => (
          <li className={classes.item} key={list.id}>
            <Link to={`/lists/${list.id}`}>
              <div className={classes.content}>
                <h2>{list.title}</h2>
                <p>{`${list.date}, (${
                  list.words ? Object.keys(list.words).length : 0
                } words )`}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListsList;
