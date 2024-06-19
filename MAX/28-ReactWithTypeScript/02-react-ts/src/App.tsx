import {useState} from "react"

import Todos from "./components/Todos"
import todo from "./models/todo"
import NewTodo from "./components/NewTodo"

// const todos = [ new todo("Learn React" ) , new todo("Learn TypeScript")]

function App() {
  const  [todoList , setTodoList]= useState <todo[]>([]);
  
  function addTodoHandler(newTodoText : string){
    const newTodo= new todo( newTodoText );
    setTodoList( (prevState ) => ([...prevState ,newTodo]));
  }

  function todoDeleteHandler(todoId  : string){
    setTodoList( (prevState)=>{ return prevState.filter(item=>(item.id!==todoId))} )
  }
  
  return ( 
    <div >
       <NewTodo addTodo={addTodoHandler} />
       <Todos items={todoList} todoDelete={todoDeleteHandler}/>
    </div>
  );
}

export default App;
