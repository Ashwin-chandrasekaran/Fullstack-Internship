import React from "react"
import App from "../App"
export const Revenuecard=({title,amount,ordercount})=>{
    return(
        <div>
            <div>
                {title}
            </div>
            <div className="flex justify-between">
                <div>
                    {amount}
                </div>
                <div>
                    {ordercount} Orders
                </div>
            </div>
        </div>
    )
}