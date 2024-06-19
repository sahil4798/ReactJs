import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App is Running ");
  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowtoggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is New"</p>} */}
      <Demo show={showParagraph}></Demo>
      <Button onClick={allowtoggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraph}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
