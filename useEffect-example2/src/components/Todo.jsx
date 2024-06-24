import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
export default function Todo({id}){
    const [todo,setTodo]=useState([])
    useEffect(()=>{
        axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`).then
        (async(res)=>setTodo(res.data.todo))
    },[id])
    return(
        <div>
            Id:{id}
            <h1>{todo.title}</h1>
            <h3>{todo.description}</h3>
        </div>
    )
}