const {JWT_SECRET}=require("./config")
const express=require("express")
const app=express()
const jwt=require("jsonwebtoken")
const authmiddleware=(req,res,next)=>{
    const authheaders=req.headers.authorization
    if(!authheaders || !authheaders.startsWith("Bearer ")){
        res.status(401).json({
            msg:"Error!!!"
        })
        return
    }
    try{
        const token=authheaders.split(" ")[1]
        const decoded=jwt.verify(token,JWT_SECRET)
        req.userId=decoded.userId
        next()
    }catch(err){
        res.status(401).json({
            msg:err
        })
    }

}
module.exports=authmiddleware
