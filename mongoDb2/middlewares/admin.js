const express=require("express")
const app=express()
const {Admin}=require('../Db/index')
app.use(express.json())
async function adminmiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    const value=await Admin.findOne({
        username:username,
        password:password
    })
    console.log(value)
    if(value){
        next();
    }else{
        res.status(403).json({
            msg:"Admin doesnt exist"
        })
    }
}
module.exports=adminmiddleware
