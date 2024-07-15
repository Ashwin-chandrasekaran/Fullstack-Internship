import React, {useState} from "react"
import Heading from "./Heading";
import Subheading from "./Subheading";
import Inputbox from "./Inputbox";
import Button from  "./Button"
import Bottomwarning from "./Bottomwarning";
import axios from "axios"


export default function Signup(){
    const [firstname,setFirstname]=useState("")
    const [lastname,setLastname]=useState("")
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="rounded-lg border border-white bg-white w-80 h-full text-center p-2 px-4">
                <Heading label={"Sign Up"}/>
                <Subheading label={"Enter your information to create an account"}/>
                <Inputbox onchange={(e)=>{
                    setFirstname(e.target.value)
                }} placeholder="john" label={"Firstname"}/> 
                <Inputbox onchange={(e)=>{
                    setLastname(e.target.value)
                }} placeholder="Doe" label={"Lastname"}/>
                <Inputbox onchange={(e)=>{
                    setUsername(e.target.value)
                }}placeholder="johnDoe@gmail.com" label={"Username"}/>
                <Inputbox onchange={(e)=>{
                    setPassword(e.target.value)
                }}placeholder="password" label={"Password"}/> 
                <div>
                    <Button onClick={async()=>{
                        console.log("triggered")
                        const response=await axios.post("http://localhost:3000/api/v1/user/sign-up",{
                            firstname,
                            lastname,
                            username,
                            password
                        })
                        localStorage.setItem("token",response.data.token)
                    }} label={"Sign up"}/>
                </div>
                <div>
                    <Bottomwarning label={"Already have an account?"} buttontext={"Sign in"} to={"/sign-in"}/>
                </div>
            </div>
        </div>
        
    )
}