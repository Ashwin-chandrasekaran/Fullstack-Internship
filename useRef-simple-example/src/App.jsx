import React,{useState,useEffect,useRef} from "react"
function App(){
  const divRef=useRef()
  const totalIncome=200;
  useEffect(()=>{
    setTimeout(()=>{
      divRef.current.innerHTML=300
    },5000)
  })
  return(
    <div>
      hi there, your total income is <div ref={divRef} >{totalIncome}</div>
    </div>
  )
}
export default App