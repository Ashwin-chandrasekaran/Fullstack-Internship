import React, { useContext, useState } from "react"
import { SetCountContext } from "./Context"
function App(){
    const [count,setCount]=useState(0)
    return(
        <div>
            <SetCountContext.Provider value={setCount}>
                <Count count={count}/>
            </SetCountContext.Provider>
        </div>
    )
    
}
function Count({count}){
    
    return(
        <div>
            {count}
            <Buttons count={count}/>
        </div>
    )
}
function Buttons({count}){
    const setCount=useContext(SetCountContext)
    return(
        <div>
            <button onClick={()=>{
                setCount(count+1)
            }}>Increment</button>
            <button onClick={()=>{
                setCount(count-1)
            }}>Decrement</button>
        </div>
    )
}
export default App
