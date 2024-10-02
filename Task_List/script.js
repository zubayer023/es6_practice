// Define UI element

let form = document.querySelector("#task_form");
let taskList = document.querySelector("ul");
let clearBtn = document.querySelector("#clear_task_btn");
let filter = document.querySelector("#task_filter");
let taskInput = document.querySelector("#new_task").value;

//Define event Listener
form.addEventListener("submit", addTask);

//Define Function
//Add Task

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  } else {
    //Creat li element
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(taskInput + " "));
    taskList.appendChild(li);
  }
}
