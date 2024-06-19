import React from "react";
import ExpenceForm from "./ExpenceForm";

const NewExpences = (props) => {
  const level2 = (newExp) => {
    const exp = { ...newExp, id: Math.random().toString() };
    props.level3(exp);
  };

  return (
    <div>
      <h3>Add Expence</h3>
      <ExpenceForm level1={level2} />
    </div>
  );
};

export default NewExpences;
