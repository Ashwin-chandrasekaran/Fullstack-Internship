const express=require("express")
const app=express();
const zod=require("zod");
// const schema=zod.array(zod.number())
const schema=zod.object({
    email:zod.string(),
    password:zod.string(),
    country:zod.literal("IN").or(zod.literal("US")),
    kidney:zod.array(zod.number())
})
app.use(express.json());
app.get('/health-checkup',(req,res)=>{
    const kidney=req.body.details;
    const response=schema.safeParse(kidney);
    if(!response.success){
        res.status(411).json({
            msg: "something wrong with your input"
        })
    }else{
        res.send(
            response
        )
    }
})
app.listen(3000)
