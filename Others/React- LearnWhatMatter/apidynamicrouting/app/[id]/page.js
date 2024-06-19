"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const { id } = params;

  const [user, setUser] = useState({});
  const getUser = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/users/" + id);
    const data = res.data;
    setUser(data);
    console.log(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <h1>Page {id} </h1>
      <h2>{user.username}</h2>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
      <h2>{user.phone}</h2>
      <h2>{user.website}</h2>
      <hr></hr>
      <p>{JSON.stringify(user)}</p>
      <hr></hr>
    </>
  );
};

export default page;
