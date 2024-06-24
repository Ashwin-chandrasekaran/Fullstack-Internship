import React from "react"
export default function Todo({title,description}){
    return(
        <div>
            <h1>{title}</h1>
            <h3>{description}</h3>
        </div>
    
    )
}