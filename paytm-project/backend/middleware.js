const {JWT_SECRET}=require("./config")
const jwt=require("jsonwebtoken")
const express=require("express")
const app=express()
const authmiddleware=(req,res,next)=>{
    const authheaders=req.headers.authorization
    if(!authheaders || !authheaders.startsWith("Bearer ")){
        return res.status(401).json({
            msg:"error!!!"
        })
    }
    const token=authheaders.split(" ")[1]
    try{
        const decoded=jwt.verify(token,JWT_SECRET)
        req.userId=decoded.userId
        next()
    }catch(err){
        return res.status(403).json({
        })
    }
}
module.exports=authmiddleware
