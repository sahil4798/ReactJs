// type DUMMY_TODO = {id:string , todo :string}[]

class Todo {
      id :string
      text : string

constructor(todoText : string){
this.text = todoText
this.id = new Date().toISOString()
}

}

export default Todo;