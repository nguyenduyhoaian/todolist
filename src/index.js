import "./style.css";
import User from "./user.js"

function displayItem(item, parent) {
    const display = document.createElement("button")
    display.textContent = item.title
    parent.appendChild(display)
}

const sidebar = document.getElementById("sidebar")
sidebar.classList="sidebar"
sidebar.textContent = "List các project ở đây"

const addProjectBtn = document.createElement("button")
addProjectBtn.textContent = "Tạo project mới"
addProjectBtn.addEventListener("click", (e) => {
    const newProject = myTodo.addProject("New project");
    displayItem(newProject, sidebar)
})

sidebar.appendChild(addProjectBtn)

const myTodo = new User()