const express=require("express")
const adminmiddleware = require("../middlewares/admin")
const router=express.Router()
const {Admin,Course}=require("../Db")
router.post("/signup",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
await Admin.create({
    username:username,
    password:password
})
res.json("Admin created successfully")
})
router.post("/course",adminmiddleware,async(req,res)=>{
    const newcourse=await Course.create({
        title:req.body.title,
        description:req.body.description,
        imageLink:req.body.imageLink,
        price:req.body.price
    })
    res.json({msg : "course created successfully", courseid:newcourse._id})
})
router.get("/courses",async (req,res)=>{
    const courses=await Course.find({})
    res.json({
        "courses":courses
    })
})
module.exports=router
