const express=require("express")
const adminmiddleware = require("../middlewares/admin")
const usermiddleware=require("../middlewares/user")
const router=express.Router()
const {User,Course}=require("../Db")
router.post("/signup",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
await User.create({
    username:username,
    password:password
})
res.json("User created successfully")
})
router.post("/courses",async(req,res)=>{
    const username=req.body.username;
    const courses=await Course.find({})
    res.json({"courses":courses})
})
router.post("/course/:course_id",usermiddleware,async(req,res)=>{
    const courseid=req.params.course_id;
    const username=req.headers.username
    await User.updateOne({
        username:username
    },{
       "$push":{
        purchasedCourse:courseid
       } 
    })
    res.json({
        msg:"purchase completed successfully"
    })
})
router.get("/purchasedcourses",usermiddleware,async(req,res)=>{
    const username=req.headers.username;
    const user=await User.findOne({
        username:username
    })
    const coursepurchased=await Course.find({
        _id: {
            "$in": user.purchasedCourse
        }
    })
    res.json({
        course:coursepurchased
    })
})
module.exports=router;