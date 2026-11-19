import Todo from "./todo.js"
class Project {
    constructor(title) {
        this.title = title
        this.todoList = []
    }

    addTodo(title){
        this.todoList.push(new Todo(title))
    }


}

export default Project