import React from "react";
import Card from "../UI/Card.js";

import classes from "./User.module.css";

const User = (props) => {
  return (
    <Card className={classes.users}>
      <h1 style={{ textAlign: "center" }}>Users</h1>
      <ul>
        {props.data.map((user) => (
          <li key={user.id}>
            {user.name}({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default User;
