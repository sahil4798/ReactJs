"use client";

import { MyContext } from "@/Helper/Context";
import React, { useContext } from "react";

const page = () => {
  const data = useContext(MyContext);
  console.log(data);
  return <div>Home Page {data}</div>;
};

export default page;
