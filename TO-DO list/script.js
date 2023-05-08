const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const todoStatus=document.querySelector(".status");
// const edit=document.querySelector(".edit-button");

let listtodo;
let todos;

document.addEventListener('DOMContentLoaded', displayPrevious);
todoButton.addEventListener('click',addlist);
todoList.addEventListener('click', checkForButton);
todoStatus.addEventListener("click", showfilter);
// edit.addEventListener('click',editList);
// window.addEventListener("DOMContentLoaded", (event) => {
//     const edit = document.querySelector('.edit-button');
//     if (edit) {
//       edit.addEventListener('click', editList);
//     }
// });
function addlist(event){
    event.preventDefault();
    if(todoInput.value===""){
        const popup=document.createElement("div");
        popup.classList.add("pop-up");
        popup.innerHTML="invalid input";
    }else{
        todos=document.createElement("div");
        todos.classList.add("todos-div");
        listtodo=document.createElement("li");
        listtodo.innerText=todoInput.value;
        listtodo.classList.add("list-todo");
        todos.appendChild(listtodo);
        createlocalStorage(todoInput.value);
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
        todoInput.value="";
    }

}
// var edit=document.querySelector(".edit-button");
// edit.addEventListener('click',editList);

function checkForButton(event){
    const chooseButton=event.target;
    if(chooseButton.classList[0]==="delete-button"){
        // chooseButton.parentElement.classList.add("rotate");
        // chooseButton.addEventListener('transitionend', ()=>{
        //     chooseButton.parentElement.remove();
        // });
        deletefromlocalstrorage(chooseButton.parentElement);
        chooseButton.parentElement.remove();
    }
    else if(chooseButton.classList[0]==="complete-button"){
        chooseButton.parentElement.classList.toggle("complete");
    }else if(chooseButton.classList[0]==="edit-button"){
        const editing=chooseButton.parentElement.parentElement.getElementsByTagName("li");
        const editing1=editing[0].innerHTML;
        editList(chooseButton);
    }
}
function showfilter(evevnt){
    const todos=todoList.getElementsByTagName("div");
    var inputList = Array.prototype.slice.call(todos);
    console.log(inputList);
    inputList.forEach(function(todo){
        switch(event.target.value){
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
function editList(event){
    const input1=event.parentElement.getElementsByTagName("li")[0].innerHTML;
    todoInput.value=input1;
    event.parentElement.remove();
    // deletefromlocalstrorageedit(event.parentElement);

}
// function deletefromlocalstrorageedit(todo){
//     let todos;
//     if(localStorage.getItem("todos")===null){
//         todos=[];
//     }else{
//         todos=JSON.parse(localStorage.getItem("todos"));
//     }
//     localStorage.setItem("todos",JSON.stringify(todos));
//     const todotext=todo[0].innerText;
//     todos.splice(todos.indexOf(todotext),1);
//     localStorage.setItem("todos",JSON.stringify(todos));
// }
