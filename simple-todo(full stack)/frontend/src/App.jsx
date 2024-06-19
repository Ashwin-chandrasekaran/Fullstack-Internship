import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from "react"
import { Createtodo } from './Components/Createtodo'
import { Todo } from './Components/todo'

function App() {
  const [todos, setTodos] = useState([])
  
    useEffect(() => {
      fetch("http://localhost:3000/gettodolist").then(
        async()=>{
          const json=await res.json()
          setTodos(json.todos)
        }
      )

    }, []);

  return (
    <div>
      <Createtodo/>
      <Todo todos={todos}/>
    </div>
  )
}


export default App
