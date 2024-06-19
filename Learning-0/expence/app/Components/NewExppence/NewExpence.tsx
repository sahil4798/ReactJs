"use client"
import React, { useState } from 'react'

const NewExpences = () => {
  
  const [title , setTitle] = useState("");
  const [cost , setCost] = useState("");
  const [date , setDate] = useState("");

function titleHandler ( event:any){
    // console.log("title changed")
    // console.log(event.target.type)
    setTitle(event.target.value)
  }

  const amountHandler = (event : any)=>{
  setCost(event.target.value);
  }
  const dateHandler = (event : any)=>{
    console.log(event.target.value)
  setDate(event.target.value);
  }


  return (
    <div>
      <h1>Add Expence</h1>
<form action="">
  <div>
  <label htmlFor="" >title</label>
  <input type="text"  value={title} onChange={titleHandler}/>
  </div>
  <div>
    <label>amount</label>
  <input type="number"  value={cost} onChange={amountHandler}/>
  </div>x
  <div>
<label>date</label>
<input type="date" value={date} onChange={dateHandler}/>
  </div>
  <div>
  <button>submit</button>
  </div>
</form>
    </div>
  )
}

export default NewExpences
