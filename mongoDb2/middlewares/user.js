const express=require("express")
const app=express()
const {Admin, User}=require('../Db/index')
app.use(express.json())
async function Usermiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    const value=await User.findOne({
        username:username,
        password:password
    })
    console.log(value)
    if(value){
        next();
    }else{
        res.status(403).json({
            msg:"User doesnt exist"
        })
    }
}
module.exports=Usermiddleware
