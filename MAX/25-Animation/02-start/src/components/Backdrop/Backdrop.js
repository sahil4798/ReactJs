import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  const cssClass = ["Backdrop", props.show ? "BackDropOpen" : "BackdropClose"];
  return <div className={cssClass.join(" ")}></div>;
};

export default backdrop;
