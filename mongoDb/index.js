const express=require("express")
const app=express()
app.use(express.json())
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://ashwin8248:Ashwin007%23@nodeexpresscourse.izryu5r.mongodb.net/user-app")
const User=mongoose.model('Users', {
    name:String,
    email:String,
    password:String

})
app.post("/sign-up",async function(req,res){
    const name=req.body.name;
    const username=req.body.email;
    const password=req.body.password;
    const existinguser=await User.findOne({email:username});
    if(existinguser){
        return res.status(401).send("user already exists")
    }

    const user=new User({
    name:name,
    email:username,
    password:password
    })
    user.save();
    res.json({
        msg:"user created successfully"
    })
})
app.listen(3000)
