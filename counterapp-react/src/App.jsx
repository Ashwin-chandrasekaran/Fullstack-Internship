import React from "react"
import { useState } from "react"
function App(){
  const [count,setCount]=useState(0);
  return(
    <div>
      <CustomButtoncomponent count={count} setCount={setCount}></CustomButtoncomponent>
    </div>

  )
}
function CustomButtoncomponent(props){
  function buttonhandler(){
    props.setCount(props.count+1)
  }
  return(
    <button onClick={buttonhandler}>Count: {props.count}</button>
  )
}
export default App;