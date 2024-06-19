import classes from "./NewWordForm.module.css";

const NewWordForm = () => {
  const formSubmitHandler = (events) => {
    events.preventDefault();
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <p>
        <label htmlFor="word">Word</label>
        <input type="word" id="word"></input>
      </p>
      <div className={classes.actions}>
        <button>submit</button>
      </div>
    </form>
  );
};

export default NewWordForm;
