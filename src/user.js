import Project from "./project.js"
import Todo from "./todo.js"
class User {
    userName
    userSlogan
    projectList = []

    constructor(userName, userSlogan) {
        this.userName = userName
        this.userSlogan = userSlogan
    }

    addProject(title) {
        const project = new Project(title)
        this.projectList.push(project)
        return project
    }

    addTodo(title) {
        this.projectList.push(new Todo(title))
    }
}

export default User