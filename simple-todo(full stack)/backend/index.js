const express=require("express")
const { createtodo } = require("./types")
const { updatetodo }=require("./types")
const app=express()
const cors=require('cors')
const todo=require("./Db")
app.use(express.json())
app.use(cors())
app.post("/todo",async(req,res)=>{
    const createpayload=req.body
    const parsedpayload=createtodo.safeParse(createpayload)
    if(!parsedpayload){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return
    }
    await todo.create({
        title:createpayload.title,
        description:createpayload.description,
        completed:false
    })
    res.json({
        msg:"todo created"
    })
    
})
app.get("/gettodolist",async (req,res)=>{
    const todos=await todo.find({})
    res.json({
        todos
    })
})
app.put("/completed",async(req,res)=>{
    const createpayload =req.body
    const parsedpayload=updatetodo.safeParse(createpayload)
    if(!parsedpayload){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return
    }
    await todo.updateOne({
        _id:req.body.id
    },
    {
        completed:true
    })
    res.json({
        msg:"todo marked completed"
    })
})
app.listen(3000)