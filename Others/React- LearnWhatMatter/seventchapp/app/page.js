"use client";
import axios from "axios";
import React, { useState } from "react";

const page = () => {
  const getData = async () => {
    const res = await axios.get("https://picsum.photos/v2/list");
    const data = res.data;

    setuUserData(JSON.stringify(data));
    console.log(userData);
  };
  const [userData, setuUserData] = useState("hello");
  return (
    <div>
      <h1>Server Side VS Client Side</h1>
      <button
        className="bg-black text-white p-5 m-10 rounded"
        onClick={getData}
      >
        Get Data
      </button>
      <p>{userData}</p>
    </div>
  );
};

export default page;
