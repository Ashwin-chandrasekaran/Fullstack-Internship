const express=require("express")
const app=express();
app.use(express.json())

function usermiddleware(req,res,next){
    const username=req.headers.username
    const password=req.headers.password
    if(!(username=="ashwin" && password=="pass")){
        res.status(411).json({
            msg: "username or password wrong"
        })
        return
    }else{
        next();
    }
}
function kidneyidmiddleware(req,res,next){
    const kidneyid=req.query.kidneyid
    if(!(kidneyid==1 || kidneyid==2)){
        res.status(411).json({
            msg: "wrong kidneyid"
        })
        return
    }else{
        next();
    }
}
app.get('/health-checkup',usermiddleware,kidneyidmiddleware,(req,res)=>{
    res.send("your heart is healthy");
})
app.listen(3000)