const express=require("express")
const app=express()
const router=express.Router()
const jwt=require("jsonwebtoken")
const {JWT_SECRET}=require("../config")
const { signup, signin, updatebody} = require("../types")
const {User,Admin}=require("../Db")
const authmiddleware = require("../middleware")

router.post("/sign-up",async(req,res)=>{
    const createpayload=req.body
    const {success}=signup.safeParse(createpayload)
    if(!success){
        res.status(401).json({
            msg:"invalid credentials to create an account"
        })
        return
    }
    const existingadmin=await Admin.findOne({
        username:req.body.username
    })
    if(existingadmin){
        res.status(401).json({
            msg:"user already exists"
        })
        return
    }
    const admin=await Admin.create({
        username:req.body.username,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        password:req.body.password
    })
    res.status(200).json({
        msg:"admin created successfully"
    })
})
router.post("/sign-in",async(req,res)=>{
    const createpayload=req.body
    const {success}=signin.safeParse(createpayload)
    if(!success){
        res.status(401).json({
            msg:"invalid credentials for signing in"
        })
        return
    }
    const admin=await Admin.findOne({
        username:req.body.username,
        password:req.body.password
    })
    if(!admin){
        res.status(401).json({
            msg:"invalid username or password"
        })
        return
    }
    const token=jwt.sign({
        userId:admin._id
    },JWT_SECRET)
    res.status(200).json({
        token:token
    })
})
router.put("/",authmiddleware,async(req,res)=>{
    const payload=req.body
    const {success}=updatebody.safeParse(payload)
    if(!success){
        res.status(401).json({
            msg:"invalid credentials for changing"
        })
        return
    }
    await Admin.updateOne({_id:req.userId},payload)
    res.status(200).json({
        msg:"updated successfully"
    })
})
module.exports=router