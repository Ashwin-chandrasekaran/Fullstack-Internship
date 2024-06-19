import React from "react"
export function Todo({todos}){
    return(
        <div>
            {
                todos.map(function(todo){
                    return (
                        <div>
                            <h2>{todo.title}</h2>
                            <h2>{todo.description}</h2>
                            <button>{todo.completed == true ? "completed" : "mark as completed"}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}