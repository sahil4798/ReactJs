import React from "react";

const Expences = (props) => {
  const { expences } = props;

  return (
    <div>
      <h2>Expences</h2>
      {expences.map((exp) => (
        <div key={exp.id}>
          <p>{exp.title}</p>
          <p>{exp.cost}</p>
          <p>{exp.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Expences;
