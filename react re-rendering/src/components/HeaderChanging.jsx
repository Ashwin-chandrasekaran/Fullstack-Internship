import React, { useState } from "react"
import Header from "./Header"
export default function HeaderChanging(){
    const [firsttitle,setTitle] = useState("my name is ashwin")
    function changeTitle(){
        setTitle("my name is" + Math.random())
    }
    return (
        <div>
            <button onClick={changeTitle}>change the name</button>
            <Header title={firsttitle}/>
        </div>
    )
}
