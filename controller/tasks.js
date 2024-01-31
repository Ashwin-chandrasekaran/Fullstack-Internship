const Task=require('../models/tasks')
const asyncWrapper=require('../middleware/async')
const getAllTasks=asyncWrapper(async (req,res)=>{
    
    const task=await Task.find({})
    res.status(200).json({task})
})
const createTask=asyncWrapper(async (req,res)=>{
   
    const task= await Task.create(req.body)
    res.status(201).json({task})
    
})
const getTask=asyncWrapper(async (req,res)=>{
        const {id:taskId}=req.params
        const task=await Task.findOne({_id:taskId})
        if(!task){
            return res.status(404).json({msg:'the taskid specified is incorrect'})
        }
        res.status(201).json({task})
    
})
const updateTask=asyncWrapper(async (req,res)=>{
        const {id:taskId}=req.params
        const task=await Task.findOneAndUpdate({_id:taskId},req.body,{new:true,runValidators:true})
        if(!task){
            return res.status(404).json({msg:"the id provided is imcorrect"})
        }
        res.status(200).json({task})
})
const deleteTask=asyncWrapper(async (req,res)=>{
        const {id:taskId}=req.params;
        const task=await Task.findOneAndDelete({_id:taskId})
        if(!task){
            return res.status(404).json({msg:"the specified id is incorrect"})
        }
        res.status(201).json({task})
    
})
module.exports={getAllTasks,createTask,getTask,updateTask,deleteTask}