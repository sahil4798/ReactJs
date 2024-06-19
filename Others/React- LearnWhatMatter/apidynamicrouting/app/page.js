"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

function page() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/users");
    const data = res.data;
    setUsers(data);
    // console.log(data);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <button
        className="bg-green-600 border-2px rounded text-white px-4 py-2"
        onClick={getUsers}
      >
        Get Data
      </button>
      <div className="bg-slate-100 p-8 mt-5">
        <ul>
          {users.map((u) => {
            return (
              <li key={u.id}>
                {u.username}-- <a href={`/${u.id}`}>Explore</a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default page;
