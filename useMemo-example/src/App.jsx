import React from "react"
import { useEffect } from "react"
import { useState } from "react"
function App(){
  const [counter,setCounter]=useState(0)
  const [inputvalue,setInputvalue]=useState(0)
  let count=useEffect(()=>{
    let finalcount=0;
    for(let i=0;i<=inputvalue;i++){
      finalcount=finalcount+i;
    }
    return finalcount
  },[inputvalue])
  return(
    <>
      <input onChange={function(e){
        setInputvalue(e.target.value)
      }}></input>
      <br></br>
      <h3>the final sum is {count}</h3>
      <button onClick={function(){
        setCounter(count+1)
      }}>count is {counter}</button>
    </>
  )
}
export default App