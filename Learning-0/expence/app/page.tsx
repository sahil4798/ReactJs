"use client";

import NewExpence from "./Components/NewExppence/NewExpence";
import Expences from "./Components/Expences/Expences";

const expences = [
  {title : "cosmetic" , cost : 620 , date: "2024-05-18"},
  {title : "snack" , cost : 1000 , date: "2024-05-30"},
  {title : "electic-bill" , cost : 500 , date: "2024-06-01"},

]

export default function Home() {
  return (
   <div>
    <h1>Expences</h1>
    <NewExpence />
    <Expences />
   </div>
  );
}
