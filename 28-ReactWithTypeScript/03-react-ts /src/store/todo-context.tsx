import React  , {useState}from "react"

import todo  from "../models/todo"

type TodoContextObj = {
    items : todo[] ;
    addTodo :(text : string)=>(void) ; 
    removeTodo : (id: string)=>( void) 
};

export const TodosContext = React.createContext<TodoContextObj>(
    {
        items : [],
        addTodo :(text : string)=>{},
        removeTodo :(id : string)=>{}
    }
)


const TodosContextProvider : React.FC <{children : any}> = (props) =>{
    const  [todoList , setTodoList]= useState <todo[]>([]);
  
    function addTodoHandler(newTodoText : string){
      const newTodo= new todo( newTodoText );
      setTodoList( (prevState ) => ([...prevState ,newTodo]));
    }
  
    function todoDeleteHandler(todoId  : string){
      setTodoList( (prevState)=>{ return prevState.filter(item=>(item.id!==todoId))} )
    }
    
    const contextValue : TodoContextObj = {
        items : todoList,
        addTodo : addTodoHandler,
        removeTodo  : todoDeleteHandler
    }

    return (
        <TodosContext.Provider value={contextValue}>
        {props.children}
       </TodosContext.Provider>
    )
    
}

export default TodosContextProvider;