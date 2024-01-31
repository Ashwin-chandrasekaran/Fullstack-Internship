const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const todoStatus=document.querySelector(".status");


let listtodo;
let todos;

document.addEventListener('DOMContentLoaded', displayPrevious);
todoButton.addEventListener('click',addlist);
todoList.addEventListener('click', checkForButton);
todoStatus.addEventListener('change', showfilter);
function addlist(event){
    event.preventDefault();
    let pattern = /[a-zA-Z0-9]/;
    if(todoInput.value.length==0 || !pattern.test(todoInput.value)){
        const popupBox = document.createElement("div");
        popupBox.innerText = "Not valid";
        popupBox.classList.add("popup-box");
        document.body.appendChild(popupBox);
        setTimeout(() => {
            popupBox.remove();
        }, 2000);
        return;
    }
    todoInput.value=todoInput.value.toLowerCase();
    if(todoInput.value.length>=36){
        var truncated=todoInput.value.substring(0,36) + "...";
    }else{
        truncated=todoInput.value;
    }
        todos=document.createElement("div");
        todos.classList.add("todos-div");
        listtodo=document.createElement("li");
        listtodo.innerText=truncated;
        listtodo.classList.add("list-todo");
        listtodo.setAttribute('title', todoInput.value);
        todos.appendChild(listtodo);
        createlocalStorage(truncated);
        const completeButton=document.createElement("button");
        completeButton.innerHTML='<i class="fas fa-check"></i>'
        completeButton.classList.add("complete-button");
        todos.appendChild(completeButton);
        const deleteButton=document.createElement("button");
        deleteButton.innerHTML='<i class="fas fa-trash"></i>'
        deleteButton.classList.add("delete-button");
        const editButton=document.createElement("button");
        editButton.innerHTML='<i class="fa fa-edit"></i>';
        editButton.classList.add("edit-button");
        todos.appendChild(deleteButton);
        todos.appendChild(editButton);
        if(todoStatus.value==="all" || todoStatus.value === "incomplete"){
            todoList.appendChild(todos);
        }
        todoInput.value = "";
        showfilter();
        if (todoStatus.value === "incomplete") {
            const noTasksMessage = document.querySelector(".no-tasks-message");
            if (noTasksMessage) {
              noTasksMessage.remove();
            }
          }
          todoInput.value = "";
        }


function checkForButton(event){
    const chooseButton=event.target;
    if(chooseButton.classList[0]==="delete-button"){
        deletefromlocalstrorage(chooseButton.parentElement);
        chooseButton.parentElement.remove();
        todoStatus.children[0].innerHTML;
        
    }
    else if(chooseButton.classList[0]==="complete-button"){
        const parentDiv = chooseButton.parentElement;
        chooseButton.parentElement.classList.toggle("complete");
        updateCompletionStatus(parentDiv);
    }else if(chooseButton.classList[0]=== "edit-button" && !chooseButton.classList.contains("complete")){
        editList(chooseButton);
    }
}
function showfilter(event){
    filterTodos();
}
function createlocalStorage(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    const todoItem = {
        todo: todo,
        completed: false // Set the initial status as false (not completed)
      };
      
      todos.push(todoItem);
      localStorage.setItem("todos", JSON.stringify(todos));

}
function displayPrevious() {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
  
    todoList.innerHTML = ""; // Clear the current list
  
    todos.forEach(function (todo) {
      const todos1 = document.createElement("div");
      todos1.classList.add("todos-div");
      const listtodo = document.createElement("li");
      listtodo.innerText = todo.todo;
      listtodo.classList.add("list-todo");
      listtodo.setAttribute("title", todo.todo);
      todos1.appendChild(listtodo);
  
      // Check if the task is completed and add the corresponding class
      if (todo.completed) {
        todos1.classList.add("complete");
      }
  
      const completeButton = document.createElement("button");
      completeButton.innerHTML = '<i class="fas fa-check"></i>';
      completeButton.classList.add("complete-button");
      todos1.appendChild(completeButton);
  
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
      deleteButton.classList.add("delete-button");
  
      const editButton = document.createElement("button");
      editButton.innerHTML = '<i class="fa fa-edit"></i>';
      editButton.classList.add("edit-button");
  
      todos1.appendChild(deleteButton);
      todos1.appendChild(editButton);
  
      if (todoStatus.value === "all") {
        todoList.appendChild(todos1);
      } else if (todoStatus.value === "complete" && todo.completed) {
        todoList.appendChild(todos1);
      } else if (todoStatus.value === "incomplete" && !todo.completed) {
        todoList.appendChild(todos1);
      }
    });
  }
function deletefromlocalstrorage(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    localStorage.setItem("todos",JSON.stringify(todos));
    const todotext=todo.children[0].innerText;
    todos.splice(todos.indexOf(todotext),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}
function editList(event) {
    const parentElement = event.parentElement;
    if (parentElement.classList.contains("complete")) {
      // if the parent element has the "complete" class, editing should not be allowed
      return;
    }
    const input1 = parentElement.getElementsByTagName("li")[0].getAttribute("title");
    todoInput.value = input1;
    parentElement.remove();
  }

  function showfilter(event) {
    const filterOption = event.target.value;
    const todos = JSON.parse(localStorage.getItem("todos"));
    todoList.innerHTML = ""; 
  
    todos.forEach(function (todo) {
      const todos1 = document.createElement("div");
      todos1.classList.add("todos-div");
      const listtodo = document.createElement("li");
      listtodo.innerText = todo.todo;
      listtodo.classList.add("list-todo");
      listtodo.setAttribute("title", todo.todo);
      todos1.appendChild(listtodo);
  
      if (todo.completed) {
        todos1.classList.add("complete");
      }
  
      const completeButton = document.createElement("button");
      completeButton.innerHTML = '<i class="fas fa-check"></i>';
      completeButton.classList.add("complete-button");
      todos1.appendChild(completeButton);
  
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
      deleteButton.classList.add("delete-button");
  
      const editButton = document.createElement("button");
      editButton.innerHTML = '<i class="fa fa-edit"></i>';
      editButton.classList.add("edit-button");
  
      todos1.appendChild(deleteButton);
      todos1.appendChild(editButton);
  
      // Check the filter option to decide whether to display the task
      if (filterOption === "all") {
        todoList.appendChild(todos1);
      } else if (filterOption === "complete" && todo.completed) {
        todoList.appendChild(todos1);
      } else if (filterOption === "incomplete" && !todo.completed) {
        todoList.appendChild(todos1);
      }
    });
  
    if (filterOption === "complete" && todoList.innerHTML === "") {
      displayNoTasksMessage("No completed tasks");
    } else if (filterOption === "incomplete" && todoList.innerHTML === "") {
      displayNoTasksMessage("No incomplete tasks");
    }
    // if (noTasksMessage) {
    //     noTasksMessage.remove();
    //   }
  }
  
function updateCompletionStatus(todoItem) {
    const todos = JSON.parse(localStorage.getItem("todos"));
    const todoText = todoItem.querySelector(".list-todo").innerText;
  
    // Find the corresponding todo item in the array
    const updatedTodos = todos.map(function (item) {
      if (item.todo === todoText) {
        item.completed = todoItem.classList.contains("complete");
      }
      return item;
    });
  
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }
  function displayNoTasksMessage(message) {
    const noTasksMessage = document.createElement("div");
    noTasksMessage.innerText = message;
    noTasksMessage.classList.add("no-tasks-message");
    todoList.appendChild(noTasksMessage);
  }
