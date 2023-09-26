import React from "react";
import todo from "../models/todo"
import TodoItem from "./TodoItem"

import classes from "./Todos.module.css"

// function ToDo (props:{todo:string[] , children : any}){

const Todos : React.FC<{items : todo[] , todoDelete : (id : string)=>(void)}> = (props)=>{
    
    const todos = props.items.map( item => <TodoItem text={item.text}  key={item.id} todoDelete={props.todoDelete.bind(null , item.id)}/> )

    return (
    <ul className={classes["todos"]}>
       {todos}
    </ul>
)
}

export default Todos;