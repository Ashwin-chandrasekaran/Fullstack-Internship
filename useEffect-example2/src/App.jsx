import React, {useState,useEffect} from "react"
import Todo from "./components/Todo"
function App(){
  const [selectedbutton,setSelectedButton]=useState(1)
  return(
    <>
    <button onClick={function(){
      setSelectedButton(1);
    }}>1</button>
    <button onClick={function(){
      setSelectedButton(2);
    }}>2</button>
    <button onClick={function(){
      setSelectedButton(3);
    }}>3</button>
    <button onClick={function(){
      setSelectedButton(4);
    }}>4</button>
    <Todo id={selectedbutton}/>
    </>
  )
}
export default App