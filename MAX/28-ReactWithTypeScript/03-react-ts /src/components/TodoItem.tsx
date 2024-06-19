import React from "react";

import classes from "./TodoItem.module.css"

const TodoItem : React.FC<{text : string , todoDelete : ()=>(void)}> =(props)=>{

    return <li className={classes["item"]} onClick={props.todoDelete}>{props.text}</li>

}

export default TodoItem;