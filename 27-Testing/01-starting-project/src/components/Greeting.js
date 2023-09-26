import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [isClicked, setIsClicked] = useState(false);
  const clickHandler = () => {
    setIsClicked(true);
  };
  return (
    <div>
      <h2>Hello World!</h2>
      {/* <p>Greeting ladies and gentelmen</p> */}
      {!isClicked && <Output>Greeting ladies and gentelmen</Output>}
      {isClicked && <p>Clicked</p>}

      <button onClick={clickHandler}>click</button>
    </div>
  );
};

export default Greeting;
