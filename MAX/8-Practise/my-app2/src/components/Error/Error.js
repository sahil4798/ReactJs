import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./Error.module.css";

const Error = (props) => {
  const cancelHandler = () => {
    props.onCancel();
  };
  return (
    <div>
      <div className={classes.backdrop} onClick={cancelHandler}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h1>{props.title}</h1>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={cancelHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Error;
