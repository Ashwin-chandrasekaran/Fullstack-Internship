import React from "react"
import {Revenuecard} from "./components/Revenuecard"
export default function App(){
  return(
    <div className="grid grid-cols-4">
      <Revenuecard 
        title={"Amount Pending"} amount={"₹92,312.20"} ordercount={13}/>
    </div>
  )
}