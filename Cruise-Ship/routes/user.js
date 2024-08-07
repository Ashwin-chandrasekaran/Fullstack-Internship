const express=require("express")
const app=express()
const router=express.Router()
const jwt=require("jsonwebtoken")
const JWT_SECRET=require("../config")
const { signup, signin } = require("../types")
const {User,Admin}=require("../Db")

app.post("/sign-up",async(req,res)=>{
    const createpayload=req.body
    const {success}=signup.safeParse(createpayload)
    if(!success){
        res.status(401).json({
            msg:"invalid credentials to create an account"
        })
        return
    }
    const existinguser=await User.findOne({
        username:req.body.username
    })
    if(existinguser){
        res.status(401).json({
            msg:"user already exists"
        })
        return
    }
    const user=await User.create({
        username:req.body.username,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        password:req.body.password
    })
    res.status(200).json({
        msg:"user created successfully"
    })
})
app.post("/sign-in",async(req,res)=>{
    const createpayload=req.body
    const {success}=signin.safeParse(createpayload)
    if(!success){
        res.status(401).json({
            msg:"invalid credentials for signing in"
        })
        return
    }
    const user=await User.findOne({
        username:req.body.username,
        password:req.body.password
    })
    if(!user){
        res.status(401).json({
            msg:"invalid username or password"
        })
        return
    }
    const token=jwt.sign({
        userId:user._id
    },JWT_SECRET)
    res.status(200).json({
        token:token
    })
})