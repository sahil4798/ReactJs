import React from "react";

const ParagraphDemo = (props) => {
  console.log("SubDemo is Running");
  return <p>{props.children}</p>;
};

export default ParagraphDemo;
