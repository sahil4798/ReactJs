"use client";
import React, { useContext, useState } from "react";
import Header from "./Components/Header";
import { MyContext } from "@/Helper/Context";

const page = () => {
  const [num, setNum] = useState(100);
  const data = useContext(MyContext);

  return (
    <div>
      <h1>{data}</h1>
      <Header num={num}></Header>
    </div>
  );
};

export default page;
