import React from "react";
import ParagraphDemo from "./ParagraphDemo";

const Demo = (props) => {
  console.log("Demo is Running");
  // return <p>{props.show ? "Demo Paragraph" : ""}</p>;
  return <ParagraphDemo>{props.show ? "Demo Paragraph" : ""}</ParagraphDemo>;
};

export default React.memo(Demo);
