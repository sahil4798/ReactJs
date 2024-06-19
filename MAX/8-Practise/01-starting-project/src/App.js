import React, { useState } from "react";

import Header from "./components/Header/Header.js";
import Form from "./components/Form/Form.js";
import Table from "./components/Table/Table.js";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
    console.log(userInput);
  };

  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header></Header>
      <Form onCalculate={calculateHandler}></Form>
      {!userInput && (
        <p style={{ textAlign: "center" }}>No Investment Calculated Yet</p>
      )}
      {userInput && (
        <Table
          data={yearlyData}
          intialInvestment={userInput["current-savings"]}
        ></Table>
      )}
    </div>
  );
}

export default App;
