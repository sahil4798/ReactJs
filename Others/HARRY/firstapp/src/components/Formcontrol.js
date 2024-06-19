import React, { useState } from "react";

const Formcontrol = (props) => {
  const [text, setText] = useState("");

  const clickUpHandler = () => {
    console.log(text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const clickCLHandler = () => {
    // let name = "";
    // console.log(name.length);
    // if (name.charAt(name.length - 1) === "") {
    //   console.log(name.split(" ").length - 1);
    // } else {
    //   console.log(name.split(" ").length);
    // }
    // console.log(name.charAt(name.length - 1));

    setText("");
  };

  const clickLowHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const inputChangeHandler = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };
  return (
    <>
      <h1>{props.text}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="15"
          value={text}
          onChange={inputChangeHandler}
        ></textarea>
        <button
          type="button"
          className="btn btn-primary my-2 mx-1"
          onClick={clickUpHandler}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary my-2 mx-1"
          onClick={clickLowHandler}
        >
          Convert to Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary my-2 mx-1"
          onClick={clickCLHandler}
        >
          Clear
        </button>
      </div>

      <div className="container my-3">
        <h2>Synopcis</h2>
        let words = 0 ;
        <p>
          words-{text.split(" ").length} charater-{text.length}
        </p>
        <p>assimated time for read {text.split(" ").length * 0.008} minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Formcontrol;
