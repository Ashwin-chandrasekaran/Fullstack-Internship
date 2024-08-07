const express=require("express")
const app=express()
const port=3000
const cors=require("cors")
app.use(cors())
app.use(express.json())
const mainRouter=require("./routes/index")
app.use("/api/v2",mainRouter)
app.listen(port,()=>{
    console.log("port 3000 is listening")
})