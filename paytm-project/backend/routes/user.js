const authmiddleware = require("../middleware")
const express=require("express")
const app=express()
const router=express.Router()
const {User,Account}=require("../db/index")
const {signup, updatebody}=require("../types")
const {signin}=require("../types")
const jwt=require("jsonwebtoken")
const {JWT_SECRET} = require("../config")


router.post("/sign-up",async (req,res)=>{
    const createpayload=req.body
    const {success}=signup.safeParse(createpayload)
    if(!success){
        res.status(401).json({
            msg:"invalid input for signup"
        })
        return
    }
    const existinguser=await User.findOne({
        username:req.body.username
    })
    if(existinguser){
        res.status(401).json({
            msg:"username already exists"
        })
        return
    }
    const user=await User.create({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username,
        password:req.body.password

    })
    const userId=user._id
    const token=jwt.sign({
        userId
    },JWT_SECRET)
    await Account.create({
        userId:userId
    ,
        balance:Math.random()*1000 + 1
    })
    return res.status(200).json(
        {
            message: "User created successfully",
            token: token
        }
    )
})
router.post("/sign-in",async(req,res)=>{
    const payload=req.body
    const {success}=signin.safeParse(payload)
    if(!success){
        res.status(401).json({
            msg:"invalid input for signin"
        })
        return
    }
    const user=await User.findOne({
        username:req.body.username,
        password:req.body.password
    })
    if(user){
        const token=jwt.sign({
            userId:user._id
        },JWT_SECRET)
        res.status(200).json({
            token: token
        })
    }

})
router.put("/",authmiddleware,async(req,res)=>{
    const paylaod=req.body
    const {success}=updatebody.safeParse(paylaod)
    if(!success){
        res.status(411).json({
            msg:"error while updating information"
        })
        return
    }
    await User.updateOne({_id:req.userId},req.body)
    res.json({
        msg:"updated successfully"
    })

})
router.get("/bulk",async(req,res)=>{
    const filter=req.query.filter || ""
    const users=await User.find({
        $or:[{
            firstname:{
                "$regex":filter
            }
        },
        {
            lastname:{
            "$regex":filter
            }
        }]
    })
    res.json({
        user:users.map(user=>({
            
            username:user.username,
            firstname:user.firstname,
            lastname:user.lastname,
            id:user._id
        }))
    })
})
module.exports=router