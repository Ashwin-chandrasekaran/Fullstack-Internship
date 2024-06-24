import React, { useState } from "react"
import Header from "./components/Header"
import HeaderChanging from "./components/HeaderChanging"
function App(){
  return(
    <div>
      <HeaderChanging/>
      <Header title={"my name is ashwin"}/>
    </div>
  )
}
export default  App