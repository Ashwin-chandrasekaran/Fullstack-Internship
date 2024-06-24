const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ashwin8248:Ashwin007%23@nodeexpresscourse.izryu5r.mongodb.net/todo")
const todoSchema=new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todo',todoSchema)
module.exports=todo