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
    if(todoInput.value.length==0){
        const popupBox = document.createElement("div");
        popupBox.innerText = "Not valid";
        popupBox.classList.add("popup-box");
        document.body.appendChild(popupBox);
        setTimeout(() => {
            popupBox.remove();
        }, 2000);
        return;
    }
    if(todoInput.value.length>20){
        var truncated=todoInput.value.substring(0,50) + "...";
    }else{
        truncated=todoInput.value;
    }
        todos=document.createElement("div");
        todos.classList.add("todos-div");
        listtodo=document.createElement("li");
        listtodo.innerText=truncated;
        listtodo.classList.add("list-todo");
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
        todoList.appendChild(todos);
        tippy(listtodo, {
            content: truncated, // change todoInput.value to truncated
            placement: "bottom",
            width: "auto",
            maxWidth: 2000,
            onShow: (instance) => {
              const todoText = instance.reference.innerText;
              instance.setContent(todoText);
            },
            onHide: (instance) => {
              instance.setContent(truncated); // change todoInput.value to truncated
            },
          });
          todoInput.value = "";
        //   filterTodos();
        }


function checkForButton(event){
    const chooseButton=event.target;
    if(chooseButton.classList[0]==="delete-button"){
        deletefromlocalstrorage(chooseButton.parentElement);
        chooseButton.parentElement.remove();
        todoStatus.children[0].innerHTML;
        
    }
    else if(chooseButton.classList[0]==="complete-button"){
        chooseButton.parentElement.classList.toggle("complete");
    }else if(chooseButton.classList[0]=== "edit-button" && !chooseButton.classList.contains("complete")){
        // console.log(1);
        editList(chooseButton);
    }
    // filterTodos();
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
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));

}
function displayPrevious(){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    localStorage.setItem("todos",JSON.stringify(todos));
    todos.forEach(function(todo){
        const todos1=document.createElement("div");
        todos1.classList.add("todos-div");
        const listtodo=document.createElement("li");
        listtodo.innerText=todo
        listtodo.classList.add("list-todo");
        todos1.appendChild(listtodo);
        const completeButton=document.createElement("button");
        completeButton.innerHTML='<i class="fas fa-check"></i>'
        completeButton.classList.add("complete-button");
        todos1.appendChild(completeButton);
        const deleteButton=document.createElement("button");
        deleteButton.innerHTML='<i class="fas fa-trash"></i>'
        deleteButton.classList.add("delete-button");
        const editButton=document.createElement("button");
        editButton.innerHTML='<i class="fa fa-edit"></i>';
        editButton.classList.add("edit-button");
        todos1.appendChild(deleteButton);
        todos1.appendChild(editButton);
        todoList.appendChild(todos1);
    })

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
    const input1 = parentElement.getElementsByTagName("li")[0].innerHTML;
    todoInput.value = input1;
    parentElement.remove();
  }

  function showfilter(event){
    const filterOption = event.target.value;
    const todos=todoList.getElementsByTagName("div");
    var inputList = Array.from(todos);
    inputList.forEach(function(todo){
        switch(filterOption){
            case "all":
                todo.style.display="flex";
                break;
            case "complete":
                if(todo.classList.contains("complete")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;
            case "incomplete":
                if(!todo.classList.contains("complete")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;
        }
    });
}







