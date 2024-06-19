import React,{useEffect, useState } from "react"
import Todo from "./components/Todo"
function App(){
  const [todos,setTodos]=useState([])
  useEffect(()=>{
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos").then(
      async(res)=>{
        const json=await res.json()
        setTodos(json.todos) 
      })
    },10000)
  },[])
  return(
    <div>
      {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </div>
  )
  
}
export default App