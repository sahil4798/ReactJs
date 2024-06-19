import React, { useContext } from "react";
import Navbar from "./Navbar";
import { MyContext } from "@/Helper/Context";

const Header = (props) => {
  const data = useContext(MyContext);
  return (
    <div className="bg-red-200 p-5">
      <h1>
        Header {props.num} {data}
      </h1>
      <Navbar num={props.num} />
    </div>
  );
};

export default Header;
