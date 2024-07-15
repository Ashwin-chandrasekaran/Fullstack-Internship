import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./assets/components/Signup"
import Signin from "./assets/components/Signin"
import Dashboard from "./assets/components/Dashboard"
import Send from "./assets/components/Send"
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Send" element={<Send/>}/> 
      </Routes>
    </BrowserRouter>
  )
}