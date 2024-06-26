import React, {lazy}from "react"
import { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

const Dashboard = lazy(()=> import("./components/Dashboard"))
const Landingpage = lazy(()=> import("./components/Landingpage"))

function App(){

  return(
    <div>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path="/" element={<Suspense fallback={"loading..."}>{<Landingpage/>}</Suspense>}></Route>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}>{<Dashboard/>}</Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
function Appbar(){
  const navigate=useNavigate()
  return(
<div>
    <button onClick={()=>{
      //location.href="/" *not to use
      navigate("/")
    }}>Landingpage</button>
    <button onClick={()=>{
      //location.href="/dashboard" *not to use
      navigate("/dashboard")
    }}>Dashboard</button>
</div>
)}
export default App