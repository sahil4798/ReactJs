import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("App is Running ");
  const toggleParagraph = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is New"</p>} */}
      <Demo show={false}></Demo>
      <Button onClick={toggleParagraph}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
