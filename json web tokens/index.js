const express=require("express")
const app=express()
const jwt=require("jsonwebtoken")
const jwtpassword="12345"
app.use(express.json())
const users=[{
    username:"ashwin",
    password:"123"
},
{
    username:"dhaya",
    password:"456"
},
{
    username:"jones",
    password:"789"
}]
function usernamevalidator(username,password){
    let validator=false;
    for(let i=0;i<users.length;i++){
        if(users[i].username==username && users[i].password==password){
            validator=true;
        }
    }
    return validator;
}
app.post("/signin",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    if(!usernamevalidator(username,password)){
        return res.status(403).json({
            msg:"cannot generate web token"
        })
    }
    var token=jwt.sign({username:username},jwtpassword);
    return res.json({
        token
    })
    
})
app.listen(3000);