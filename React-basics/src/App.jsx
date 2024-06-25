import React, {useState} from "react"
function App(){
  var [count,setCount]=useState(0)
  return(
    <div>
      <button onClick={()=>{
        setCount(++count)
      }}>count is {count}</button>
    </div>
  )
}
export default App