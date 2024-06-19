import { useContext } from "react";
import {TodosContext}  from "../store/todo-context"

import TodoItem from "./TodoItem"
import classes from "./Todos.module.css"

    
    const Todos : React.FC = ()=>{
    const todosCtx= useContext(TodosContext)
    
    const todos = todosCtx.items.map( item => <TodoItem text={item.text}  key={item.id} todoDelete={todosCtx.removeTodo.bind(null , item.id)}/> )

    return (
    <ul className={classes["todos"]}>
       {todos}
    </ul>
)
}

export default Todos;