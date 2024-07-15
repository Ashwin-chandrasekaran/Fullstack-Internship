const express=require("express")
const mongoose=require("mongoose")
const authmiddleware = require("../middleware")
const { Account } = require("../db")
const app=express()
const router=express.Router()
router.get("/balance",authmiddleware,async(req,res)=>{
    const userId=req.userId
    const account=await Account.findOne({
        userId:userId
    })
    res.json({
        balance:account.balance
    })
})
router.put("/transfer",authmiddleware,async(req,res)=>{
    const session=await mongoose.startSession()
    session.startTransaction()
    const {to,amount}=req.body
    const userId=req.userId
    const account=await Account.findOne({
        userId:userId
    }).session(session)
    if(account.balance<amount || !account){
        await session.abortTransaction()
        res.status(403).json({
            msg:"insufficient balance"
        })
        return
    }
    const toid=await Account.findOne({
        userId:to
    }).session(session)
    if(!toid){
        await session.abortTransaction()
        res.status(403).json({
            msg:"invalid account"
        })
        return
    }
    await Account.updateOne({
        userId:toid
    },{
        $inc:{
            balance:amount
        }
    }).session(session)
    await Account.updateOne({
        userId:userId
    },{
        $inc:{
            balance:-amount
        }
    }).session(session)
    await session.commitTransaction()
    res.json({
        msg:"transfer successfully"
    })
})
module.exports=router
