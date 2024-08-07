const express=require("express")
const app=express()
const port=3000
const cors=require("cors")
app.use(cors())
app.use(exprss.json())
app.listen(port,()=>{
    console.log("port 3000 is listening")
})