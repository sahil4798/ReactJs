import React  ,{ useRef , useContext}from "react"
import {TodosContext}  from "../store/todo-context"


import classes from "./NewTodo.module.css"

const NewTodo: React.FC  = ()=>{
    
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const todoCtx= useContext(TodosContext)


    const submitHandler = (event :React.FormEvent)=>{
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length===0){
            return;
        }
        todoCtx.addTodo(enteredText);
    }

return (

    <form onSubmit={submitHandler} className={classes.form} >
    <div>
     <label htmlFor="todo">Enter a todo</label>
     <input  
     type="text"
     id ="todo" 
     //  value={todoTextInputRef.current?.value} 
     //  onChange={todoChangeHandler} 
     ref={todoTextInputRef}
     ></input>
    </div>
    <button>Add</button>
     </form>

)

}

export default NewTodo