import React  ,{ useRef}from "react"

import classes from "./NewTodo.module.css"

const NewTodo: React.FC <{addTodo:(text :string)=>(void) }> = (props)=>{

    const todoTextInputRef = useRef<HTMLInputElement>(null);

    // function todoChangeHandler(event: any){
    //  enteredTodo.current = event.target.value;
    // }

    const submitHandler = (event :React.FormEvent)=>{
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if(enteredText.trim().length===0){
            return;
        }
        props.addTodo(enteredText);
        // todoTextInputRef.current!.value="a"
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