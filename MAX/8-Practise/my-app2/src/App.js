import React, { useState } from "react";
import NewUserForm from "./components/NewUserForm/NewUserForm";
import User from "./components/User/User.js";
import "./App.css";

// const data = [
//   { name: "A", age: 1 },
//   { name: "B", age: 2 },
//   { name: "C", age: 3 },
//   { name: "D", age: 4 },
// ];

function App() {
  const [userData, setUserData] = useState([]);
  const getUserDataHandler = (newUserData) => {
    setUserData((prevUserData) => {
      return [
        ...prevUserData,
        {
          name: newUserData.name,
          age: newUserData.age,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <NewUserForm getUserData={getUserDataHandler}></NewUserForm>
      <User data={userData}></User>
    </div>
  );
}

export default App;
