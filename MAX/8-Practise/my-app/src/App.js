import React, { useState } from "react";
import NewUserForm from "./components/NewUserForm/NewUserForm";
import User from "./components/User/User.js";
import Error from "./components/Error/Error.js";
import "./App.css";

// const data = [
//   { name: "A", age: 1 },
//   { name: "B", age: 2 },
//   { name: "C", age: 3 },
//   { name: "D", age: 4 },
// ];

function App() {
  const [userData, setUserData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");
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
  const getErrorHandler = (mes) => {
    setMessage(mes);
    setIsError(true);
  };
  const removeErrorHandler = () => {
    setIsError(false);
  };

  return (
    <div>
      <NewUserForm
        getUserData={getUserDataHandler}
        getError={getErrorHandler}
      ></NewUserForm>
      <User data={userData}></User>
      {isError && (
        <Error message={message} removeError={removeErrorHandler}></Error>
      )}
    </div>
  );
}

export default App;
