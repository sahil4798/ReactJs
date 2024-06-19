import "./App.css";

import React, { useState } from "react";

import Expences from "./Components/Expences/Expences";
import NewExpence from "./Components/NewExpence/NewExpence";

const exp = [
  { title: "cosmetic", cost: 620, date: "2024-05-18", id: 0 },
  { title: "snack", cost: 1000, date: "2024-05-30", id: 1 },
  { title: "electic-bill", cost: 500, date: "2024-06-01", id: 2 },
];

function App() {
  const [expences, setExpences] = useState(exp);

  const getNewExpence = (expence) => {
    console.log(expence);
    setExpences((prev) => {
      return [...prev, expence];
    });
  };
  return (
    <div>
      <h1>Expences</h1>
      <NewExpence level3={getNewExpence} />
      <Expences expences={expences} />
    </div>
  );
}

export default App;
