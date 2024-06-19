import React from "react"
export function Createtodo(){
    return(
        <div>
            <input id="title" type="text" placeholder="title"></input><br></br>
            <input id="description" type="text" placeholder="description"></input><br></br>
            <button>Add Todo</button>
        </div>
    )
}